import './App.css';

function App() {
  const age = 23
  const names =["Saba" ,"Fatemeh" , "Soha" , "Sanam"]
  const users = [
    {name : "Ali" , age : 55 },
    {name : "Reza" , age : 99 },
    {name : "Khosii" , age : 12 }
  ]

  const classes = [
   {name : "Html" , finished : true},
   {name : "JavaScript" , finished : false},
   {name : "Css" , finished : true},
   {name : "Bootstrap" , finished : false},
   {name : "React" , finished : true},
   {name : "Python" , finished : false},
  ]

  return (
    <div className="App">
     {age > 20 ? <h1>Over</h1> : <h1> Under</h1>}
     {age === 23 && <h2>age is 23</h2>}  

     <button type= "submit" className={age > 20 ? "success" : "warnning"} >Click me</button>

     <br></br>
     <br></br>

     <button type="submit" style={{fontSize : age > 20 ? "20px" :"30px"}} >Click me</button>

     <hr></hr>
    
    {names.map((name, index) =>{
      return <h1 key={index}> {name} </h1>
    })}

    <hr></hr>

    {users.map((user, index) =>{
      return <h2 key={index}>{user.name} : {user.age} </h2>
    })}
   
   <hr></hr>

   {classes.map((c, index) =>{
    return c.finished && <h2 key ={index}>{c.name}</h2>
   })}

    </div>
  );
}

export default App;
