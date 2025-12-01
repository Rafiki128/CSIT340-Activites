import React, { useState } from "react";

function QuizTaker({ questions, onSubmitAnswers }) {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    onSubmitAnswers(answers);
  };

  const handleAnswer = (option) => {
    if (isSubmitted) return;
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = option;
    setAnswers(updatedAnswers);
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div>
      <h2>Quiz Taker</h2>
      <p>Question {currentIndex + 1} of {questions.length}</p>
      <p>{currentQuestion.text}</p>

      {currentQuestion.option.map((opt, idx) => (
        <button key={idx} onClick={() => handleAnswer(opt)} disabled={isSubmitted} style={{ backgroundColor: answers[currentIndex] === opt ? "#d3d3d3" : ""}}>
          {opt}
        </button>
      ))}

      <div style={{ marginTop: "1em" }}>
        <button onClick={() => setCurrentIndex(currentIndex - 1)} disabled={currentIndex === 0}>
          Previous
        </button>

        <button onClick={() => setCurrentIndex(currentIndex + 1)} disabled={currentIndex === questions.length - 1}>
          Next
        </button>
      </div>

      {!isSubmitted && currentIndex === questions.length - 1 && (
        <button onClick={handleSubmit} style={{ marginTop: "1em" }}>
          Submit Answers
        </button>
      )}

      {isSubmitted && (
        <div style={{ marginTop: "2em" }}>
          <h3>Score Summary</h3>
          <p>
            You got {
              answers.filter((ans, i) => ans === questions[i].correct).length
            } out of {questions.length} correct.
          </p>
          <ul>
            {questions.map((q, i) => {
              const isCorrect = answers[i] === q.correct;
              return (
                <li key={i} style={{ color: isCorrect ? "green" : "red" }}>
                  Q{i + 1}: {q.text} <br />
                  Your answer: {answers[i] || "None"} <br />
                  Correct answer: {q.correct}
                </li>
              );
            })}
          </ul>
        </div>
      )}
  </div>
  );
}

export default QuizTaker;
