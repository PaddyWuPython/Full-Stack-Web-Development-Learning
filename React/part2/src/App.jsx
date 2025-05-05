import { useState } from 'react'

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       // 1.7
//       <h1>give feedback</h1>
//       <button onClick={() => setGood(good + 1)}>good</button>
//       <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
//       <button onClick={() => setBad(bad + 1)}>bad</button>

//       <h1>statistics</h1>
//       <p>good {good}</p>
//       <p>neutral {neutral}</p>
//       <p>bad {bad}</p>
//       <p>all {good + neutral + bad}</p>
//       <p>average {(good - bad) / (good + neutral + bad)}</p>
//       <p>positive {(good / (good + neutral + bad)) * 100} %</p>
//     </div>
//   )
// }

// 1.8
// a proper place to define a component
// const Statistics = (props) => {
//   if (props.all === 0) {
//     return <p>No feedback given</p>
//   }

//   return (
//     <div>
//       <p>good {props.good}</p>
//       <p>neutral {props.neutral}</p>
//       <p>bad {props.bad}</p>
//       <p>all {props.all}</p>
//       <p>average {(props.good - props.bad) / props.all}</p>
//       <p>positive {(props.good / props.all) * 100} %</p>
//     </div>
//   )
// }

// 1.9
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  /// ...
  if (props.all === 0) {
    return <p>No feedback given</p>
  }

  return(
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.all} />
          <StatisticLine text="average" value={(props.good - props.bad) / props.all} />
          <StatisticLine text="positive" value={`${(props.good / props.all) * 100} %`} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // do not define a component within another component
  // const Statistics = (props) => {
  //   // ...
  // }

  return (
    // <div>
    //   <h1>give feedback</h1>
    //   <button onClick={() => setGood(good + 1)}>good</button>
    //   <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
    //   <button onClick={() => setBad(bad + 1)}>bad</button>

    //   <h1>statistics</h1>
    //   <Statistics good={good} neutral={neutral} bad={bad} all={good + neutral + bad} />
    // </div>
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} all={good + neutral + bad} />
    </div>
  )
}

export default App