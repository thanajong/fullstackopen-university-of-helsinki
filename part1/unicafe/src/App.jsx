import { useState } from 'react'

const Header = () => {
  return (
    <h1>Give Feedback</h1>
  )
}

const FeedbackButton = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.name}
    </button>
  )
}

const Statistics = ( {f} ) => {
  const sum = f.good + f.neutral + f.bad
  const average = sum / 3
  const positive = f.good / sum

  return (
    <>
      <h1>Statistics</h1>
      <p>Good: {f.good}</p>
      <p>Neutral: {f.neutral}</p>
      <p>Bad: {f.bad}</p>
      <p>All: {sum}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive}</p>
    </>
  )
}

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })
  console.log(feedback)

  const onGoodClick = () => {
    const newFeedback = {
      ...feedback,
      good: feedback.good + 1
    }
    setFeedback(newFeedback)
  }

  const onNeutralClick = () => {
    const newFeedback = {
      ...feedback,
      neutral: feedback.neutral + 1
    }
    setFeedback(newFeedback)
  }

  const onBadClick = () => {
    const newFeedback = {
      ...feedback,
      bad: feedback.bad + 1
    }
    setFeedback(newFeedback)
  }

  return (
    <>
      <Header />
      <FeedbackButton name='good' onClick={onGoodClick} />
      <FeedbackButton name='neutral' onClick={onNeutralClick} />
      <FeedbackButton name='bad' onClick={onBadClick} />
      <Statistics f={feedback}/>
    </>
  )
}

export default App
