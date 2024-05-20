import './App.css';

function App() {
  return (
   <div>
   <User name="saba" age={25} email="sab@tms15" />
   <User name="ali" age={43} email="----" />
   <User name="zahra" age={222} email="none" />
   <hr></hr>
   <Job  salary={100000000} position="Senior Front-end" company="SnappGrowp" />
   <Job  salary={150000000} position="Front-end Dev" company="Digikala" />
   <Job  salary={20000000} position="Back-end" company="Divar" />
   </div>
  );
}

const User = (props)=>{
  return(
    <div>
    <h1>{props.name} ,{props.age} ,{props.email}</h1>
    </div>
  )
}

const Job = (props) =>{
  return(
    <div>
     <h2>{props.salary} ,{props.position} ,{props.company}</h2>
    </div>
  )
}

export default App;
