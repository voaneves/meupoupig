//import de componentes
import Welcome from './components/Welcome'
import { useContext, useEffect } from 'react'
import Questions from './components/Questions'
import { QuizContext } from './context/quiz'
import GameOver from './components/GameOver'

//Css
import './App.css'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  // embaralhar as perguntas
  useEffect(() => {
    dispatch({ type: 'REORDER_QUESTIONS' })
  }, [])

  return (
    <div className="App">
      <h1>Poupig Quiz</h1>
      {quizState.gameStage === 'Start' && <Welcome></Welcome>}
      {quizState.gameStage === 'Playing' && <Questions></Questions>}
      {quizState.gameStage === 'End' && <GameOver></GameOver>}
    </div>
  )
}

export default App
