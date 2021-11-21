import './App.css';
import {useState} from 'react';
import HomePage from './page/home';
import QuizPage from './page/quiz';
import LastPage from './page/last';
import {QuizContext} from './help/context';
function App() {
  const [gameState,setGamestate]=useState("home")
  const[score,setScore]=useState(0)
  return (
    <div className="App">
      <h1>
        Quiz App
      </h1>
        <QuizContext.Provider value={{gameState,setGamestate,score,setScore}}>
        {gameState === "home" && <HomePage/>}
        {gameState === "play" && <QuizPage/>}
        {gameState === "last" && <LastPage/>}
        </QuizContext.Provider>
      
    </div>
  );
}

export default App;
