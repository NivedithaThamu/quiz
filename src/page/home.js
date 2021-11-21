 
import React from "react";
import { useContext } from "react";
import { QuizContext } from "../help/context";
import {Button} from 'react-bootstrap';
function HomePage(){
     
    const{setGamestate}=useContext(QuizContext)
    return(
        
        <div className="Home" >
            <Button  variant="secondary" onClick={()=>setGamestate("play")}> 
            Start Quiz</Button>
                Home page
        </div>
    )
}

export default HomePage; 