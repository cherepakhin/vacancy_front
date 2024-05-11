import React from "react";
import { shallow, mount } from "enzyme";
import { connect } from "react-redux";
import toJson from "enzyme-to-json";
import { create } from "react-test-renderer";
import { render, screen } from "@testing-library/react";

import { MainToolbar } from "./MainToolbar";

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
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

    expect(mainToolbarProps.className).toEqual('fixed-top mt-0 md-1 pd-1 pl-0 ml-0 bg-light table-bordered');
  });

  it("testMethod with shallow", () => {
//    const instance = component.getInstance();
//    console.log(instance); --> null
//      root: [Getter],
    const wrapper = shallow(<MainToolbar />);
//    const mainToolbar = () => render(<MainToolbar />);
    console.log("------------------------mainToolbar.root");
    console.log(wrapper.props().children.props);
    //        xs: 12,
    //        className: 'mt-2 mb-2',

    expect(wrapper.props().children.props.xs).toEqual(12);
    expect(wrapper.props().children.props.className).toEqual('mt-2 mb-2');
//    console.log(wrapper.instance()); // null
    console.log(wrapper); // ShallowWrapper {}
    // TypeError: Cannot read properties of null (reading 'testMethod')
    // expect(wrapper.instance().testMethod()).toEqual("testMethod");

//      toJSON: [Function: toJSON],
//      toTree: [Function: toTree],
//      update: [Function: update],
//      unmount: [Function: unmount],
//      getInstance: [Function: getInstance],
//      unstable_flushSync: [Function: unstable_flushSync]

//    expect(mainToolbar.className).toEqual('fixed-top mt-0 md-1 pd-1 pl-0 ml-0 bg-light table-bordered');
  });

  it("testMethod with mount", () => {
//    const component = shallow(<MainToolbar />);
    // console.log(component.testMethod()); // TypeError: component.testMethod is not a function
    console.log("------------------------mount mainToolbar.root");
    console.log(mount(<MainToolbar />).props()); // {}
    console.log(mount(<MainToolbar aaa="bbb" />).props()); // { aaa: 'bbb' }
    expect(mount(<MainToolbar aaa="bbb" />).props().aaa).toEqual("bbb");
    expect(mount(<MainToolbar visibleNewVacancyDlg="true" />).props().visibleNewVacancyDlg).toEqual("true");
//    console.log(mount(<MainToolbar visibleNewVacancyDlg="true" />).props()); // { visibleNewVacancyDlg: 'true' }
//    console.log(mount(<MainToolbar />).props); // [Function: props]
//    const wrapper = shallow(<MainToolbar visibleNewVacancyDlg="true"/>);
//    const instance = wrapper.instance();

//    spyOn(instance, 'getTitle()').and.callThrough();
//    expect(instance.getTitle).toBe(true);
//  console.log(shallow(<MainToolbar />).instance().getTitle()); // TypeError: Cannot read properties of null (reading 'getTitle')
//  console.log(MainToolbar.getTitle()); // TypeError: _MainToolbar.MainToolbar.getTitle is not a function
//  console.log(MainToolbar.getTitle); // undefined

    // console.log(mount(<MainToolbar visibleNewVacancyDlg="true" />).testMethod()); //  TypeError: (0 , _enzyme.mount)(...).testMethod is not a function
//    const instance = component.instance();
//    console.log(instance.testMethod()); // TypeError: Cannot read properties of null (reading 'testMethod')
//    console.log(instance.testMethod); // TypeError: Cannot read properties of null (reading 'testMethod')
  });

  it("check style 'All' in MainToolbar", () => {
    const wrapper = shallow(<MainToolbar />);
    console.log(wrapper.props().children);
    console.log(wrapper.props().children.props.children[0]);
    expect(wrapper.props().children.props.children[0].props.className).toEqual('mr-1 col-md-1 col-sm-2');
    expect(wrapper.props().children.props.children[0].props.children).toEqual('Все');
//    const btn = wrapper.props().children[0];
//    console.log(btn);
//    expect(mainToolbarProps.className).toEqual('fixed-top mt-0 md-1 pd-1 pl-0 ml-0 bg-light table-bordered');
  });

  it("check title 'All' in MainToolbar", () => {
    const wrapper = shallow(<MainToolbar />);
    expect(wrapper.props().children.props.children[0].props.children).toEqual('Все');
  });

  it("check style 'Current' in MainToolbar", () => {
    const wrapper = shallow(<MainToolbar />);
    expect(wrapper.props().children.props.children[1].props.className).toEqual('mr-1 col-md-1 col-sm-2');
  });

  it("check title 'Current' in MainToolbar", () => {
    const wrapper = shallow(<MainToolbar />);
    expect(wrapper.props().children.props.children[1].props.children).toEqual('Текущие');
  });

  it("check style 'NewVacancy' in MainToolbar", () => {
    const wrapper = shallow(<MainToolbar />);
    expect(wrapper.props().children.props.children[2].props.className).toEqual('mr-1 col-md-1 col-sm-2');
  });

  it("check title 'NewVacancy' in MainToolbar", () => {
    const wrapper = shallow(<MainToolbar />);
    expect(wrapper.props().children.props.children[2].props.children).toEqual('Новая');
  });

  it("check style 'Filter' in MainToolbar", () => {
    const wrapper = shallow(<MainToolbar />);
    expect(wrapper.props().children.props.children[3].props.className).toEqual('mr-1 col-md-1 col-sm-2');
  });

  it("check title 'Filter' in MainToolbar", () => {
    const wrapper = shallow(<MainToolbar />);
    expect(wrapper.props().children.props.children[3].props.children).toEqual('Фильтр');
  });

  it("check style btn Status VacancyDlg in MainToolbar", () => {
    const wrapper = shallow(<MainToolbar />);
    expect(wrapper.props().children.props.children[4].props.className).toEqual('mr-1 col-md-1 col-sm-2');
  });

  it("check title btn status VacancyDlg in MainToolbar for CLOSED VacancyDlg", () => {
    const wrapper = shallow(<MainToolbar visibleNewVacancyDlg={false} />);
    expect(wrapper.props().children.props.children[4].props.children).toEqual('Dlg closed');
  });

  it("check title btn status VacancyDlg in MainToolbar for OPENED VacancyDlg", () => {
    const wrapper = shallow(<MainToolbar visibleNewVacancyDlg={true} />);
    expect(wrapper.props().children.props.children[4].props.children).toEqual('Dlg opened');
  });
});
