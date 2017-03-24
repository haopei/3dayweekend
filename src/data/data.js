export const holidays = [
    { primaryName: "New Year's Day", month: [1], day: 1, secondaryName: "" },
    { primaryName: "Republic Day", month: [2], day: 23, secondaryName: "" },
    { primaryName: "Phagwah", month: [2, 3], day: null, secondaryName: "" },
    { primaryName: "Good Friday", month: [3, 4], day: null, secondaryName: "" },
    { primaryName: "Labour Day", month: [5], day: 1, secondaryName: "" },
    { primaryName: "Arrival Day", month: [5], day: 5, secondaryName: "" },
    { primaryName: "Independence Day", month: [5], day: 26, secondaryName: "" },
    { primaryName: "Caricom Day", month: [7], day: null , secondaryName: "" },
    { primaryName: "Emancipation Day", month: [8], day: 1, secondaryName: "" },
    { primaryName: "Diwali", month: [10, 11], day: null, secondaryName: "Deepavali" },
    { primaryName: "Christmas Day", month: [12], day: 25, secondaryName: "X-Mas Day" },
    { primaryName: "Boxing Day", month: [12], day: 26, secondaryName: "" },
    { primaryName: "Youman-Nabi", month: null, day: null, secondaryName: "" },
    { primaryName: "Eid-ul-Adha", month: null, day: null, secondaryName: "" }
]

// Dynamic days
//
// Caricom Day: first monday in july
// Deepavali/Diwali: October or November
// Good Friday/Easter Monday: March or April
// Youman Nabi: regresses 10 days per year (Jan 4, 2015, Dec 24 2015) (regression can take it into same year)
// Eid-ul-Adha: regresses 10 days per year (sep 24, 2015)
