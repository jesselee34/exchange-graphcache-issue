import React from "react"
import * as ReactDOM from "react-dom"
import { Provider, createClient, dedupExchange, fetchExchange, gql } from 'urql'
import { cacheExchange } from '@urql/exchange-graphcache'
import schema from './schema.json'
import introspect from './introspect'

import Main from './components/main'

const cacheConfig = {
  schema,
  
  updates: {
    Mutation: {
      setCount (result, args, cache) {
        const { id } = args

        const query = gql`
          query ($id: Int!) {
            count (id: $id) {
              id
              value
            }
          }        
        `

        cache.updateQuery({ query, variables: { id } }, (data) => {
          if (!data) { return null }
          data.count.value = result.setCount.value

          return data
        })
      },
    }
  },
  
  optimistic: {
    setCount (variables) {
      const value = variables.count
      const id = variables.id
      return {
        __typename: 'Count',
        id,
        value
      }
    }
  }
}

const client = createClient({
  url: "http://localhost:4000/graphql",
  exchanges: [
    dedupExchange,
    cacheExchange(cacheConfig),
    fetchExchange
  ]
});

export const App = () => (
  <Provider value={client}>
    <Main />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"))

introspect('http://localhost:4000/graphql')