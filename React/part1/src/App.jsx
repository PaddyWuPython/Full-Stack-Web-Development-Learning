
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

// Exercise 1.1

// const Header = ({ course }) => {
//   return <h1>{course}</h1>
// }

// const Part = ({ part, exercises }) => {
//   return (
//     <p>
//       {part} {exercises}
//     </p>
//   )
// }

// const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
//   return (
//     <div>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//     </div>
//   )
// }

// Exercise 1.2
// const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
//   return (
//     <div>
//       <Part part={part1} exercises={exercises1} />
//       <Part part={part2} exercises={exercises2} />
//       <Part part={part3} exercises={exercises3} />
//     </div>
//   )
// }

// const Total = ({ exercises1, exercises2, exercises3 }) => {
//   return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course={course} />
//       <Content 
//         part1={part1} exercises1={exercises1}
//         part2={part2} exercises2={exercises2}
//         part3={part3} exercises3={exercises3}
//       />
//       <Total 
//         exercises1={exercises1} 
//         exercises2={exercises2} 
//         exercises3={exercises3} 
//       />
//     </div>
//   )
// }

// Exercise 1.3
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <Header course={course} />
//       <Content 
//         part1={part1.name} exercises1={part1.exercises}
//         part2={part2.name} exercises2={part2.exercises}
//         part3={part3.name} exercises3={part3.exercises}
//       />
//       <Total 
//         exercises1={part1.exercises} 
//         exercises2={part2.exercises} 
//         exercises3={part3.exercises}
//       />

//     </div>
//   )
// }

// exercise 1.4
// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <Header course={course} />
//       <Content 
//         part1={parts[0].name} exercises1={parts[0].exercises}
//         part2={parts[1].name} exercises2={parts[1].exercises}
//         part3={parts[2].name} exercises3={parts[2].exercises}
//       />
//       <Total 
//         exercises1={parts[0].exercises} 
//         exercises2={parts[1].exercises} 
//         exercises3={parts[2].exercises}
//       />
//     </div>
//   )
// }


// const App = () => {
//   // const definitions
//   const course = 'Half Stack application development'

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       <Total parts={parts} />
//     </div>
//   )
// }

// Exercise 1.5
const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.name} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Total = (props) => {
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p>Number of exercises {total}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
