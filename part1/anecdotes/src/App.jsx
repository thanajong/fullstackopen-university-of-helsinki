import { useState } from 'react'

const AnecdoteDisplay = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
      <h3><i>{props.anecdote}</i></h3>
      <p>Anecdote has been up {props.vote} votes</p>
    </div>
  )
}

const AnecdoteNextButton = (props) => {
  return (
    <button onClick={props.onClick}>next anecdote</button>
  )
}

const AnecdoteVoteButton = (props) => {
  return (
    <button onClick={props.onClick}>vote</button>
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

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
  })
  const [top, setTop] = useState(null)

  const onClickNext = () => {
    const random = Math.floor(Math.random() * 8)
    console.log('random to: ', random)
    setSelected(random)
  }

  const onClickVote = () => {
    // Vote handler
    const copy = { ...points }
    copy[selected] += 1
    setPoints(copy)
    console.log(selected, 'up')
    console.log('points state before', Object.values(points))
    console.log('points state after', Object.values(copy))
    // Find top votes after every vote button clicks.
    // ***
    /// We're gonna keep using the copy object first
    // because the 'points' state isnt updated yet.
    // Even if we used setPoints(copy) already, but 
    // there are more lines in this function to be compiled.
    // The state re-rendering is scheduled to do after this function finishes.
    // That makes our copy object the most up-to-dated 'points' state now.
    /// ***
    if (top === null || copy[top] < copy[selected]) {
      console.log('top value before', copy[top])
      console.log('top value after', copy[selected])
      setTop(selected)
    }
  }

  console.log('now >>', selected)
  console.log('points', Object.values(points))
  console.log('top-index', top)
  console.log('top-value', points[top])
  console.log('----------------------------------------------------------------------------------------')
  return (
    <div>
      <AnecdoteDisplay text='Anecdote of the day' anecdote={anecdotes[selected]} vote={points[selected]} />
      <AnecdoteNextButton onClick={onClickNext} />
      <AnecdoteVoteButton onClick={onClickVote} />
      <AnecdoteDisplay text='Top anecdote' anecdote={anecdotes[top]} vote={points[top]} />
    </div>
  )
}

export default App