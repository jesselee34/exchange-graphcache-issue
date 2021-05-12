import React from 'react'
import Button from './button'
import Display from './display'

export default function Main () {
  return (
    <main style={{ width: '500px', margin: '10px auto' }}>
      <h1>Urql GraphCache Issue:</h1>
      <p>There is a 5 second delay on the server resolver which simulates some latentcy. Click the bad button 5 times in quick succession and observe the score as the server responses return.</p>
      <p>To see the expected behaviour click the good button 5 times in quick succession.</p>
      <Button />
      <Display />
    </main>
  )
}
