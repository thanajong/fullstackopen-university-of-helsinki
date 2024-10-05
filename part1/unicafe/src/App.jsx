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

const StatisticLine = (props) => {
  return (
    <p>{props.text}: {props.value}</p>
  )
}

const Statistics = ({ f }) => {
  const total = f.good + f.neutral + f.bad
  const sum = f.good + (f.neutral / 2) - f.bad
  const average = sum / 3
  const positive = f.good / sum

  if (total === 0) {
    return (
      <p>No feedback given.</p>
    )
  }
  else {
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticLine text='Good' value={f.good} />
        <StatisticLine text='Neutral' value={f.neutral} />
        <StatisticLine text='Bad' value={f.bad} />
        <StatisticLine text='All' value={total} />
        <StatisticLine text='Average' value={average} />
        <StatisticLine text='Positive' value={positive} />
        {/* <table>
          <tbody>
            <tr>
              <td><StatisticLine text='Good' value={f.good} /></td>
            </tr>
          </tbody>
        </table> */}
      </div>
    )
  }
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
      <Statistics f={feedback} />
    </>
  )
}

export default App
