import React from 'react'

const Statistics = ({good,bad, neutral, all}) => {

    return (
        <div>
            Statistics
            <br/><br/>
            {all > 0 ? <>good {good} <br/>
            neutral {neutral}<br/>
            bad {bad}<br/>
            all {all}<br/>
            average {((good * 1) + (bad*-1)) / all}<br/>
            positive {(good / all) * 100}%<br/>
            </> : 
            <>No feedback given</>
            }
            
        </div>
    )
}

export default Statistics