import React, { useState } from "react";
import '../Components/QuizTaker.css';

const quizQuestions = [
    {
        text: "What does JSX stand for?",
        option: ["JavaScript XML", "JSON Syntax Extension", "Java Standard X"],
        correct: "JavaScript XML"
    },
    {
        text: "Which hook manages state in a function component?",
        option: ["useEffect", "useContext", "useState"],
        correct: "useState"
    },
    {
        text: "What happens when you try to read a property of an 'undefined' variable?",
        option: ["Returns null", "Returns 0", "Throws a TypeError"],
        correct: "Throws a TypeError"
    },
];


export function RosalinaSalaAbellaQuizTaker({ onSubmitAnswers }) { 
    
    const questions = quizQuestions;

    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        setIsSubmitted(true);
    
        if (onSubmitAnswers) {
            onSubmitAnswers(answers);
        } else {
            console.log("Answers submitted:", answers);
        }
    };

    const handleAnswer = (option) => {
        if (isSubmitted) return;
        const updatedAnswers = [...answers];
        updatedAnswers[currentIndex] = option;
        setAnswers(updatedAnswers);
    };

    const currentQuestion = questions[currentIndex];

    return (
        <div className="quiz-container">
            <h2 className="quiz-header">Quiz Taker</h2>
            <p className="quiz-progress">Question {currentIndex + 1} of {questions.length}</p>
            <p className="question-text">{currentQuestion.text}</p>

            <div className="options-container">
                {currentQuestion.option.map((opt, idx) => (
                    <button 
                        key={idx} 
                        onClick={() => handleAnswer(opt)} 
                        disabled={isSubmitted}
                        className={`option-btn ${answers[currentIndex] === opt ? 'selected' : ''}`}
                    >
                        {opt}
                    </button>
                ))}
            </div>

            <div className="navigation-container">
                <button 
                    className="nav-btn"
                    onClick={() => setCurrentIndex(currentIndex - 1)} 
                    disabled={currentIndex === 0}
                >
                    Previous
                </button>

                <button 
                    className="nav-btn"
                    onClick={() => setCurrentIndex(currentIndex + 1)} 
                    disabled={currentIndex === questions.length - 1}
                >
                    Next
                </button>
            </div>

            {!isSubmitted && currentIndex === questions.length - 1 && (
                <button className="submit-btn" onClick={handleSubmit}>
                    Submit Answers
                </button>
            )}

            {isSubmitted && (
                <div className="results-container">
                    <h3 className="results-title">Score Summary</h3>
                    <p className="score-text">
                        You got {
                            answers.filter((ans, i) => ans === questions[i].correct).length
                        } out of {questions.length} correct.
                    </p>
                    <ul className="results-list">
                        {questions.map((q, i) => {
                            const isCorrect = answers[i] === q.correct;
                            return (
                                <li 
                                    key={i} 
                                    className={`result-item ${isCorrect ? 'correct' : 'incorrect'}`}
                                >
                                    <strong>Q{i + 1}: {q.text}</strong>
                                    <span>Your answer: {answers[i] || "None"}</span>
                                    <span>Correct answer: {q.correct}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}