import React from 'react'

const Button = (props) => {

  return (
    <>
      <button onClick={props.handleOperation}>
        {props.children}
      </button>
    </>
  )
}

export default Button