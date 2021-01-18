import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Questions from "../Components/Questions";
import { data, answer } from "./TestData";

describe("Testing Questions Component", () => {
  const historyMock = { push: jest.fn() };
  let component;
  beforeEach(() => {
    const dummyData = data;
    const mockSuccessResponse = dummyData;
    const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise); // 4
    component = shallow(
      <Questions
        history={historyMock}
      />
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("Questions content", () => {
    component.setState({ data: data });
    expect(component.find("header span").text()).toBe("Quiz");
    expect(component.find("QuestionCard").length).toBe(1);
  });
  test("on component did mount", (done) => {
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:8001/users/questions/view"
    );
    global.fetch.mockClear();
    done();
  });

  test("error msg", () => {
    component.setState({ data: data });
    const spy = jest.spyOn(component.instance(), "handleNext");
    spy();
    expect(component.state().errormsg).toEqual("Kindly select your answer");
  });

  test("Reset Button", () => {
    component.setState({
      index: "3",
      selected: "option2",
      userAnswer: [{
        _id: "5f5b0c40ccf6cf072812d947",
        answer: "option2",
      }],
      errormsg: "Kindly select your answer",
      score: 100,
    });
    const spy = jest.spyOn(component.instance(), "handleReset");
    component.find("header button").simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(component.state().index).toEqual(0);
    expect(component.state().selected).toEqual(undefined);
    expect(component.state().userAnswer).toEqual([]);
    expect(component.state().errormsg).toEqual("");
    expect(component.state().score).toEqual(undefined);
  });

  test("Next function", () => {
    component.setState({ data: data, selected: "option2" });
    const spy = jest.spyOn(component.instance(), "handleNext");
    expect(component.state().index).toEqual(0);
    spy("5f5b0c40ccf6cf072812d947");
    expect(component.state().errormsg).toEqual("");
    expect(component.state().userAnswer).toEqual([
      {
        _id: "5f5b0c40ccf6cf072812d947",
        answer: "option2",
      },
    ]);
    expect(component.state().index).toEqual(1);
    expect(component.state().selected).toEqual(undefined);
  });

  test("Submit function", (done) => {
    component.setState({
      data: data,
      id: 4,
      selected: "option2",
      userAnswer: answer,
    });
    const spy = jest.spyOn(component.instance(), "handleSubmit");
    spy("5f5f673a8ea08b1497e89106");
    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:8001/users/questions/getScore",
      {
        body:
          '[{"_id":"5f5f673a8ea08b1497e89102","answer":"option2"},{"_id":"5f5f673a8ea08b1497e89103","answer":"option1"},{"_id":"5f5f673a8ea08b1497e89104","answer":"option1"},{"_id":"5f5f673a8ea08b1497e89105","answer":"option3"},{"_id":"5f5f673a8ea08b1497e89106","answer":"option2"}]',
        headers: { "Content-Type": "application/json" },
        method: "post",
      }
    );
    global.fetch.mockClear();
    done();
  });
  test("Score Card", () => {
    component.setState({
      data: data,
      id: 4,
      selected: "option2",
      userAnswer: answer,
      score: 80,
    });
    expect(component.find("QuestionCard").length).toBe(0);
    expect(component.find(".scoreCard h2").text()).toBe("You Have Scored 80%");
  });
});
