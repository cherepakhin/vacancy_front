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
  it("AboutVacancyDlg check prop vacancy with MOUNT (example 1)", () => {
    const wrapper = mount(<AboutVacancyDlg vacancy={{id: 100, title: "Vacancy 1"}} visible={true} fnClose={() => jest.fn()}/>);
    const dlg = toJson(wrapper);
    // demo log
    // don't delete comments
    //    console.log(dlg);
    //    console.log(dlg.node.props);
    //    expect(dlg.children[0].props.className).toBe("rounded-0");

    const vacancy = {
      id: 100,
      title: "Vacancy 1"
    };
    expect(dlg.node.props.vacancy).toEqual(vacancy);
  });

  it("AboutVacancyDlg check prop vacancy with MOUNT (example 2)", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1"
    };
    const wrapper = mount(<AboutVacancyDlg vacancy={{...vacancy}} visible={true} fnClose={() => jest.fn()}/>);
    const dlg = toJson(wrapper);
    // demo log
    // don't delete comments
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
// work!
//    const wrapper = mount(<AboutVacancyDlg vacancy={{id: 100, title: "Vacancy 1"}} visible={true} fnClose={() => jest.fn()}/>);
    const wrapper = mount(<AboutVacancyDlg vacancy={{...vacancy}} visible={true} fnClose={() => jest.fn()}/>);
    const dlg = toJson(wrapper);
//    console.log(dlg.node.props);
//      {
//        vacancy: { id: 100, title: 'Vacancy 1' },
//        visible: true,
//        fnClose: [Function: fnClose]
//      }

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

  it("AboutVacancyDlg check rounded-0", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1"
    };
    const wrapper = mount(<AboutVacancyDlg vacancy={{id: 100, title: "Vacancy 1"}} visible={true} fnClose={() => jest.fn()}/>);
    const dlg = toJson(wrapper);
//    console.log(dlg);
//      {
//        node: {
//          nodeType: 'function',
//          type: [Function: AboutVacancyDlg] { propTypes: [Object] },
//          props: { vacancy: [Object], visible: true, fnClose: [Function: fnClose] }, !!!
//          key: undefined,
//          ref: null,
//          instance: null,
//          rendered: {
//            nodeType: 'function',
//            type: [Object],
//            props: [Object],
//            key: undefined,
//            ref: null,
//            instance: null,
//            rendered: [Object]
//          }
//        },
//        type: 'AboutVacancyDlg',
//        props: {
//          vacancy: { id: 100, title: 'Vacancy 1' },
//          visible: true,
//          fnClose: [Function: fnClose]
//        },
//        children: [
//          {
//            node: [Object],
//            type: 'Modal',
//            props: [Object],
//            children: [Array],
//            '$$typeof': Symbol(react.test.json)
//          }
//        ],
//        '$$typeof': Symbol(react.test.json)
//      }

//    console.log(dlg.node.props);
//      {
//        vacancy: { id: 100, title: 'Vacancy 1' },
//        visible: true,
//        fnClose: [Function: fnClose]
//      }

    console.log(dlg.children.length); // 1
    const header_props  = dlg.children[0].props;
    // {
    //  "animation": true,
    //  "autoFocus": true,
    //  "backdrop": true,
    //  "className": "rounded-0",
    //  "dialogAs": {
    //    "$$typeof": Symbol(react.forward_ref),
    //    "displayName": "ModalDialog",
    //    "render": [Function anonymous]},
    //    "enforceFocus": true,
    //    "keyboard": true,
    //    "restoreFocus": true,
    //    "show": true
    // }
    expect(header_props.className).toBe("rounded-0");
  });

});