const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: 0
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
      answer: 1
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Venus", "Mercury"],
      answer: 0
    }
  ];
  
  const quizContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
  
    for (let i = 0; i < question.options.length; i++) {
      const li = document.createElement("li");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "option";
      radio.value = "option" + (i + 1);
      radio.id = "option" + (i + 1);
  
      const label = document.createElement("label");
      label.htmlFor = "option" + (i + 1);
      label.textContent = question.options[i];
  
      li.appendChild(radio);
      li.appendChild(label);
      optionsElement.appendChild(li);
    }
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
      const selectedAnswer = parseInt(selectedOption.value);
      if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    }
  }
  
  function showResult() {
    quizContainer.innerHTML = `
      <h1>Quiz Completed</h1>
      <p>Your score: ${score} out of ${questions.length}</p>
      <button onclick="location.reload()">Restart Quiz</button>
    `;
  }
  
  submitButton.addEventListener("click", checkAnswer);
  
  showQuestion();
  