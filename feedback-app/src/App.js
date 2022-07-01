import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'
import FeedBackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedBackData)
  
  return (
    <>
        <Header />
        <div className='container'>
        <FeedbackItem/>
    </div>
    </>
  )
}

export default App