const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

// The main.jsx already know the array 'parts' from the
// 'App' component which exported to main.jsx already 
//
// 'App' passed the 'parts' prop 
// with the value of array 'parts'
// to 'Content', and 'Content' is going 
// to take and use the value through destructuring  
// 
// The argument {parts} tells 'Content' to use value from props.parts
const Content = ( {parts} ) => {
  return (
    <div>
      <p>{parts[0].name} {parts[0].exercises}</p>
      <p>{parts[1].name} {parts[1].exercises}</p>
      <p>{parts[2].name} {parts[2].exercises}</p>
    </div>
  )
}

// The same concept in 'Content' works here too.
const Total = ( {parts} ) => {
  return (
    <p>Total: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts}/>
    </>
  )
}

export default App;