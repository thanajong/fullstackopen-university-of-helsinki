import { useState } from 'react'

const AnecdoteDisplay = (props) => {
  return (
    <div>{props.anecdote}</div>
  )
}

const AnecdoteButton = (props) => {
  return (
    <button onClick={props.onClick}>next anecdote</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(Math.floor(Math.random() * 8))
  // Also random the initiated anecdote

  const onClick = () => {
    const random = Math.floor(Math.random() * 8)
    console.log(random)
    setSelected(random)
  }

  return (
    <div>
      <AnecdoteDisplay anecdote={anecdotes[selected]} />
      <AnecdoteButton onClick={onClick} />
    </div>
  )
}

export default App