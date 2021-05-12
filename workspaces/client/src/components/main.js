import React from 'react'
import Button from './button'
import Display from './display'

export default function Main () {
  return (
    <main style={{ width: '500px', margin: '10px auto' }}>
      <h1>Urql GraphCache Issue:</h1>
      <p>There is a 2 second delay on the server resolver which simulates some latentcy. Click the bad button 6 times in quick succession and observe the score.</p>
      <p>To see the expected behavior of URQL's optimistic updates click the good button 6 times in quick succession.</p>
      <p>The difference between the bad and the good button is only what they change the score to.</p>
      <Button />
      <Display />
      <p>The issue seems to be that the cache gets confused when the mutation input is the same as a previous pending mutation. I think the cache looses track of the order or something like that.</p>
      <p>If you click the bad button 5 times slowly (giving the server enough time to return between each click) the button behaves as expected.</p>
    </main>
  )
}
