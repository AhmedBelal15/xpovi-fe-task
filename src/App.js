import { useState } from 'react';
import Section1 from './components/Section1';
import './App.css';

function App() {
  const [section1Answers, setSsection1Answers] = useState({
    question1: "",
    question2: "",
    question3: "",
  });
  return (
    <div className="App">

        <Section1 selectedAnswers={section1Answers} setSelectedAnswers={setSsection1Answers}  />
      
    </div>
  );
}

export default App;
