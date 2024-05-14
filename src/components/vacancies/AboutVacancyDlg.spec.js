import React from "react";
import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";
import renderer from 'react-test-renderer';
import EnzymeToJson from 'enzyme-to-json';

import AboutVacancyDlg from "./AboutVacancyDlg";

jest.mock('react-redux', () => ({
   useDispatch: jest.fn(),
   useSelector: jest.fn(),
}));

describe("AboutVacancyDlg test", () => {
  it("AboutVacancyDlg check prop vacancy with MOUNT", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1"
    };
    const wrapper = mount(<AboutVacancyDlg vacancy={{id: 100, title: "Vacancy 1"}} visible={true} fnClose={() => jest.fn()}/>);
    const dlg = toJson(wrapper);
    // demo log
    //    console.log(dlg);
    //    console.log(dlg.node.props);
//    expect(dlg.children[0].props.className).toBe("rounded-0");

    expect(dlg.node.props.vacancy).toEqual(vacancy);
  });

  it("AboutVacancyDlg check prop visible with MOUNT", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1"
    };
    const wrapper = mount(<AboutVacancyDlg vacancy={{id: 100, title: "Vacancy 1"}} visible={true} fnClose={() => jest.fn()}/>);
    const dlg = toJson(wrapper);

    expect(dlg.node.props.visible).toEqual(true);
  });

  it("AboutVacancyDlg check is modal", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1"
    };
    const wrapper = mount(<AboutVacancyDlg vacancy={{id: 100, title: "Vacancy 1"}} visible={true} fnClose={() => jest.fn()}/>);
    const dlg = toJson(wrapper);
    expect(dlg.children[0].type).toBe("Modal");
  });

  it("AboutVacancyDlg check show TRUE", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1"
    };
    const wrapper = mount(<AboutVacancyDlg vacancy={{id: 100, title: "Vacancy 1"}} visible={true} fnClose={() => jest.fn()}/>);
    const dlg = toJson(wrapper);

    expect(dlg.children[0].props.show).toBe(true);
  });

  it("AboutVacancyDlg check show FALSE", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1"
    };
    const wrapper = mount(<AboutVacancyDlg vacancy={{id: 100, title: "Vacancy 1"}} visible={false} fnClose={() => jest.fn()}/>);
    const dlg = toJson(wrapper);

    expect(dlg.children[0].props.show).toBe(false);
  });
});