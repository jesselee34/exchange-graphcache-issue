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

let multiplier
function doMutation (count, mutate) {
  let value = count
  
  if (count <= 1) {
    multiplier = 1
  } else if (count >= 3) {
    multiplier = -1
  }

  value = value + (1 * multiplier)

  mutate({ id: 1, count: value })
}

export default function Main () {
  const [response] = useQuery({ query, variables: { id: 1 } })
  const { data, fetching } = response

  // eslint-disable-next-line
  const [_, mutate] = useMutation(mutation)

  if (fetching) { return 'Loading' }

  return (
    <>
      <p>The bad button counts up to 3 then back down to 1 and continues that pattern.</p>
      <button onClick={() => doMutation(data.count.value, mutate)}>
        Bad
      </button>
      <p>The good button just counts up.</p>
      <button onClick={() => mutate({ id: 1, count: data.count.value + 1 })}>
        Good
      </button>
    </>
  )
}
