import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import App from "./App";

jest.mock('react-redux', () => ({
   useDispatch: jest.fn(),
   useSelector: jest.fn(),
}));

describe("List vacancies", () => {

  it("Row for title 'List vacancies'", () => {
    const wrapper = shallow(<App />);
    const props = wrapper.props();
    // children[3] - Container - index 1, Toolbar Row - index 2, Toolbar Row Col - index 3
    const className = wrapper.props().children[2].props.className;
    expect(className).toEqual("mt-0 pt-0");
  });

});
