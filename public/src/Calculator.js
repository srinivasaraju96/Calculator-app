import { useState } from "react";
function Calculator(){
    const[result,setResult]=useState("")
    function handleClick(event){
        if(event.target.tagName==="BUTTON"){
            if(event.target.textContent==='AC'){
                setResult("")
            }
            else if(event.target.textContent==='C'){
                setResult(result.substring(0,result.length-1))
            }
            else if(event.target.textContent==='='){
                try{
                    setResult(eval(result) || "");
                  } 
                catch{
                    setResult("Error");
                  }
                  
                
            }
            else{
                setResult((result+event.target.textContent))
            }
        }    
    }
    return(
        <div className="calculator-class" onClick={handleClick}>
            <div className="result-class">
                <p className="result">{result}</p>
            </div>
            <div className="row">
                <button type="button" className="Ac">AC</button>
                <button type="button">C</button>
                <button type="button">/</button>
            
                <button type="button">7</button>
                <button type="button">8</button>
                <button type="button">9</button>
                <button type="button">*</button>
            
                <button type="button">4</button>
                <button type="button">5</button>
                <button type="button">6</button>
                <button type="button">-</button>
            
                <button type="button">1</button>
                <button type="button">2</button>
                <button type="button">3</button>
                <button type="button">+</button>
            
                <button type="button">0</button>
                <button type="button">.</button>
                <button type="button" className="equal">=</button>
            </div>
        </div>
    )
}
export default Calculator;