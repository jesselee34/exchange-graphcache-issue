import React from 'react'
import { gql, useQuery, useMutation } from 'urql'

const query = gql`
  query ($id: Int!) {
    count (id: $id) {
      id
      value
    }
  }
`

const mutation = gql`
  mutation ($id: Int!, $count: Int!) {
    setCount (id: $id, count: $count) {
      id
      value
    }
  }
`

export default function Display () {
  const [response] = useQuery({ query, variables: { id: 1 } })
  const { data, fetching } = response

  // eslint-disable-next-line
  const [_, mutate] = useMutation(mutation)

  if (fetching) { return 'Loading' }

  return (
    <>
      <h2>Score: {data.count.value}</h2>
      <button onClick={() => mutate({ id: 1, count: 1 })}>reset</button>
    </>
  )
}
