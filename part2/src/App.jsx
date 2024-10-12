const Curriculum = ({ curriculum }) => {
  return <h1>{curriculum}</h1>
}

const Name = ({ name }) => {
  return <h2>{name}</h2>
}

const Part = ({ name, exercises }) => {
  return <li><span>{name}</span>: <span>{exercises}</span></li>
}

const Content = ({ parts }) => {
  return <ul>{parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises} />)}</ul>
}

const Sum = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p><b>Total of {total} exercises</b></p>
}

const Course = ({ curriculum, courses }) => {
  return (
    <>
      <Curriculum curriculum={curriculum} />
      {courses.map((course) => {
        return (
          <div key={course.id} className="course">
            <Name name={course.name} />
            <Content parts={course.parts} />
            <Sum parts={course.parts} />
          </div>
        )
      })}
    </>
  )
}

const App = () => {
  const curriculum = "Web development curriculum"
  const courses = [
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

  return <Course curriculum={curriculum} courses={courses} />
}

export default App