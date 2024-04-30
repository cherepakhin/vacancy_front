import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import App from "./App";

jest.mock('react-redux', () => ({
   useDispatch: jest.fn(),
   useSelector: jest.fn(),
}));

describe("<App />", () => {

  it("Container in <App />", () => {
    const wrapper = shallow(<App />);
    const appView = toJson(wrapper);

    expect(appView.type).toEqual("Container");
    expect(appView.props["className"]).toEqual("md-0 pt-0 main-app-container bg-light");
  });

  it("Container + 4 row in App", () => {
    const wrapper = shallow(<App />);
    const props = wrapper.props();

    expect(props.children.length).toEqual(5);
  });

});
