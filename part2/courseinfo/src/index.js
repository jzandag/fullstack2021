import React from 'react';
import ReactDOM from 'react-dom';

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

const App = () => {
  const course = [
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
  

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))