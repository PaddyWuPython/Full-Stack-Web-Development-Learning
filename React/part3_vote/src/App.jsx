import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 })

  // 处理投票逻辑
  const handleVote = () => {
    const newVotes = { ...votes }
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  // 处理下一条名言
  const nextAnecdote = () => {
    const nextIndex = (selected + 1) % anecdotes.length
    setSelected(nextIndex)
  }

  // 生成随机名言
  const randomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  // 找出得票最多的名言索引
  const maxVoteIndex = Object.keys(votes).reduce((a, b) => 
    votes[a] > votes[b] ? a : b, 0)
  
  // 最大票数
  const maxVotes = votes[maxVoteIndex]

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      {anecdotes[selected]}
      <br/>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
      <button onClick={randomAnecdote}>random anecdote</button>
      
      <h1>Anecdotes with the most votes</h1>
      {anecdotes[maxVoteIndex]}
      <br/>
      <p>has {maxVotes} votes</p>
    </div>
  )
}

export default App