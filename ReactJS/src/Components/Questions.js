import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import "../App.css"

class Questions extends Component {
  state = {
    data: [],
    index: 0,
    selected: undefined,
    userAnswer: [],
    errormsg: "",
    score: undefined,
  };

  componentDidMount = () => {
    this.handleGetData();
  };

  handleGetData = () => {
    fetch(
      `http://localhost:8001/users/questions/view`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      });
  };

  handleChange = (e) => {
    this.setState({
      selected: e.target.value,
      errormsg: "",
    });
  };

  handleNext = (quesid) => {
    const { selected } = this.state;
    if (selected) {
      let answer = this.state.userAnswer;
      answer.push({ _id: quesid, answer: this.state.selected });
      const { index } = this.state;
      this.setState({
        index: index + 1,
        selected: undefined,
        userAnswer: answer,
        errormsg: "",
      });
    } else {
      this.setState({
        errormsg: "Kindly select your answer",
      });
    }
  };

  handleSubmit = (quesid) => {
    let answer = this.state.userAnswer;
    answer.push({ _id: quesid, answer: this.state.selected });
    fetch("http://localhost:8001/users/questions/getScore", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answer),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ score: data.percentage });
      });
  };

  handleReset = () => {
    this.setState({
      index: 0,
      selected: undefined,
      userAnswer: [],
      errormsg: "",
      score: undefined,
    })
  }

  render() {
    const { data, index, selected, errormsg } = this.state;
    return (
      <div>
        <header>
          <span>Quiz</span>
          <button onClick={() => this.handleReset()}>Reset</button>
        </header>
        {this.state.data.length !== 0 && this.state.score === undefined ? (
          <QuestionCard
            data={data}
            index={index}
            errormsg={errormsg}
            selected={selected}
            handleSubmit={this.handleSubmit}
            handleNext={this.handleNext}
            handleChange={this.handleChange}
            handleShowModal={this.handleShowModal}
          />
        ) : (
            this.state.score !== undefined && (
              <div className="scoreCard">
                <h2>You Have Scored {this.state.score}%</h2>
              </div>
            )
          )}
      </div>
    );
  }
}

export default Questions;
