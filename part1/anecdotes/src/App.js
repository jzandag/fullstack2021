import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  const [points, setPoints] = useState(new Array(anecdotes.length).join('0').split('').map(parseFloat))

  const [selected, setSelected] = useState(0)

  const randomNumer = () =>  {
      let rnd = Math.floor(Math.random() * (anecdotes.length - 1))
      setSelected(rnd)
  }

  const vote = (num) => {
    const copyOfPoints = [...points]

    copyOfPoints[num] = copyOfPoints[num] + 1 

    setPoints(copyOfPoints)
  }

  return (
    <div>
      {anecdotes[selected]}<br/>
      has {points[selected]} votes<br/>
      <button onClick={() => {vote(selected)}}>vote</button>
      <button onClick={() => {randomNumer()}}>next anecdote</button>
    </div>
  )
}

export default App