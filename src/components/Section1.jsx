import { useEffect, useState } from "react";
import { section1Data } from "../data/data";
import DropdownComponent from "./Dropdown";

const Section1 = ({ selectedAnswers, setSelectedAnswers }) => {
  const [data, setData] = useState({
    question1: {
      question: "",
      choices: [""],
    },
    question2: {
      question: "",
      choices: [""],
    },
    question3: {
      question: "",
      choices: [""],
    },
  });

  const selectAnswer = (e, choice) => {
    setSelectedAnswers((prevState) => {
      return { ...prevState, [e.target.name]: choice };
    });
  };
  //Simulate fetch call
  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(), 1000));
    setData(section1Data);

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(()=>{
    if(selectedAnswers.question1 === "B2B" && selectedAnswers.question3 !== ''){
      setSelectedAnswers(prevState=>{
        return{...prevState, question3: ''}
      })
    }
    if(selectedAnswers.question1 === "B2C" && selectedAnswers.question2 !== ''){
      setSelectedAnswers(prevState=>{
        return{...prevState, question2: ''}
      })
    }
  }, [selectedAnswers, setSelectedAnswers])

  return (
    <div>
      <DropdownComponent
        header={data.question1.question}
        choices={data.question1.choices}
        question="question1"
        selectedAnswers={selectedAnswers.question1}
        selectAnswer={selectAnswer}
      />
      {selectedAnswers.question1 === "B2B" ||
      selectedAnswers.question1 === "Both" ? (
        <DropdownComponent
          header={data.question2.question}
          choices={data.question2.choices}
          question="question2"
          selectedAnswers={selectedAnswers.question2}
          selectAnswer={selectAnswer}
        />
      ) : null}
      {selectedAnswers.question1 === "B2C" ||
      selectedAnswers.question1 === "Both" ? (
        <DropdownComponent
          header={data.question3.question}
          choices={data.question3.choices}
          question="question3"
          selectedAnswers={selectedAnswers.question3}
          selectAnswer={selectAnswer}
        />
      ) : null}
    </div>
  );
};

export default Section1;
