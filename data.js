// data.js - World Cup 2026 Complete Tournament Data
window.WC = {
  venues: [
    // ===== MEXICO VENUES (3) =====
    {
      id: "mexico-city-stadium",
      stadium: "Estadio Azteca",
      city: "Mexico City",
      country: "Mexico",
      capacity: 83000,
      matches: [
        { n: 1, date: "2026-06-11T16:00:00Z", kick: "16:00", home: "Mexico", away: "South Africa", group: "A" },
        { n: 17, date: "2026-06-18T20:00:00Z", kick: "20:00", home: "Uzbekistan", away: "Colombia", group: "K" },
        { n: 33, date: "2026-06-25T19:00:00Z", kick: "19:00", home: "Czechia", away: "Mexico", group: "A" }
      ]
    },
    {
      id: "guadalajara-stadium",
      stadium: "Estadio Akron",
      city: "Guadalajara",
      country: "Mexico",
      capacity: 46000,
      matches: [
        { n: 2, date: "2026-06-12T14:00:00Z", kick: "14:00", home: "Korea Republic", away: "Czechia", group: "A" },
        { n: 18, date: "2026-06-19T19:00:00Z", kick: "19:00", home: "Mexico", away: "Korea Republic", group: "A" },
        { n: 34, date: "2026-06-24T20:00:00Z", kick: "20:00", home: "Colombia", away: "Congo DR", group: "K" }
      ]
    },
    {
      id: "monterrey-stadium",
      stadium: "Estadio BBVA",
      city: "Monterrey",
      country: "Mexico",
      capacity: 53500,
      matches: [
        { n: 3, date: "2026-06-15T18:00:00Z", kick: "18:00", home: "Sweden", away: "Tunisia", group: "F" },
        { n: 19, date: "2026-06-21T22:00:00Z", kick: "22:00", home: "Tunisia", away: "Japan", group: "F" },
        { n: 35, date: "2026-06-25T19:00:00Z", kick: "19:00", home: "South Africa", away: "Korea Republic", group: "A" }
      ]
    },
    // ===== CANADA VENUES (2) =====
    {
      id: "toronto-stadium",
      stadium: "BMO Field",
      city: "Toronto",
      country: "Canada",
      capacity: 45000,
      matches: [
        { n: 4, date: "2026-06-12T16:00:00Z", kick: "16:00", home: "Canada", away: "Bosnia and Herzegovina", group: "B" },
        { n: 20, date: "2026-06-17T19:00:00Z", kick: "19:00", home: "Ghana", away: "Panama", group: "L" },
        { n: 36, date: "2026-06-23T19:00:00Z", kick: "19:00", home: "Panama", away: "Croatia", group: "L" }
      ]
    },
    {
      id: "vancouver-stadium",
      stadium: "BC Place",
      city: "Vancouver",
      country: "Canada",
      capacity: 54500,
      matches: [
        { n: 5, date: "2026-06-14T22:00:00Z", kick: "22:00", home: "Australia", away: "Türkiye", group: "D" },
        { n: 21, date: "2026-06-18T15:00:00Z", kick: "15:00", home: "Canada", away: "Qatar", group: "B" },
        { n: 37, date: "2026-06-24T12:00:00Z", kick: "12:00", home: "Switzerland", away: "Canada", group: "B" }
      ]
    },
    // ===== USA VENUES (11) =====
    {
      id: "sf-bay-stadium",
      stadium: "Levi's Stadium",
      city: "SF Bay",
      country: "USA",
      capacity: 68500,
      matches: [
        { n: 6, date: "2026-06-13T16:00:00Z", kick: "16:00", home: "Qatar", away: "Switzerland", group: "B" },
        { n: 22, date: "2026-06-17T21:00:00Z", kick: "21:00", home: "Austria", away: "Jordan", group: "J" },
        { n: 38, date: "2026-06-23T20:00:00Z", kick: "20:00", home: "Jordan", away: "Algeria", group: "J" }
      ]
    },
    {
      id: "la-stadium",
      stadium: "SoFi Stadium",
      city: "Los Angeles",
      country: "USA",
      capacity: 70000,
      matches: [
        { n: 7, date: "2026-06-13T18:00:00Z", kick: "18:00", home: "USA", away: "Paraguay", group: "D" },
        { n: 23, date: "2026-06-16T18:00:00Z", kick: "18:00", home: "IR Iran", away: "New Zealand", group: "G" },
        { n: 39, date: "2026-06-21T12:00:00Z", kick: "12:00", home: "Belgium", away: "IR Iran", group: "G" }
      ]
    },
    {
      id: "new-york-new-jersey-stadium",
      stadium: "MetLife Stadium",
      city: "NY/NJ",
      country: "USA",
      capacity: 82500,
      matches: [
        { n: 8, date: "2026-06-13T20:00:00Z", kick: "20:00", home: "Brazil", away: "Morocco", group: "C" },
        { n: 24, date: "2026-06-16T15:00:00Z", kick: "15:00", home: "France", away: "Senegal", group: "I" },
        { n: 40, date: "2026-06-23T20:00:00Z", kick: "20:00", home: "Norway", away: "Senegal", group: "I" }
      ]
    },
    {
      id: "houston-stadium",
      stadium: "NRG Stadium",
      city: "Houston",
      country: "USA",
      capacity: 72000,
      matches: [
        { n: 9, date: "2026-06-14T14:00:00Z", kick: "14:00", home: "Germany", away: "Curaçao", group: "E" },
        { n: 25, date: "2026-06-17T12:00:00Z", kick: "12:00", home: "Portugal", away: "Congo DR", group: "K" },
        { n: 41, date: "2026-06-23T12:00:00Z", kick: "12:00", home: "Portugal", away: "Uzbekistan", group: "K" }
      ]
    },
    {
      id: "dallas-stadium",
      stadium: "AT&T Stadium",
      city: "Dallas",
      country: "USA",
      capacity: 80000,
      matches: [
        { n: 10, date: "2026-06-14T18:00:00Z", kick: "18:00", home: "Netherlands", away: "Japan", group: "F" },
        { n: 26, date: "2026-06-17T15:00:00Z", kick: "15:00", home: "England", away: "Croatia", group: "L" },
        { n: 42, date: "2026-06-25T18:00:00Z", kick: "18:00", home: "Japan", away: "Sweden", group: "F" }
      ]
    },
    {
      id: "philadelphia-stadium",
      stadium: "Lincoln Financial Field",
      city: "Philadelphia",
      country: "USA",
      capacity: 69000,
      matches: [
        { n: 11, date: "2026-06-14T20:00:00Z", kick: "20:00", home: "Côte d'Ivoire", away: "Ecuador", group: "E" },
        { n: 27, date: "2026-06-20T21:00:00Z", kick: "21:00", home: "Brazil", away: "Haiti", group: "C" },
        { n: 43, date: "2026-06-25T16:00:00Z", kick: "16:00", home: "Curaçao", away: "Côte d'Ivoire", group: "E" }
      ]
    },
    {
      id: "boston-stadium",
      stadium: "Gillette Stadium",
      city: "Boston",
      country: "USA",
      capacity: 65000,
      matches: [
        { n: 12, date: "2026-06-14T22:00:00Z", kick: "22:00", home: "Haiti", away: "Scotland", group: "C" },
        { n: 28, date: "2026-06-16T18:00:00Z", kick: "18:00", home: "Iraq", away: "Norway", group: "I" },
        { n: 44, date: "2026-06-23T16:00:00Z", kick: "16:00", home: "England", away: "Ghana", group: "L" }
      ]
    },
    {
      id: "atlanta-stadium",
      stadium: "Mercedes-Benz Stadium",
      city: "Atlanta",
      country: "USA",
      capacity: 71000,
      matches: [
        { n: 13, date: "2026-06-15T14:00:00Z", kick: "14:00", home: "Spain", away: "Cabo Verde", group: "H" },
        { n: 29, date: "2026-06-18T12:00:00Z", kick: "12:00", home: "Czechia", away: "South Africa", group: "A" },
        { n: 45, date: "2026-06-24T18:00:00Z", kick: "18:00", home: "Morocco", away: "Haiti", group: "C" }
      ]
    },
    {
      id: "seattle-stadium",
      stadium: "Lumen Field",
      city: "Seattle",
      country: "USA",
      capacity: 68000,
      matches: [
        { n: 14, date: "2026-06-15T18:00:00Z", kick: "18:00", home: "Belgium", away: "Egypt", group: "G" },
        { n: 30, date: "2026-06-19T12:00:00Z", kick: "12:00", home: "USA", away: "Australia", group: "D" },
        { n: 46, date: "2026-06-24T12:00:00Z", kick: "12:00", home: "Bosnia and Herzegovina", away: "Qatar", group: "B" }
      ]
    },
    {
      id: "miami-stadium",
      stadium: "Hard Rock Stadium",
      city: "Miami",
      country: "USA",
      capacity: 65000,
      matches: [
        { n: 15, date: "2026-06-15T22:00:00Z", kick: "22:00", home: "Saudi Arabia", away: "Uruguay", group: "H" },
        { n: 31, date: "2026-06-21T18:00:00Z", kick: "18:00", home: "Uruguay", away: "Cabo Verde", group: "H" },
        { n: 47, date: "2026-06-24T18:00:00Z", kick: "18:00", home: "Scotland", away: "Brazil", group: "C" }
      ]
    },
    {
      id: "kansas-city-stadium",
      stadium: "Arrowhead Stadium",
      city: "Kansas City",
      country: "USA",
      capacity: 76000,
      matches: [
        { n: 16, date: "2026-06-17T20:00:00Z", kick: "20:00", home: "Argentina", away: "Algeria", group: "J" },
        { n: 32, date: "2026-06-21T19:00:00Z", kick: "19:00", home: "Ecuador", away: "Curaçao", group: "E" },
        { n: 48, date: "2026-06-25T18:00:00Z", kick: "18:00", home: "Tunisia", away: "Netherlands", group: "F" }
      ]
    },
    // ===== KNOCKOUT ROUND VENUES =====
    {
      id: "la-knockout-stadium",
      stadium: "SoFi Stadium",
      city: "Los Angeles",
      country: "USA",
      capacity: 70000,
      matches: [
        { n: 49, date: "2026-06-28T12:00:00Z", kick: "12:00", home: "2A", away: "2B", group: "R32" },
        { n: 50, date: "2026-07-02T12:00:00Z", kick: "12:00", home: "1H", away: "2J", group: "R32" },
        { n: 80, date: "2026-07-10T12:00:00Z", kick: "12:00", home: "TBD", away: "TBD", group: "QF" }
      ]
    },
    {
      id: "houston-knockout-stadium",
      stadium: "NRG Stadium",
      city: "Houston",
      country: "USA",
      capacity: 72000,
      matches: [
        { n: 51, date: "2026-06-29T12:00:00Z", kick: "12:00", home: "1C", away: "2F", group: "R32" },
        { n: 52, date: "2026-07-04T12:00:00Z", kick: "12:00", home: "TBD", away: "TBD", group: "R16" },
        { n: 81, date: "2026-07-10T16:00:00Z", kick: "16:00", home: "TBD", away: "TBD", group: "QF" }
      ]
    },
    {
      id: "boston-knockout-stadium",
      stadium: "Gillette Stadium",
      city: "Boston",
      country: "USA",
      capacity: 65000,
      matches: [
        { n: 53, date: "2026-06-29T16:30:00Z", kick: "16:30", home: "1E", away: "3ABCDF", group: "R32" },
        { n: 54, date: "2026-07-09T16:00:00Z", kick: "16:00", home: "TBD", away: "TBD", group: "R16" },
        { n: 82, date: "2026-07-11T16:00:00Z", kick: "16:00", home: "TBD", away: "TBD", group: "QF" }
      ]
    },
    {
      id: "dallas-knockout-stadium",
      stadium: "AT&T Stadium",
      city: "Dallas",
      country: "USA",
      capacity: 80000,
      matches: [
        { n: 55, date: "2026-06-30T12:00:00Z", kick: "12:00", home: "2E", away: "2I", group: "R32" },
        { n: 56, date: "2026-07-03T13:00:00Z", kick: "13:00", home: "2D", away: "2G", group: "R32" },
        { n: 83, date: "2026-07-11T20:00:00Z", kick: "20:00", home: "TBD", away: "TBD", group: "QF" }
      ]
    },
    {
      id: "nynj-knockout-stadium",
      stadium: "MetLife Stadium",
      city: "NY/NJ",
      country: "USA",
      capacity: 82500,
      matches: [
        { n: 57, date: "2026-06-30T17:00:00Z", kick: "17:00", home: "1I", away: "3CDFGH", group: "R32" },
        { n: 58, date: "2026-07-05T16:00:00Z", kick: "16:00", home: "TBD", away: "TBD", group: "R16" },
        { n: 104, date: "2026-07-19T15:00:00Z", kick: "15:00", home: "TBD", away: "TBD", group: "Final" }
      ]
    },
    {
      id: "monterrey-knockout-stadium",
      stadium: "Estadio BBVA",
      city: "Monterrey",
      country: "Mexico",
      capacity: 53500,
      matches: [
        { n: 59, date: "2026-06-30T19:00:00Z", kick: "19:00", home: "1F", away: "2C", group: "R32" },
        { n: 60, date: "2026-07-06T14:00:00Z", kick: "14:00", home: "TBD", away: "TBD", group: "R16" }
      ]
    },
    {
      id: "atlanta-knockout-stadium",
      stadium: "Mercedes-Benz Stadium",
      city: "Atlanta",
      country: "USA",
      capacity: 71000,
      matches: [
        { n: 61, date: "2026-07-01T12:00:00Z", kick: "12:00", home: "1L", away: "3EHIJK", group: "R32" },
        { n: 62, date: "2026-07-07T12:00:00Z", kick: "12:00", home: "TBD", away: "TBD", group: "R16" },
        { n: 102, date: "2026-07-15T15:00:00Z", kick: "15:00", home: "TBD", away: "TBD", group: "SF" }
      ]
    },
    {
      id: "seattle-knockout-stadium",
      stadium: "Lumen Field",
      city: "Seattle",
      country: "USA",
      capacity: 68000,
      matches: [
        { n: 63, date: "2026-07-01T13:00:00Z", kick: "13:00", home: "1G", away: "3AEHIJ", group: "R32" },
        { n: 64, date: "2026-07-07T13:00:00Z", kick: "13:00", home: "TBD", away: "TBD", group: "R16" }
      ]
    },
    {
      id: "mexico-city-knockout-stadium",
      stadium: "Estadio Azteca",
      city: "Mexico City",
      country: "Mexico",
      capacity: 83000,
      matches: [
        { n: 65, date: "2026-07-01T19:00:00Z", kick: "19:00", home: "1A", away: "3CEFHI", group: "R32" },
        { n: 66, date: "2026-07-06T18:00:00Z", kick: "18:00", home: "TBD", away: "TBD", group: "R16" }
      ]
    },
    {
      id: "sf-bay-knockout-stadium",
      stadium: "Levi's Stadium",
      city: "SF Bay",
      country: "USA",
      capacity: 68500,
      matches: [
        { n: 67, date: "2026-07-02T17:00:00Z", kick: "17:00", home: "1D", away: "3BEFIJ", group: "R32" },
        { n: 68, date: "2026-07-07T17:00:00Z", kick: "17:00", home: "TBD", away: "TBD", group: "R16" }
      ]
    },
    {
      id: "toronto-knockout-stadium",
      stadium: "BMO Field",
      city: "Toronto",
      country: "Canada",
      capacity: 45000,
      matches: [
        { n: 69, date: "2026-07-02T19:00:00Z", kick: "19:00", home: "2K", away: "2L", group: "R32" },
        { n: 70, date: "2026-07-08T16:00:00Z", kick: "16:00", home: "TBD", away: "TBD", group: "R16" }
      ]
    },
    {
      id: "miami-knockout-stadium",
      stadium: "Hard Rock Stadium",
      city: "Miami",
      country: "USA",
      capacity: 65000,
      matches: [
        { n: 71, date: "2026-07-03T18:00:00Z", kick: "18:00", home: "1J", away: "2H", group: "R32" },
        { n: 72, date: "2026-07-08T20:00:00Z", kick: "20:00", home: "TBD", away: "TBD", group: "R16" },
        { n: 101, date: "2026-07-11T17:00:00Z", kick: "17:00", home: "TBD", away: "TBD", group: "QF" }
      ]
    },
    {
      id: "vancouver-knockout-stadium",
      stadium: "BC Place",
      city: "Vancouver",
      country: "Canada",
      capacity: 54500,
      matches: [
        { n: 73, date: "2026-07-03T20:00:00Z", kick: "20:00", home: "1B", away: "3EFGIJ", group: "R32" },
        { n: 74, date: "2026-07-09T20:00:00Z", kick: "20:00", home: "TBD", away: "TBD", group: "R16" }
      ]
    },
    {
      id: "philly-knockout-stadium",
      stadium: "Lincoln Financial Field",
      city: "Philadelphia",
      country: "USA",
      capacity: 69000,
      matches: [
        { n: 75, date: "2026-07-04T17:00:00Z", kick: "17:00", home: "TBD", away: "TBD", group: "R16" },
        { n: 76, date: "2026-07-09T12:00:00Z", kick: "12:00", home: "TBD", away: "TBD", group: "R16" }
      ]
    },
    {
      id: "kansas-city-knockout-stadium",
      stadium: "Arrowhead Stadium",
      city: "Kansas City",
      country: "USA",
      capacity: 76000,
      matches: [
        { n: 77, date: "2026-07-04T20:30:00Z", kick: "20:30", home: "1K", away: "3DEIJL", group: "R32" },
        { n: 78, date: "2026-07-12T20:00:00Z", kick: "20:00", home: "TBD", away: "TBD", group: "QF" }
      ]
    },
    // ===== QUARTER-FINALS, SEMI-FINALS, THIRD PLACE, FINAL =====
    {
      id: "dallas-semi-stadium",
      stadium: "AT&T Stadium",
      city: "Dallas",
      country: "USA",
      capacity: 80000,
      matches: [
        { n: 79, date: "2026-07-06T14:00:00Z", kick: "14:00", home: "TBD", away: "TBD", group: "R16" },
        { n: 103, date: "2026-07-14T14:00:00Z", kick: "14:00", home: "TBD", away: "TBD", group: "SF" }
      ]
    },
    {
      id: "miami-semi-stadium",
      stadium: "Hard Rock Stadium",
      city: "Miami",
      country: "USA",
      capacity: 65000,
      matches: [
        { n: 100, date: "2026-07-18T17:00:00Z", kick: "17:00", home: "TBD", away: "TBD", group: "3P" }
      ]
    }
  ]
};