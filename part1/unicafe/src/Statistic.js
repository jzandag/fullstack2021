import React from 'react'

const Statistic = props => {

    return (
        <div>
            
            {props.text} {props.value}{props.text === "positive" ? "%" : null}<br/>
            
            
        </div>
    )
}

export default Statistic