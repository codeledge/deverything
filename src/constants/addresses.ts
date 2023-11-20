// Prefix with Random to avoid name collision with the Address type from other libs
export type RandomAddress = {
  city: string;
  country: string;
  countryCode: string;
  state?: string;
  street: string;
  line2?: string;
  number: string;
  zip: string;
};

export const UK_ADDRESSES: RandomAddress[] = [
  {
    city: "London",
    country: "United Kingdom",
    countryCode: "GB",
    line2: "Marylebone",
    number: "221B",
    street: "Baker Street",
    zip: "NW1 6XE",
  },
  {
    city: "Birmingham",
    country: "United Kingdom",
    countryCode: "GB",
    number: "B1 1AA",
    street: "Bordesley Street",
    zip: "B1 1AA",
  },
];

export const US_ADDRESSES: RandomAddress[] = [
  {
    city: "New York",
    country: "United States",
    countryCode: "US",
    state: "NY",
    street: "Broadway",
    line2: "Manhattan",
    number: "42",
    zip: "10036",
  },
  {
    city: "Los Angeles",
    country: "United States",
    countryCode: "US",
    state: "CA",
    street: "Hollywood Boulevard",
    number: "6801",
    zip: "90028",
  },
];

export const EUROPE_ADDRESSES: RandomAddress[] = [
  {
    city: "Paris",
    country: "France",
    countryCode: "FR",
    street: "Rue de Rivoli",
    number: "75001",
    zip: "75001",
  },
  {
    city: "Berlin",
    country: "Germany",
    countryCode: "DE",
    street: "Unter den Linden",
    line2: "Mitte",
    number: "10117",
    zip: "10117",
  },
  {
    city: "Rome",
    country: "Italy",
    countryCode: "IT",
    street: "Via del Corso",
    number: "00186",
    zip: "00186",
  },
  {
    city: "Madrid",
    country: "Spain",
    countryCode: "ES",
    street: "Gran Vía",
    line2: "Sol",
    number: "28013",
    zip: "28013",
  },
];

export const MIXED_ADDRESSES: RandomAddress[] = [
  {
    city: "Moscow",
    country: "Russia",
    countryCode: "RU",
    street: "Tverskaya",
    number: "101000",
    zip: "101000",
  },
  {
    city: "Tokyo",
    country: "Japan",
    countryCode: "JP",
    street: "Shinjuku",
    line2: "Shinjuku City",
    number: "160-0022",
    zip: "160-0022",
  },
  {
    city: "Beijing",
    country: "China",
    countryCode: "CN",
    street: "Changan",
    number: "100005",
    zip: "100005",
  },
  {
    city: "Cairo",
    country: "Egypt",
    countryCode: "EG",
    street: "Al-Muizz",
    number: "11511",
    zip: "11511",
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    countryCode: "AR",
    street: "Avenida de Mayo",
    number: "1002",
    zip: "C1006AAQ",
  },
  {
    city: "Cape Town",
    country: "South Africa",
    countryCode: "ZA",
    street: "Adderley",
    number: "7700",
    zip: "7700",
  },
  {
    city: "Sydney",
    country: "Australia",
    countryCode: "AU",
    street: "George",
    line2: "Haymarket",
    number: "2000",
    zip: "2000",
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    countryCode: "BR",
    street: "Av. Presidente Vargas",
    number: "20021-000",
    zip: "20021-000",
  },
  {
    city: "Mexico City",
    country: "Mexico",
    countryCode: "MX",
    street: "Paseo de la Reforma",
    number: "06500",
    zip: "06500",
  },
];

export const ADDRESSES: RandomAddress[] = [
  ...UK_ADDRESSES,
  ...US_ADDRESSES,
  ...EUROPE_ADDRESSES,
  ...MIXED_ADDRESSES,
];
