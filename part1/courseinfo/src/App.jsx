const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.excercises}</p>
  )
}

const Content = () => {
  return (
    <div>
      <Part name={part1} excercises={exercises1} />
      <Part name={part2} excercises={exercises2} />
      <Part name={part3} excercises={exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.excercisesSum}</p>
  )
}

const App = () => {
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total excercisesSum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App