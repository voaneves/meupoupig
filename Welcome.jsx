import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

//import de imagem quiz
import Quiz from '../img/quiz.svg'

//import de css
import './Welcome.css'

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: 'CHANGE_STAGE' })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}

export default Welcome
