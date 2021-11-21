import "../App.css";
import { Questions } from "../help/question";
import { useState } from "react";
import { useContext } from "react";
import { QuizContext } from "../help/context";
import {Button} from 'react-bootstrap';

import React from "react";
debugger
function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, setGamestate } = useContext(
    QuizContext
  );

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);

    }
    alert(score)
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    setGamestate("last");
  };

  return (
    <div className="quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">

        <Button variant="outline-primary" onClick={() => { chooseOption("A") }}  >

          {Questions[currentQuestion].optionA}

        </Button>

        <Button variant="outline-primary" onClick={() => {chooseOption("B");  }}  >
          {Questions[currentQuestion].optionB}
        </Button>
        <Button  variant="outline-primary"  classname="Btn"      onClick={() => {            chooseOption("C");          }}        >
          {Questions[currentQuestion].optionC}
        </Button>
        <Button variant="outline-primary"        onClick={() => {            chooseOption("D");         }}        >
          {Questions[currentQuestion].optionD}
        </Button>
        
      </div>

      {currentQuestion === Questions.length - 1 ? (
        <Button variant="outline-primary" onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </Button >
      ) : (
        <Button classname="Btn" variant="outline-primary" onClick={nextQuestion} id="nextQuestion">
          Next Question
        </Button>
      )}
        
    </div>

  )
}
export default QuizPage;
