import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import App from "./App";

jest.mock('react-redux', () => ({
   useDispatch: jest.fn(),
   useSelector: jest.fn(),
}));

describe("<App Toolbar />", () => {

  it("ClassName ToolBar of App", () => {
    const wrapper = shallow(<App />);
    const props = wrapper.props();
//    console.log(wrapper.debug());
//    console.log(wrapper.props().children);
//    console.log(wrapper.props().children[1].props);

    const toolBarProps = wrapper.props().children[1].props;
    expect(toolBarProps.className).toEqual('mt-2 md-0 pt-5 pl-0 pd-0');
  });

  it("Size ToolBar of App", () => {
    const wrapper = shallow(<App />);
    const props = wrapper.props();

    expect(wrapper.props().children[3].props.children.props.xs).toEqual(12);
  });

  it("margin top, bottom ToolBar of App", () => {
    const wrapper = shallow(<App />);
    const appProps = wrapper.props();

    expect(appProps.children[0].props.className).toEqual('fixed-top mt-0 md-1 pd-1 pl-0 ml-0 bg-light table-bordered');
  });

});