import React, { useState } from 'react'
import Button from './Button'
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
      
      <Button handleOperation={() => setGood(good +1)}>good</Button>
      <Button handleOperation={() => setNeutral(neutral +1)}>neutral</Button>
      <Button handleOperation={() => setBad(bad +1)}>bad</Button>
      <br/><br/>
      <Statistics good={good} bad={bad} neutral={neutral} all={all}/>
      

    </div>
  )
}

export default App