/**
 * Whether `arg` is a UUID as defined by RFC 9562: versions 1 to 8 with the
 * RFC variant, or the Nil and Max UUIDs. Case-insensitive.
 */
export const isUUID = (arg: string) =>
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|0{8}-0{4}-0{4}-0{4}-0{12}|f{8}-f{4}-f{4}-f{4}-f{12})$/i.test(
    arg
  );
