const { gql } = require("apollo-server");

const pause = async (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const store = {
  count: 1
};

exports.typeDefs = gql`
  type Query {
    count (id: Int!): Count!
  }

  type Mutation {
    setCount(id: Int!, count: Int!): Count!
  }

  type Count {
    id: Int!,
    value: Int!
  }
`;

exports.resolvers = {
  Query: {
    count: () => {
      return {
        id: 1,
        value: store.count
      }
    }
  },

  Mutation: {
    setCount: async (_, { count }) => {
      await pause(5000)
      store.count = count;
      
      return {
        id: 1,
        value: store.count
      }
    }
  }
};
