// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const data = {
    countries: [
        {
            id: 1,
            name: "India",
            languageIds: [1]
        }
    ], continents: [
        {
            id: 1,
            name: "Asia",
            countryIds: [1]
        }
    ], languages: [
        {
            id: 1,
            name: "Hindi"
        }
    ]
}
export const resolvers = {
    Continent: {
        countries: (parent, args, context, info) => {
            console.log(parent);
            return data.countries.filter(_country => parent.countryIds.includes(_country.id));
        }
    },
    Country: {
        languages: (parent, args, context, info) => {
            console.log(parent);
            return data.languages.filter(_language => parent.languageIds.includes(_language.id));
        }
    },
    Query: {
        countries: () => data.countries,
        continents: () => data.continents,
        languages: () => data.languages
    },
    Mutation: {
        addLanguage: (parent, args, context, info) => {
            console.log(args);
            const newLang = { ...args, id: data.languages.length + 1 };
            data.languages.push(newLang)
            return newLang;
        },
        addCountry: (parent, args, context, info) => {
            console.log(args);
            const newCountry = { ...args, id: data.countries.length + 1 };
            data.countries.push(newCountry)
            return newCountry;
        }
    }
};