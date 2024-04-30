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
  });

  it("className Container in App", () => {
    const wrapper = shallow(<App />);
    const props = wrapper.props();
    expect(props.className).toEqual("md-0 pt-0 main-app-container bg-light");
  });

  it("Container + 4 row in App", () => {
    const wrapper = shallow(<App />);
    const props = wrapper.props();

    expect(props.children.length).toEqual(5);
  });

  it("ClassName App->ToolBar", () => {
    const wrapper = shallow(<App />);
    const props = wrapper.props();
//    console.log(wrapper.debug());
    console.log(wrapper.props().children);
    console.log(wrapper.props().children[1].props);
    // Row in ToolBar className
    expect(wrapper.props().children[1].props.className).toEqual('fixed-top mt-0 md-1 pd-1 pl-0 ml-0 bg-light table-bordered');
    // Margin Top and Margin Bottom in Row toolbar
  });

  it("Size of App->ToolBar", () => {
    const wrapper = shallow(<App />);
    const props = wrapper.props();
    expect(wrapper.props().children[1].props.children.props.xs).toEqual(12);
  });

  it("margin top, bottom of App->ToolBar", () => {
    const wrapper = shallow(<App />);
    const props = wrapper.props();
    // Margin Top and Margin Bottom in Row toolbar
    expect(wrapper.props().children[1].props.children.props.className).toEqual('mt-2 mb-2');
  });
});
