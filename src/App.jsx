import Header from "./component/Header"
import Results from "./component/Results";
import UserInput from "./component/UserInput"
import { useState } from "react";

function App() {
  const [userInput,setUserInput]= useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration:10});
    const inputIsValid = userInput.duration>=1
    function handleChange(inputIdentifier,newValue){
      setUserInput(previousUserInput=>{
      return{
          ...previousUserInput,
          [inputIdentifier]: +newValue
      };
  });
}
  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange}/>
    
    {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App;
