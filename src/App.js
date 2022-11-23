import React, { useState } from 'react'
import questions from './data';

export default function App() {
	const [currentIndex, setCurrentIndex] = useState(0)
	function handleAnswerClick(isCorrect) {
        if(isCorrect){
            setScore(score+1);
        }        

		if (currentIndex === questions.length - 1) {
			// quiz over
			setQuizFinished(true)
		} else {
			setCurrentIndex((value) => value + 1)
		}

	}

const [quizFinished, setQuizFinished] = useState(false)	
    const [score,setScore] = useState(0)

	return (
		<div className="app">
			{quizFinished ? (
				<div className="score-section">
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className="question-section">
						<div className="question-count">
							<span>Question 1</span>/{questions.length}
						</div>
						<div className="question-text">
							{questions[currentIndex].questionText}
						</div>
					</div>
					<div className="answer-section">
						{questions[currentIndex].answerOptions.map((answer) => {
							return (
								<button
									onClick={()=>handleAnswerClick(answer.isCorrect)}
									key={answer.answerText}
								>
									{answer.answerText}
								</button>
							)
						})}
					</div>
				</>
			)}
		</div>
	)
}
