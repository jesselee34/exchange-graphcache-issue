import { getIntrospectionQuery } from 'graphql'
import { getIntrospectedSchema, minifyIntrospectionQuery } from '@urql/introspection'

export default async function introspect (url) {
  const stream = await window.fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      variables: {},
      query: getIntrospectionQuery({ descriptions: false })
    })
  })

  const { data } = await stream.json()

  return minifyIntrospectionQuery(getIntrospectedSchema(data))
}
