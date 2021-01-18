import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import QuestionCard from "../Components/QuestionCard";
import { data } from "./TestData";

describe("Testing QuestionCard Component", () => {
  test("QuestionCard Content", () => {
    const mockfn1 = jest.fn();
    const component = shallow(
      <QuestionCard
        data={data}
        index={1}
        errormsg={""}
        selected={"option2"}
        handleSubmit={mockfn1}
        handleNext={mockfn1}
        handleChange={mockfn1}
        handleShowModal={mockfn1}
      />
    );
    expect(component.find(".questionCard h4").text()).toBe("Question 2/5");
    expect(component.find("hr").length).toBe(1);
    const table = component.find("table tbody");
    expect(table.find("tr").at(0).find("td h3").text()).toBe(
      "React.js cannot be integrated with ____"
    );
    const option = table
      .find("tr")
      .at(1)
      .find("td")
      .at(0)
      .find("label input")
      .props();
    expect(option.type).toBe("radio");
    expect(option.checked).toBe(false);
    expect(option.value).toBe("option1");
    expect(
      table.find("tr").at(1).find("td").at(1).find("label input").props()
        .checked
    ).toBe(true);
    expect(component.find(".buttonRow button").text()).toBe("Next");
  });

  test("QuestionCard Content 1", () => {
    const mockfn1 = jest.fn();
    const component = shallow(
      <QuestionCard
        data={data}
        index={0}
        errormsg={""}
        selected={"option3"}
        handleSubmit={mockfn1}
        handleNext={mockfn1}
        handleChange={mockfn1}
        handleShowModal={mockfn1}
      />
    );
    expect(component.find(".questionCard h4").text()).toBe("Question 1/5");
    const table = component.find("table tbody");
    expect(table.find("tr").at(0).find("td h3").text()).toBe(
      "React is used in _____"
    );
    const option = table
      .find("tr")
      .at(1)
      .find("td")
      .at(0)
      .find("label input")
      .props();
    expect(option.type).toBe("radio");
    expect(option.checked).toBe(false);
    expect(
      table.find("tr").at(2).find("td").at(0).find("label input").props()
        .checked
    ).toBe(true);
    expect(component.find(".buttonRow button").text()).toBe("Next");
    component.find(".buttonRow button").simulate("click");
    expect(mockfn1).toHaveBeenCalledTimes(1);
  });

  test("QuestionCard Content 2", () => {
    const mockfn2 = jest.fn();
    const mockfn3 = jest.fn();
    const component = shallow(
      <QuestionCard
        data={data}
        index={4}
        errormsg={""}
        selected={"option3"}
        handleSubmit={mockfn2}
        handleNext={mockfn3}
        handleChange={mockfn3}
        handleShowModal={mockfn3}
      />
    );
    expect(component.find(".questionCard h4").text()).toBe("Question 5/5");
    expect(component.find(".buttonRow button").text()).toBe("Submit");
    component.find(".buttonRow button").simulate("click");
    expect(mockfn2).toHaveBeenCalledTimes(1);
  });
});
