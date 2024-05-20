import './App.css';
import { useState } from 'react'

function App() {

  const [age , setAge] = useState(0)
  //

  const [inputValue ,setInputValue] =useState("")
  const handelInputChang =(event) =>{
    setInputValue(event.target.value)
  }
  //

  const [showText ,setShowText] = useState(true)
  const toggleText =() =>{
   setShowText(!showText)
  }
  //

  const [textcolor , setTextColor] = useState("red")

  return (
    <div className="App">
     
    <h1>{age}</h1>
    <button onClick={() => setAge(age+1)}> Increase age</button>
    <button onClick={() => setAge(age-1)}> Decrease age</button>

    <hr></hr>
    <br></br>

    <input type='text' onChange={handelInputChang}></input>
    <h1>{inputValue}</h1>

    <hr></hr>
    <br></br>
    
    <button onClick={toggleText} >Hide/Show</button>
    {showText && <h1>SabaTms Codding</h1>}

    <hr></hr>
    <br></br>
    
    <button onClick={() => setTextColor (textcolor === "red" ? "green" : "red")}>Change Color</button>
    <h1 style={{color:textcolor}}>SabaTms Codding</h1>
    </div>
  );
}

export default App;
