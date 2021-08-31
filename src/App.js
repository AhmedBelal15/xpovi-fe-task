import { useState } from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import { Alert } from "reactstrap";
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
  const [renderAlert, setRenderAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://mockendpoint.com/postroute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer accesstoken",
        },
        body: JSON.stringify({
          section1: {
            ...setSsection1Answers,
          },
          section2: {
            ...section2Answers,
          },
        }),
      });
      const data = await response.json();
      console.log(data);
      //do something with the data
    } catch (error) {
      console.log(error);
    }
    setSsection1Answers({
      question1: "",
      question2: "",
      question3: "",
    });
    setSsection2Answers({
      question1: "",
      question2: "",
    });

    //This should be in try block but we aren't submitting to a real endpoint so it'll never fire xD
    setRenderAlert(true);
  };

  return (
    <>
      <h1>XPovi Front End Task</h1>
      <form onSubmit={handleSubmit}>
        {shouldRender === "section1" ? (
          <Section1
            selectedAnswers={section1Answers}
            setSelectedAnswers={setSsection1Answers}
            setShouldRender={setShouldRender}
          />
        ) : null}

        {shouldRender === "section2" ? (
          <div>
            <Section2
              selectedAnswers={section2Answers}
              setSelectedAnswers={setSsection2Answers}
              setShouldRender={setShouldRender}
            />
          </div>
        ) : null}
        {renderAlert ? (
          <Alert color="success">
            Your answers are submitted successfully!
          </Alert>
        ) : null}
      </form>
    </>
  );
}

export default App;
