import React from "react";
import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";
import renderer from 'react-test-renderer';
import EnzymeToJson from 'enzyme-to-json';

import DeleteConfirmDlg from "./DeleteConfirmDlg";
import { Modal, Button, ModalFooter } from "react-bootstrap";

jest.mock('react-redux', () => ({
   useDispatch: jest.fn(),
   useSelector: jest.fn(),
}));

describe("DeleteConfirmDlg test", () => {
  it("DeleteConfirmDlg is modal", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1",
      visible: true,
    };
    const wrapper = mount(<DeleteConfirmDlg
        vacancy={vacancy}
        visible={true}
        fnVacancyDeleteConfirm={jest.fn()}
        fnVacancyDeleteCancel={jest.fn()} />);

    const dlg = toJson(wrapper);
    expect(dlg.type).toBe("DeleteConfirmDlg");
    expect(dlg.node.props.visible).toBe(true);
    console.log(dlg.props);

    expect(dlg.children[0].type).toBe("Modal");
  });

  it("DeleteConfirmDlg is visible", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1",
      visible: true,
    };
    const wrapper = mount(<DeleteConfirmDlg
        vacancy={vacancy}
        visible={true}
        fnVacancyDeleteConfirm={jest.fn()}
        fnVacancyDeleteCancel={jest.fn()} />);

    const dlg = toJson(wrapper);

    expect(dlg.type).toBe("DeleteConfirmDlg");
    expect(dlg.node.props.visible).toBe(true);
  });

  it("showDeleteConfirmDlg check prop rounded0", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1",
      visible: true,
    };
    const wrapper = shallow(<DeleteConfirmDlg
        vacancy={vacancy}
        visible={true}
        fnVacancyDeleteConfirm={jest.fn()}
        fnVacancyDeleteCancel={jest.fn()} />);

    const dlg = toJson(wrapper);
    expect(dlg.node.props.className).toBe("rounded-0");
  });

  it("DeleteConfirmDlg check Modal.Header caption", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1",
      visible: true,
    };

    const wrapper = mount(<DeleteConfirmDlg
        vacancy={vacancy}
        visible={true}
        fnVacancyDeleteConfirm={jest.fn()}
        fnVacancyDeleteCancel={jest.fn()} />);

    expect(wrapper.find(Modal.Title).text()).toBe("Удалить?");
  });

  it("DeleteConfirmDlg text Ok Button ", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1",
      visible: true,
    };

    const wrapper = shallow(<DeleteConfirmDlg
        vacancy={vacancy}
        visible={true}
        fnVacancyDeleteConfirm={jest.fn()}
        fnVacancyDeleteCancel={jest.fn()} />);

      const label = wrapper.find({ id: "ok" }).text();
      expect(label).toEqual("Да");
  });

  it("DeleteConfirmDlg text Cancel Button", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1",
      visible: true,
    };

    const wrapper = shallow(<DeleteConfirmDlg
        vacancy={vacancy}
        visible={true}
        fnVacancyDeleteConfirm={jest.fn()}
        fnVacancyDeleteCancel={jest.fn()} />);

      const label = wrapper.find({ id: "cancel" }).text();
      expect(label).toEqual("Нет");
  });

  it("DeleteConfirmDlg check ID text in Modal.Body", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1",
      visible: true,
    };

    const wrapper = shallow(<DeleteConfirmDlg
        vacancy={vacancy}
        visible={true}
        fnVacancyDeleteConfirm={jest.fn()}
        fnVacancyDeleteCancel={jest.fn()} />);

      const label = wrapper.find({ id: "id" }).text();
      expect(label).toEqual("id: 100");
  });

  it("DeleteConfirmDlg check id=title text in Modal.Body", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1",
      visible: true,
    };

    const wrapper = shallow(<DeleteConfirmDlg
        vacancy={vacancy}
        visible={true}
        fnVacancyDeleteConfirm={jest.fn()}
        fnVacancyDeleteCancel={jest.fn()} />);

      const label = wrapper.find({ id: "title" }).text();
      expect(label).toEqual("Должность: Vacancy 1");
  });

//В этом тесте ОЧЕНЬ МНОГО проверок. Ниже разделено на отдельные тесты. Оставил так.
//  it("showDeleteConfirmDlg check ALL structure with SHALLOW", () => {
//    const vacancy = {
//      id: 100,
//      title: "Vacancy 1",
//      visible: true,
//      fnVacancyDeleteConfirm: jest.fn(),
//      fnVacancyDeleteCancel: jest.fn()
//    };

//    const wrapper = shallow(<DeleteConfirmDlg {...vacancy} />);
//    const dlg = toJson(wrapper);
//    expect(dlg.children[0].type).toBe("ModalHeader");
//    expect(dlg.children[0].props).toStrictEqual( {"closeButton": true, "closeLabel": "Close"});
//    expect(dlg.children[0].props).toEqual( {"closeButton": true, "closeLabel": "Close"});
//    expect(dlg.children[1].type).toBe("ModalBody");
//    expect(dlg.children[1].node.props.children).toEqual("{id: 100, title: 'Vacancy 1'}?"); // json as string!!!
//    expect(dlg.children[2].type).toBe("ModalFooter");
//
//    expect(wrapper.find(Modal.Header)).toHaveLength(1);
//    expect(wrapper.find(Modal.Body)).toHaveLength(1);
//    expect(wrapper.find(Modal.Footer)).toHaveLength(1);
//
//    // https://remarkablemark.org/blog/2017/05/17/testing-react-modal/
//    expect(wrapper.find(Modal).prop('show')).toBe(true);    // test PROP!!!.show
//    expect(wrapper.find(Modal).prop('className')).toBe("rounded-0"); // test className props.rounded
//    expect(wrapper.find(Modal).text()).toBe("Удалить?{id: 100, title: 'Vacancy 1'}?ДаНет"); // body
//
//    expect(wrapper.find(Modal.Title).text()).toBe("Удалить?"); // header
//    expect(wrapper.find(Modal.Body).text()).toBe("{id: 100, title: 'Vacancy 1'}?"); // header
//    expect(wrapper.find(Modal.Footer).text()).toBe("ДаНет"); // footer
//
//    // test by selector
//    expect(wrapper.find({ id: "header" }).text()).toBe("Удалить?"); // by selector
//    expect(wrapper.find({ id: "body" }).text()).toBe("{id: 100, title: 'Vacancy 1'}?"); // by selector
//
//    expect(wrapper.find({ id: "ok" }).text()).toBe("Да"); // by selector
//    expect(wrapper.find({ id: "cancel" }).text()).toBe("Нет"); // by selector
//
//    expect(wrapper.find(Button)).toHaveLength(2);
//  });

//  it("showDeleteConfirmDlg check header", () => {
//    const vacancy = {
//      id: 100,
//      title: "Task 1",
//      visible: true,
//      fnVacancyDeleteConfirm: jest.fn(),
//      fnVacancyDeleteCancel: jest.fn()
//    };

//    const wrapper = shallow(<DeleteConfirmDlg {...vacancy} />);
//    const dlg = toJson(wrapper);
//
//    expect(dlg.children[0].type).toBe("ModalHeader");
//    expect(dlg.children[0].props).toEqual( {"closeButton": true, "closeLabel": "Close"});
//
//    expect(wrapper.find(Modal.Header)).toHaveLength(1);
//    expect(wrapper.find(Modal.Title).text()).toBe("Удалить?"); // header
//    // test by selector
//    expect(wrapper.find({ id: "header" }).text()).toBe("Удалить?"); // by selector
//  });

//  it("showDeleteConfirmDlg check footer", () => {
//    const vacancy = {
//      id: 100,
//      title: "Vacancy 1",
//      visible: true,
//      fnVacancyDeleteConfirm: jest.fn(),
//      fnVacancyDeleteCancel: jest.fn()
//    };

//    const wrapper = shallow(<DeleteConfirmDlg {...vacancy} />);
//    const dlg = toJson(wrapper);
//
//    expect(wrapper.find(Modal.Footer)).toHaveLength(1); // find by Modal_._Footer
//    expect(wrapper.find(ModalFooter)).toHaveLength(1); // find by ModalFooter
//    expect(dlg.children[2].type).toBe("ModalFooter");
//    // test by selector
//    expect(wrapper.find({ id: "ok" })).toHaveLength(1); // find by Modal_._Footer
//    expect(wrapper.find({ id: "ok" }).text()).toBe("Да"); // by selector
//    expect(wrapper.find({ id: "cancel" })).toHaveLength(1); // find by Modal_._Footer
//    expect(wrapper.find({ id: "cancel" }).text()).toBe("Нет"); // by selector
//
//    expect(wrapper.find(Button)).toHaveLength(2);
//  });

//  it("showDeleteConfirmDlg check body", () => {
//    const vacancy = {
//      id: 100,
//      title: "Vacancy 1",
//      visible: true,
//      fnVacancyDeleteConfirm: jest.fn(),
//      fnVacancyDeleteCancel: jest.fn()
//    };

//    const wrapper = shallow(<DeleteConfirmDlg {...vacancy} />);
//    const dlg = toJson(wrapper);
//
//    expect(dlg.children[1].type).toBe("ModalBody"); // place in dlg. index must be 1. body after header.
//    // test by selector
//    expect(wrapper.find(Modal.Body)).toHaveLength(1);
//    expect(wrapper.find({ id: "body" }).text()).toBe("{id: 100, title: 'Vacancy 1'}?");
//  });

//  it("showDeleteConfirmDlg check body with props in component", () => {
    // NOT  <DeleteConfirmDlg {...props}, BUT <DeleteConfirmDlg id='100' title="Vacancy 1" visible="true"/>
//    const vacancy = {
//      id: 100,
//      title: "Vacancy 1",
//      visible: true,
//      fnVacancyDeleteConfirm: jest.fn(),
//      fnVacancyDeleteCancel: jest.fn()
//    };

//    const wrapper = shallow(<DeleteConfirmDlg {...vacancy} />);
//    const dlg = toJson(wrapper);
//
//    expect(dlg.children[1].type).toBe("ModalBody"); // place in dlg. index must be 1, body after header.
//    // test by selector
//    expect(wrapper.find(Modal.Body)).toHaveLength(1);
//    expect(wrapper.find({ id: "body" }).text()).toBe("{id: 100, title: 'Vacancy 1'}?");
//  });

//  it("showDeleteConfirmDlg match snapshot", () => {
//    const vacancy = {
//        vacancy: {
//            id: 100,
//            title: "Vacancy 1",
//      },
//      visible: true,
//      fnVacancyDeleteConfirm: jest.fn(),
//      fnVacancyDeleteCancel: jest.fn()
//    };
//
//    const wrapper = mount(<DeleteConfirmDlg {...vacancy} />);

//    expect(EnzymeToJson(wrapper)).toMatchSnapshot();
//  });

});
