import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = good + neutral + bad;
  return (
    <div>
      give feedback
      <br/><br/>
      <button onClick={() => setGood(good +1)}>good</button>
      <button onClick={() => setNeutral(neutral +1)}>neutral</button>
      <button onClick={() => setBad(bad +1)}>bad</button>
      <br/><br/>
      statistics
      <br/><br/>
      good {good} <br/>
      neutral {neutral}<br/>
      bad {bad}<br/>
      all {all}<br/>
      average {((good * 1) + (bad*-1)) / all}<br/>
      positive {(good / all) * 100}%<br/>

    </div>
  )
}

export default App