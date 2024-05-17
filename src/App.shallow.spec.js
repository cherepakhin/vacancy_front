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
    it("displayName is Container in <App />", () => {
      let testState = {
        app: {},
        vacancies: {}
      };

      const wrapper = shallow(<AppUnwrapped {...testState} />);
      const appView = toJson(wrapper);

      expect(appView.node.type.displayName).toBe('Container');
    });

    it("className <App />", () => {
      let testState = {
        app: {},
        vacancies: {}
      };

      const wrapper = shallow(<AppUnwrapped {...testState} />);
      const appView = toJson(wrapper);

      expect(appView.node.props.className).toBe('md-0 pt-0 main-app-container bg-light');
    });

    it("MainToolbar in <App />", () => {
      let testState = {
        app: {},
        vacancies: {}
      };

      const wrapper = shallow(<AppUnwrapped {...testState} />);
      const appView = toJson(wrapper);

      expect(appView.children[0].type).toBe('Connect(MainToolbar)');
    });

    it("NewVacancyPanel in <App />", () => {
      let testState = {
        app: {},
        vacancies: {}
      };

      const wrapper = shallow(<AppUnwrapped {...testState} />);
      const appView = toJson(wrapper);

      expect(appView.children[1].type).toBe('NewVacancyPanel');
    });

    it("place Vacancies in <App />", () => {
      let testState = {
        app: {},
        vacancies: {}
      };

      const wrapper = shallow(<AppUnwrapped {...testState} />);
      const appView = toJson(wrapper);
//      console.log(appView);
      expect(appView.children[2].type).toBe('Vacancies');
    });

    it("App Container contains 3 area(Row): MainToolbar, NewVacancyPanel, Vacancies", () => {
      let testState = {
        app: {},
        vacancies: {}
      };

      const wrapper = shallow(<AppUnwrapped {...testState} />);
      const props = wrapper.props();

      expect(props.children.length).toEqual(3);
    });

    it("appView.node.props.fluid in <App />", () => {
      let testState = {
        app: {},
        vacancies: {}
      };
      const wrapper = shallow(<AppUnwrapped {...testState} />);
      // console.log(wrapper); // -> {} // DON`T DELETE COMMENT
      const appView = toJson(wrapper);
//      console.log(appView);
//      console.log(appView.node);
//      console.log(appView.node.props);
//      console.log(appView.node.props.children[0]type: [Function: MainToolbar]);
//      console.log(appView.node.props.children[0].type);
//      console.log(appView.children[2]); // EMPTY!!! What is it???
//      expect(appView.node.props.children[0].type).toBe([Function: MainToolbar]);
      expect(appView.node.props.fluid).toBe(true);
//  <ref *1> App { props: { app: {}, vacancies: {} },
//      {
//        node: {
//          nodeType: 'function',
//          type: {
//            '$$typeof': Symbol(react.forward_ref),
//            render: [Function (anonymous)],
//            displayName: 'Container',
//            defaultProps: [Object]
//          },
//          props: {
//            fluid: true,
//            className: 'md-0 pt-0 main-app-container bg-light',
//            children: [Array]
//          },
//          key: undefined,
//          ref: null,
//          instance: null,
//          rendered: [ [Object], [Object], ' ', [Object], '  ' ]
//        },
//        type: 'Container',
//        props: { fluid: true, className: 'md-0 pt-0 main-app-container bg-light' },
//        children: [
//          {
//            node: [Object],
//            type: 'MainToolbar',
//            props: {},
//            children: null,
//            '$$typeof': Symbol(react.test.json)
//          },
//          {
//            node: [Object],
//            type: 'NewVacancyPanel',
//            props: {},
//            children: null,
//            '$$typeof': Symbol(react.test.json)
//          },
//          ' ', // EMPTY!!! What is it???
//          {
//            node: [Object],
//            type: 'Vacancies',
//            props: [Object],
//            children: null,
//            '$$typeof': Symbol(react.test.json)
//          },
//          '  '
//        ],
//        '$$typeof': Symbol(react.test.json)
//      }
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
