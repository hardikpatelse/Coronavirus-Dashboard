exports.allRegions = [
  {
    name: "World",
    sheetName: "Global",
    startKey: "OTHER PLACES",
    totalKey: "TOTAL",
    scraper: "bno"
  },
  {
    name: "USA",
    sheetName: "USA",
    startKey: "UNITED STATES",
    totalKey: "U.S. TOTAL",
    scraper: ""
  },
  {
    name: "China",
    sheetName: "China",
    startKey: "MAINLAND CHINA",
    totalKey: "TOTAL",
    scraper: "bno"
  },
  {
    name: "Canada",
    sheetName: "Canada",
    startKey: "CANADA",
    totalKey: "TOTAL",
    scraper: "bno"
  },
  {
    name: "Australia",
    sheetName: "Australia",
    startKey: "AUSTRALIA",
    totalKey: "TOTAL",
    scraper: "bno"
  },
  {
    name: "Latin America",
    sheetName: "LatinAmerica",
    startKey: "Mundo Hispano",
    totalKey: "TOTAL",
    scraper: "bno"
  },
  {
    name: "Europe",
    sheetName: "Europe",
    scraper: "coronatracker"
  }
];

exports.displayOrder = [
  "Global",
  "USA",
  "Europe",
  "China",
  "Canada",
  "Australia",
  "LatinAmerica"
];

exports.countryLists = {
  Europe: ["Austria",
  "Belgium",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Ireland",
  "Italy",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Netherlands",
  "Poland",
  "Portugal",
  "Romania",
  "Slovak Republic",
  "Slovenia",
  "Spain",
  "Sweden",
  "United Kingdom"]

};

exports.regionStructure = {
  regionName: "",
  regions: [],
  regionTotal: {}
};

exports.countryStructure = {
  country: "TOTAL",
  cases: "-",
  deaths: "-",
  recovered: "-",
  serious: "-",
  critical: "-"
};
