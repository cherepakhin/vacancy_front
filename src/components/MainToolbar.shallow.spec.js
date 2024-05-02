import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import MainToolbar from "./MainToolbar";

jest.mock('react-redux', () => ({
   useDispatch: jest.fn(),
   useSelector: jest.fn(),
}));

describe("<MainToolbar />", () => {

  it("Size column MainToolbar is 12 columns", () => {
    const wrapper = shallow(<MainToolbar />);
    // children[3] - Container - 1, Toolbar Row - 2, Toolbar Row Col - 3
    console.log(wrapper.props());
    const columnToolBarProps = wrapper.props();
    // toolbar column <Col xs={12}>
    expect(columnToolBarProps.children.props.xs).toEqual(12);
  });

  it("margin top, bottom MainToolbar", () => {
    const wrapper = shallow(<MainToolbar />);
    const mainToolbarProps = wrapper.props();
    // appProps.children[0] - Toolbar
    expect(mainToolbarProps.className).toEqual('fixed-top mt-0 md-1 pd-1 pl-0 ml-0 bg-light table-bordered');
  });

});
