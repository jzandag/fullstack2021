import React, { useState } from 'react'
import Statistics from './Statistics'

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
      <Statistics good={good} bad={bad} neutral={neutral} all={all}/>
      

    </div>
  )
}

export default App