import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import App from "./App";

jest.mock('react-redux', () => ({
   useDispatch: jest.fn(),
   useSelector: jest.fn(),
}));

describe("<New Vacancy area/>", () => {

  it("ClassName New Vacancy area", () => {
    const wrapper = shallow(<App />);
    // for demo logging props:
    //    const props = wrapper.props();
    //    console.log(wrapper.debug());
    //    console.log(wrapper.props().children);
    //    console.log(wrapper.props().children[1].props);

    const toolBarProps = wrapper.props().children[1].props;
    expect(toolBarProps.className).toEqual('mt-2 md-0 pt-5 pl-0 pd-0');
  });
});
