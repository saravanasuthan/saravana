import React from "react";

function QuestionCard(props) {
  return (
    <>
      <div className="questionCard">
        <h4>
          Question {props.index + 1}/{props.data.length}
        </h4>
        <hr />
        <table>
          <tbody>
            <tr>
              <td colSpan="2">
                <h3>{props.data[props.index].question}</h3>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <input
                    type="radio"
                    checked={props.selected === "option1"}
                    name="selected"
                    value="option1"
                    onChange={props.handleChange}
                  />
                  {props.data[props.index].option1}
                </label>
              </td>
              <td>
                <label>
                  <input
                    type="radio"
                    name="selected"
                    value="option2"
                    checked={props.selected === "option2"}
                    onChange={props.handleChange}
                  />
                  {props.data[props.index].option2}
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <input
                    type="radio"
                    name="selected"
                    checked={props.selected === "option3"}
                    value="option3"
                    onChange={props.handleChange}
                  />
                  {props.data[props.index].option3}
                </label>
              </td>
              <td>
                <label>
                  <input
                    type="radio"
                    name="selected"
                    value="option4"
                    checked={props.selected === "option4"}
                    onChange={props.handleChange}
                  />
                  {props.data[props.index].option4}
                </label>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <span>{props.errormsg}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="buttonRow">
          <button
            onClick={
              props.data.length === props.index + 1
                ? () => props.handleSubmit(props.data[props.index]._id)
                : () => props.handleNext(props.data[props.index]._id)
            }
          >
            {props.data.length === props.index + 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
}

export default QuestionCard;
