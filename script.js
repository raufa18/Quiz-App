document.addEventListener('DOMContentLoaded', () => {
        const quizQuestions = [
            {
                question: "What color is the sky on a sunny day?",
                options: ["Red", "Blue", "Green"],
                answer: "Blue"
            },
            {
                question: "How many legs does a cat have?",
                options: ["2", "4", "6"],
                answer: "4"
            },
            {
                question: "What sound does a cow make?",
                options: ["Woof", "Meow", "Moo"],
                answer: "Moo"
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Mars", "Jupiter", "Venus"],
                answer: "Mars"
            },
            {
                question: "What is 2 + 2?",
                options: ["3", "4", "5"],
                answer: "4"
            }
        ];

        let currentQuestionIndex = 0;
        let score = 0;

        const questionBox = document.getElementById('question-box');
        const optionsContainer = document.getElementById('options-container');
        const nextBtn = document.getElementById('next-btn');
        const resultContainer = document.getElementById('result-container');
        const scoreSpan = document.getElementById('score');

        function showQuestion() {
            if (currentQuestionIndex < quizQuestions.length) {
                const question = quizQuestions[currentQuestionIndex];
                questionBox.textContent = question.question;
                optionsContainer.innerHTML = '';
                nextBtn.classList.add('hidden');

                question.options.forEach(option => {
                    const button = document.createElement('button');
                    button.textContent = option;
                    button.classList.add('option-btn');
                    button.addEventListener('click', () => selectAnswer(option));
                    optionsContainer.appendChild(button);
                });
            } else {
                showResult();
            }
        }

        function selectAnswer(selectedOption) {
            const currentQuestion = quizQuestions[currentQuestionIndex];
            const isCorrect = selectedOption === currentQuestion.answer;

            if (isCorrect) {
                score++;
            }

            const optionButtons = optionsContainer.querySelectorAll('.option-btn');
            optionButtons.forEach(button => {
                button.disabled = true;
                if (button.textContent === currentQuestion.answer) {
                    button.classList.add('correct');
                } else if (button.textContent === selectedOption) {
                    button.classList.add('incorrect');
                }
            });

            nextBtn.classList.remove('hidden');
        }

        nextBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            showQuestion();
        });

        function showResult() {
            document.getElementById('quiz-container').classList.add('hidden');
            resultContainer.classList.remove('hidden');
            scoreSpan.textContent = `${score} / ${quizQuestions.length}`;
        }

        showQuestion();
    });