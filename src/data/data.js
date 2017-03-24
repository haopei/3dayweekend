export const holidays = [
    { name: "New Year's Day", month: [1], day: 1 },
    { name: "Republic Day", month: [2], day: 23 },
    { name: "Labour Day", month: [5], day: 1 },
    { name: "Arrival Day", month: [5], day: 5 },
    { name: "Independence Day", month: [5], day: 26 },
    { name: "Emancipation Day", month: [8], day: 1 },
    { name: "Christmas Day", month: [12], day: 25, altName: "X-Mas Day" },
    { name: "Boxing Day", month: [12], day: 26 }
]

export const dynamicHolidays = [
    { name: "Phagwah", month: [2, 3], day: null },
    { name: "Good Friday", month: [3, 4], day: null },
    { name: "Caricom Day", month: [7], day: null },
    { name: "Diwali", month: [10, 11], day: null, altName: "Deepavali" },
    { name: "Youman-Nabi", month: null, day: null },
    { name: "Eid-ul-Adha", month: null, day: null }
]


// Dynamic days
//
// Caricom Day: first monday in july
// Deepavali/Diwali: October or November
// Good Friday/Easter Monday: March or April
// Youman Nabi: regresses 10 days per year (Jan 4, 2015, Dec 24 2015) (regression can take it into same year)
// Eid-ul-Adha: regresses 10 days per year (sep 24, 2015)
