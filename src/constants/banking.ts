export const IBAN_SAMPLES = [
  "AD1200012030200359100100",
  "BA391290079401028494",
  "BE68539007547034",
  "BG80BNBG96611020345678",
  "FI2112345600000785",
  "FO6264600001631634",
  "FR1420041010050500013M02606",
  "GB29NWBK60161331926819",
  "GE29NB0000000101904917",
];

export const BIC_SWIFT_SAMPLES = [
  "ABNANL2A",
  "BKENGB2LXXX",
  "BUKBGB22",
  "CITIUS33",
  "CITIUS33XXX",
  "CSCHUS6SXXX",
  "NOSCCATTXXX",
];

export const CARD_NUMBER_SAMPLES = [
  "371449635398431", //american express
  "30569309025904", //diners club
  "6011111111111117", //discover
  "3530111333300000", //jcb
  "6304000000000000", //laser
  "5555555555554444", //mastercard
  "4111111111111111", //visa
];

//An ABA routing number is a nine-digit code that identifies banks in the U.S.
export const ABA_NUMBER_SAMPLES = [
  "111000025",
  "081000210",
  "104000029",
  "091300023",
  "123000220",
];

export const ROUTING_NUMBER_SAMPLES = [
  "637530215",
  "130436324",
  "611531133",
  "865673685",
];

export const BANK_ACCOUNT_NUMBER_SAMPLES = [
  "64766774",
  "39526009",
  "25048213",
  "72796383",
];

export const SORT_CODE_SAMPLES = ["100000", "902127", "800551"];

export const SSN_SAMPLES = ["235-55-7216", "372-37-3976", "414-99-6488"];

export const BANK_NAME_SAMPLES = [
  "JPMorgan Chase & Co.",
  "Bank of America Corporation",
  "Wells Fargo & Company",
  "Citigroup Inc.",
  "Goldman Sachs Group Inc.",
];

export type BankAccount = {
  abaNumber?: string;
  accountHolderName: string;
  accountHolderType: "company" | "individual" | "other";
  accountNumber: string;
  accountType?: "checking" | "savings";
  bankName?: string;
  bsbNumber?: string;
  bankAddress?: string;
  bicSwift?: string;
  branchCode?: string;
  iban?: string;
  routingNumber?: string;
  institutionNumber?: string;
  branchTransitNumber?: string;
  sortCode?: string;
};

export const UK_BANK_ACCOUNT_SAMPLES: BankAccount[] = [
  {
    accountHolderName: "John Peters",
    accountNumber: "12345678",
    bankAddress: "1 Churchill Place, Canary Wharf, London, E14 5HP, UK",
    bankName: "Barclays plc",
    bicSwift: "BARCGB22",
    iban: "GB51BARC20039534871253",
    sortCode: "12-34-56",
    accountHolderType: "individual",
  },
  {
    accountHolderName: "Jane Evans",
    accountNumber: "87654321",
    bankAddress: "8 Canada Square, London, E14 5HQ, UK",
    bankName: "HSBC Holdings plc",
    bicSwift: "HSBCGB2L",
    iban: "GB82BARC20031847813531",
    sortCode: "65-43-21",
    accountHolderType: "company",
  },
];

export const US_BANK_ACCOUNT_SAMPLES: BankAccount[] = [
  {
    accountHolderName: "Jack I. Taylor",
    accountNumber: "123456789012",
    accountType: "checking",
    bankAddress:
      "Bank of America Corporate Center, 100 North Tryon Street, Charlotte, NC 28255, USA",
    bankName: "Bank of America Corporation",
    routingNumber: "111000025",
    accountHolderType: "individual",
  },
  {
    accountHolderName: "Sally T King",
    accountNumber: "987654321098",
    accountType: "savings",
    bankAddress: "383 Madison Avenue, New York, NY 10179, USA",
    bankName: "JPMorgan Chase & Co.",
    routingNumber: "021000021",
    accountHolderType: "company",
  },
];

export const AU_BANK_ACCOUNT_SAMPLES: BankAccount[] = [
  {
    accountHolderName: "William Kevin White",
    accountNumber: "123456789012",
    accountType: "savings",
    bankAddress:
      "Commonwealth Bank Centre, Tower 1, 201 Sussex Street, Sydney, NSW 2000, Australia",
    bankName: "Commonwealth Bank of Australia",
    bicSwift: "CTBAAU2S",
    bsbNumber: "062-000",
    accountHolderType: "individual",
  },
  {
    accountHolderName: "Jennifer Ann Brown",
    accountNumber: "987654321098",
    accountType: "checking",
    bankAddress: "Westpac Place, 275 Kent Street, Sydney, NSW 2000, Australia",
    bankName: "Westpac Banking Corporation",
    bicSwift: "WPACAU2S",
    bsbNumber: "032-001",
    accountHolderType: "company",
  },
];

export const CA_BANK_ACCOUNT_SAMPLES: BankAccount[] = [
  {
    accountHolderName: "Charles Green",
    accountNumber: "123456789012",
    accountType: "savings",
    bankAddress:
      "Royal Bank Plaza, 200 Bay Street, North Tower, Toronto, ON M5J 2J5, Canada",
    bankName: "Royal Bank of Canada",
    branchTransitNumber: "45678",
    institutionNumber: "123",
    accountHolderType: "individual",
  },
  {
    accountHolderName: "Olivia Orange",
    accountNumber: "987654321098",
    accountType: "checking",
    bankAddress:
      "TD Canada Trust Tower, 161 Bay Street, Toronto, ON M5J 2S8, Canada",
    bankName: "Toronto-Dominion Bank",
    branchTransitNumber: "65432",
    institutionNumber: "987",
    accountHolderType: "company",
  },
];

export const BANK_ACCOUNT_SAMPLES = [
  ...UK_BANK_ACCOUNT_SAMPLES,
  ...US_BANK_ACCOUNT_SAMPLES,
  ...AU_BANK_ACCOUNT_SAMPLES,
  ...CA_BANK_ACCOUNT_SAMPLES,
];
