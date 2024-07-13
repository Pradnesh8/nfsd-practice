// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Country {
    id: ID!
    name: String!
    languages: [Language]
  }
  type Continent {
    id: ID!
    name: String!
    countries:[Country]
  }
  type Language {
    id: ID!
    name: String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    countries: [Country],
    continents: [Continent],
    languages: [Language]
  }
  type Mutation {
    addLanguage(name: String!): Language!
    addCountry(name: String!,languageIds:[Int]): Country!
  }
`;