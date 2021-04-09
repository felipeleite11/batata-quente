import { useEffect, useState } from 'react'
import ProgressBar from "@ramonak/react-progress-bar"

import database from './database'

import 'animate.css/animate.min.css'

import { Container } from './styles'

const initialTime = 1
const animationTime = 300

function App() {
  const [time, setTime] = useState(initialTime)
  const [out, setOut] = useState(false)
  const [index, setIndex] = useState(0)
  const [subject, setSubject] = useState(database[0])
  const [overWords, setOverWords] = useState(false)

  useEffect(() => {
    if(time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else {
      setTimeout(() => {
        setOut(true)
      }, animationTime)
      setTime(0)
    }
  }, [time])

  useEffect(() => {
    if(database.length === index) {
      setOverWords(true)
    }

    setSubject(database[index])
    setTime(initialTime)
    setOut(false)
  }, [index])

  function next() {
    setIndex(index + 1)
  }

  return (
    <Container>
      {overWords ? (
        <h1 className="over animate__animated animate__flash animate__faster">ACABARAM AS PALAVRAS!</h1>
      ) : (
        <>
          <p>O TEMA É</p>
          <h1 className="subject">{subject}</h1>

          <h1 className="time">
            00:
            {time < 10 ? '0' + time : time}
          </h1>

          <ProgressBar 
            completed={time * 100 / initialTime}
            bgColor="#4caf50"
            baseBgColor={out ? 'red' : '#e0e0de'}
            height={8}
            isLabelVisible={false}
            className="progress"
            transitionDuration={`${animationTime}ms`}
          />

          {out && (
            <h1 className="timeout animate__animated animate__shakeX animate__faster">O TEMPO ACABOU!</h1>
          )}

          

          <button onClick={next} className="button">Próximo tema</button>
        </>
      )}
    </Container>
  )
}

export default App
