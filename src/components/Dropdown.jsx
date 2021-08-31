import { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const DropdownComponent = ({
  header,
  choices,
  selectAnswer,
  question,
  selectedAnswers
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="dropdown-css">
        <div className="dropdown-header-css">{header}</div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>{selectedAnswers === '' ? "Answer" : selectedAnswers}</DropdownToggle>
        <DropdownMenu container="body">
          {choices.map((choice) => {
            return (
              <DropdownItem
                className="dropdown-item section1-item"
                onClick={(e) => {
                  selectAnswer(e, choice);
                }}
                name={question}
                key={choice}
              >
                {choice}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownComponent;
