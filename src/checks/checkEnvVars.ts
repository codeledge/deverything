import { isArray } from "../validators/isArray";
import { isObject } from "../validators/isObject";

type Keyword = "should" | "shouldNot" | "always" | "never";
type SimpleValidationRule = Keyword | boolean;
type EnvValidation = string[];
type AdvancedValidation = {
  oneOf?: string[];
  endsWith?: string;
  startsWith?: string;
};
const advancedValidationKeys: (keyof AdvancedValidation)[] = [
  "oneOf",
  "endsWith",
  "startsWith",
];
type WithEnvValidation =
  | AdvancedValidation
  | {
      [env: string]: AdvancedValidation | SimpleValidationRule;
    };
type Config = {
  processEnvKey?: string;
};

/**
 * @param envVarsMap
 * @param config
 * @example
 * checkEnvVars({
 *  NEW_API_KEY: true,
 *  OLD_API: false,
 *  ONLY_NON_PROD: ["test", "dev"],
 *  ONLY_PROD: {
 *   prod: true,
 *  },
 *  APP_ENV: {
 *   oneOf: ["test", "dev", "prod"],
 *  },
 *  STRIPE_KEY: {
 *   prod: {
 *    startsWith: "live_key_",
 *    endsWith: "_end",
 *   },
 *  },
 * }, {
 *  processEnvKey: "APP_ENV" // default is "NODE_ENV"
 * })
 */
export const checkEnvVars = (
  envVarsMap: Record<
    string,
    SimpleValidationRule | EnvValidation | WithEnvValidation
  >,
  config?: Config
) => {
  const processEnvKey = config?.processEnvKey || "NODE_ENV";
  const errors: string[] = [];
  const warnings: string[] = [];

  const validateAdvanced = ({
    envVarKey,
    envVarValue,
    validation,
  }: {
    envVarKey: string;
    envVarValue: string | undefined;
    validation: AdvancedValidation;
  }) => {
    if (validation.oneOf) {
      if (envVarValue) {
        if (!validation.oneOf.includes(envVarValue))
          errors.push(
            `${envVarKey}=${envVarValue} is not allowed, use one of: ${validation.oneOf.join(
              ", "
            )}`
          );
      } else {
        errors.push(`${envVarKey} is missing`);
      }
    }

    if (validation.endsWith) {
      if (envVarValue) {
        if (!envVarValue?.endsWith(validation.endsWith)) {
          errors.push(
            `${envVarKey}=${envVarValue} is not allowed, must end in: ${validation.endsWith}`
          );
        }
      } else {
        errors.push(`${envVarKey} is missing`);
      }
    }

    if (validation.startsWith) {
      if (envVarValue) {
        if (!envVarValue?.startsWith(validation.startsWith)) {
          errors.push(
            `${envVarKey}=${envVarValue} is not allowed, must start with: ${validation.startsWith}`
          );
        }
      } else {
        errors.push(`${envVarKey} is missing`);
      }
    }
  };

  const validateSimple = ({
    envVarKey,
    envVarValue,
    rule,
  }: {
    envVarKey: string;
    envVarValue: string | undefined;
    rule: SimpleValidationRule;
  }) => {
    switch (rule) {
      case "should":
        if (!envVarValue) warnings.push(`${envVarKey} should be set`);
        break;
      case "shouldNot":
        if (envVarValue) warnings.push(`${envVarKey} should not be set`);
        break;
      case "never":
      case false:
        if (envVarValue) errors.push(`${envVarKey} is not allowed`);
        break;
      case "always":
      case true:
      default: // safety net if ts gets ignored
        if (!envVarValue) errors.push(`${envVarKey} is missing`);
        break;
    }
  };

  Object.entries(envVarsMap).forEach(([envVarKey, rule]) => {
    const envVarValue = process.env[envVarKey];
    if (isObject(rule)) {
      // Direct
      Object.entries(rule).forEach(([advancedValidationKey, rule]) => {
        if (advancedValidationKeys.includes(advancedValidationKey as any))
          validateAdvanced({
            envVarValue,
            validation: { [advancedValidationKey]: rule },
            envVarKey,
          });
      });

      //With Env
      Object.entries(rule).forEach(([envName, rule]) => {
        if (process.env[processEnvKey] === envName) {
          if (isObject(rule))
            validateAdvanced({
              envVarValue,
              validation: rule as AdvancedValidation,
              envVarKey,
            });
          else
            validateSimple({
              envVarValue,
              rule: rule as SimpleValidationRule,
              envVarKey,
            });
        }
      });
    } else if (isArray(rule)) {
      const envNames = rule;
      envNames.forEach((envName) => {
        if (process.env[processEnvKey] === envName && !envVarValue)
          errors.push(`${envVarKey} is missing`);
      });
    } else {
      validateSimple({
        envVarValue,
        rule: rule as SimpleValidationRule,
        envVarKey,
      });
    }
  });

  if (warnings.length) console.warn(`[WARNING] ` + warnings.join(", "));

  if (errors.length) {
    throw new Error(`[ERROR] ` + errors.join(", "));
  }
};
