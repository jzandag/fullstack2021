import React from 'react';

const Header = ({course}) => {
    return (
      <h1>{course}</h1>
    )
  }
  
  const Total = ({ course }) => {
    const total = course.reduce((x, curr) => {
      return curr.exercises + x
    }, 0)
  
    return(
      <p>Total of {total} exercises</p>
    ) 
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({ parts }) => {
    let part = parts.map(el => {
        return <Part key={el.id}
          part={el}/>
    })
    return (
      <div>
        {part}
      </div>
    )
  }
  
const Course = ({course}) => {
    let courses = course.map(el => {
      return <div key={el.id}>
          <Header course={el.name}/>
        <Content parts={el.parts}/>
        <Total course={el.parts}/>
        </div>
    })
    return (
      <div>
        {courses}
      </div>
    )
  }
export default Course;