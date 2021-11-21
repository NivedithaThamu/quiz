// import React from "react";
import React from "react";
import "../App.css";
import { useContext } from "react";

import { Questions } from "../help/question"
import { QuizContext } from "../help/context";
function LastPage(){
    const { score, setScore, setGamestate, userName } = useContext(
        QuizContext
              );
    
      const restartQuiz = () => {
        setScore(0);
        setGamestate("play");
      };
      return (
        <div className="last">
          <h1>Quiz Finished</h1>
          <h3>{userName}</h3>
          <h1>
            {score} / {Questions.length}
          </h1>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      );
    };
export default LastPage;