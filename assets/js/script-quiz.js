// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    question: 'O que é inteligência financeira?',
    answers: [
      {
        answer: 'Compreender e gerenciar o dinheiro eficientemente.',
        correct: true,
      },
      {
        answer: 'Guardar dinheiro fisíco em casa',
        correct: false,
      },
      {
        answer: 'Gastar todo o dinheiro rapidamente.',
        correct: false,
      },
      {
        answer: 'Comprar o que quiser',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a diferença entre um ativo e um passivo?',
    answers: [
      {
        answer: 'Ativo é o que você deve, passivo é o que você possui',
        correct: false,
      },
      {
        answer: 'Ativo é o que te gera renda, passivo é o que te custa dinheiro',
        correct: true,
      },
      {
        answer: 'Ambos representam renda',
        correct: false,
      },
      {
        answer: 'Ambos representam dívidas',
        correct: false,
      },
    ],
  },
  {
    question: 'Por que é importante ter um plano de poupança?',
    answers: [
      {
        answer: 'Para ter dinheiro disponível para emergências',
        correct: true,
      },
      {
        answer: 'Para gastar dinheiro em compras impulsivas',
        correct: false,
      },
      {
        answer: 'Para aumentar as dívidas',
        correct: false,
      },
      {
        answer: 'Para evitar pagar impostos',
        correct: false,
      },
    ],
  },
  {
    question: 'O que é inflação?',
    answers: [
      {
        answer: 'Aumento no poder de compra',
        correct: false,
      },
      {
        answer: 'Um tipo de investimento',
        correct: false,
      },
      {
        answer: 'Diminuição no poder de compra',
        correct: true,
      },
      {
        answer: 'Uma forma de economizar dinheiro',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a definição de orçamento?',
    answers: [
      {
        answer: 'Gastar dinheiro sem controle',
        correct: false,
      },
      {
        answer: 'Um tipo de investimento',
        correct: false,
      },
      {
        answer: 'Um planejamento do quanto se pode gastar',
        correct: true,
      },
      {
        answer: 'Uma forma de economizar dinheiro',
        correct: false,
      },
    ],
  },
  {
    question: 'O que significa "juros compostos"?',
    answers: [
      {
        answer: 'Juros que você paga por empréstimos',
        correct: false,
      },
      {
        answer: 'Juros que você recebe em uma conta poupança',
        correct: false,
      },
      {
        answer: 'Uma taxa fixa de juros',
        correct: false,
      },
      {
        answer: 'Juros sobre juros',
        correct: true,
      },
    ],
  },
  {
    question: 'O que é o "score" de crédito?',
    answers: [
      {
        answer: 'Uma avaliação de quão bem você gerencia seu dinheiro e crédito',
        correct: true,
      },
      {
        answer: 'A quantidade de dinheiro que você tem em uma conta bancária',
        correct: false,
      },
      {
        answer: 'O número de cartões de crédito que você possui',
        correct: false,
      },
      {
        answer: 'O valor total do seu empréstimo',
        correct: false,
      },
    ],
  },
];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 1200);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();
