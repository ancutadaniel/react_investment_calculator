import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleUserInput = (inputIdentifier, newValue) => {
    setUserInput({ ...userInput, [inputIdentifier]:  +newValue });
  };

  

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleUserInput} />
      {!inputIsValid && <p className="center">Duration must be at least 1 year.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
