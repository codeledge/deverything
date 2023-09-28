export const VAT_REGISTRATION_NUMBER_SAMPLES = [
  "IE1234567T",
  "GB123456789",
  "XI123456789",
];

export const COMPANY_NAME_SAMPLES = [
  "Acme Inc.",
  "Globex Ltd.",
  "Aurora LLC",
  "Serenity Systems",
  "Vulcan Ventures",
  "Umbrella Corp.",
];

export type Company = {
  name: string;
  vatRegNumber?: string;
};
