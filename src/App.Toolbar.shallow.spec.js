import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import App from "./App";

jest.mock('react-redux', () => ({
   useDispatch: jest.fn(),
   useSelector: jest.fn(),
}));

describe("<App Toolbar />", () => {

  it("Size column ToolBar of App is 12 columns", () => {
    const wrapper = shallow(<App />);
    const props = wrapper.props();
    // children[3] - Container - 1, Toolbar Row - 2, Toolbar Row Col - 3
    const columnToolBarProps = wrapper.props().children[3].props;
    // toolbar column <Col xs={12}>
    expect(columnToolBarProps.children.props.xs).toEqual(12);
  });

  it("margin top, bottom ToolBar of App", () => {
    const wrapper = shallow(<App />);
    const appProps = wrapper.props();
    // appProps.children[0] - Toolbar
    expect(appProps.children[0].props.className).toEqual('fixed-top mt-0 md-1 pd-1 pl-0 ml-0 bg-light table-bordered');
  });

});
