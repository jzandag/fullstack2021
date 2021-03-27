import React from 'react'
import Statistic from './Statistic'

const Statistics = ({good,bad, neutral, all}) => {

    return (
        <div>
            Statistics
            <br/><br/>
            <table>
                <tbody>

                {all > 0 ? <>
                    <Statistic text="good" value={good}/>
                    <Statistic text="neutral" value={neutral}/>
                    <Statistic text="bad" value={bad}/>
                    <Statistic text="all" value={all}/>
                    <Statistic text="average" value={((good * 1) + (bad*-1)) / all}/>
                    <Statistic text="positive" value={(good / all) * 100}/>
                </> : 
                <tr><td>No feedback given</td></tr>
                }
            </tbody>
            </table>
            
        </div>
    )
}

export default Statistics