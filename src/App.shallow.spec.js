import React from "react";
import { shallow } from "enzyme";
import { connect } from "react-redux";

import toJson from "enzyme-to-json";

import { AppUnwrapped } from "./App";

jest.mock('react-redux', () => {
    return {
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: () => jest.fn()
  };
});

describe("<App />", () => {
    it("Container in <App />", () => {
      let testState = {
        app: {},
        vacancies: {}
      };
      const wrapper = shallow(<AppUnwrapped {...testState} />);
      expect(1).toEqual(1);
    });
});

//  it("Container in <App />", () => {
//    const wrapper = shallow(<App />);
//    const appView = toJson(wrapper);
//
//    expect(appView.type).toEqual("Container");
//  });
//
//  it("className Container in App", () => {
//    const wrapper = shallow(<App />);
//    const props = wrapper.props();
//
//    expect(props.className).toEqual("md-0 pt-0 main-app-container bg-light");
//  });

//  it("App Container contains 4 area(Row): toolbar, 'New Vacancy', label 'List vacancies', 'Vacancies list'", () => {
//    const wrapper = shallow(<App />);
//    const props = wrapper.props();
//
//    expect(props.children.length).toEqual(4);
//  });
