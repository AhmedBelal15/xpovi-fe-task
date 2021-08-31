import { useEffect, useState } from "react";
import { section2Data } from "../data/data";
import DropdownComponent from "./Dropdown";
import { FormGroup, Label, Input } from "reactstrap";

const Section2 = ({ selectedAnswers, setSelectedAnswers, setShouldRender }) => {
  const [data, setData] = useState({
    question1: {
      question: "",
      choices: [""],
    },
    question2: {
      question: "",
    },
  });

  console.log(selectedAnswers);
  const selectAnswer = (e, choice) => {
    setSelectedAnswers((prevState) => {
      return { ...prevState, [e.target.name]: choice };
    });
  };
  //Simulate fetch call
  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(), 1000));
    setData(section2Data);

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      selectedAnswers.question1 === "No" &&
      selectedAnswers.question2 !== ""
    ) {
      setSelectedAnswers((prevState) => {
        return { ...prevState, question2: "" };
      });
    }
  }, [selectedAnswers, setSelectedAnswers]);

  return (
    <div className="section-css">
      <div>
        <DropdownComponent
          header={data.question1.question}
          choices={data.question1.choices}
          question="question1"
          selectedAnswers={selectedAnswers.question1}
          selectAnswer={selectAnswer}
        />
      </div>

      <div>
        <FormGroup>
          <Label htmlFor="investment">{data.question2.question}</Label>
          <Input
            required={selectedAnswers.question1 === "Yes"}
            value={selectedAnswers.question2}
            disabled={
              selectedAnswers.question1 === "No" ||
              selectedAnswers.question1 === ""
            }
            onChange={(e) => {
              const regex = /^\d+$/;
              if (regex.test(e.target.value) || e.target.value === "") {
                setSelectedAnswers((prevState) => {
                  return { ...prevState, question2: e.target.value };
                });
              }
            }}
            id="investment"
            placeholder="Enter a number"
          />
        </FormGroup>
        <div className="buttons-container">
            <button
              onClick={() => {
                setShouldRender("section1");
              }}
              className="btn btn-secondary"
            >
              Back
            </button>
            <button disabled={selectedAnswers.question1 === ''} type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
      </div>
    </div>
  );
};

export default Section2;
