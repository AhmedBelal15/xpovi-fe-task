import { useState } from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import "./App.css";

function App() {
  const [section1Answers, setSsection1Answers] = useState({
    question1: "",
    question2: "",
    question3: "",
  });
  const [section2Answers, setSsection2Answers] = useState({
    question1: "",
    question2: "",
  });
  const [shouldRender, setShouldRender] = useState("section1");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        alert("Your answers are submitted successfully");
      }}
    >
      {shouldRender === "section1" ? (
        <div>
          <Section1
            selectedAnswers={section1Answers}
            setSelectedAnswers={setSsection1Answers}
          />
          <button
            disabled={
              section1Answers.question1 === "" ||
              (section1Answers.question2 === "" &&
                section1Answers.question3 === "") ||
              (section1Answers.question1 === "Both" &&
                (section1Answers.question2 === "" ||
                  section1Answers.question3 === ""))
            }
            onClick={() => {
              setShouldRender("section2");
            }}
            className="btn btn-primary"
          >
            Next
          </button>
        </div>
      ) : null}

      {shouldRender === "section2" ? (
        <div>
          <Section2
            selectedAnswers={section2Answers}
            setSelectedAnswers={setSsection2Answers}
          />
          <div>
            <button
              onClick={() => {
                setShouldRender("section1");
              }}
              className="btn btn-secondary"
            >
              Back
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      ) : null}
    </form>
  );
}

export default App;
