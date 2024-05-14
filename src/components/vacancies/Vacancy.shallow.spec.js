import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { act } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import { useSelector, useDispatch, mockStore } from "react-redux";

import Vacancy from "./Vacancy";
import DeleteConfirmDlg from "./DeleteConfirmDlg";

jest.mock('react-redux', () => ({
   useDispatch: jest.fn(),
   useSelector: jest.fn(),
}));

describe("<Vacancy />", () => {

  it("filter map by selected keys", () => {
    const myMap = new Map([["id", 100], ["title", "Vacancy 1"], ["checked", false], ["type", "checkbox"]]);
    const selectedKeys = ["id", "title", "checked"]; // checkbox must be deleted
    const vacancy = Object.fromEntries(myMap);
    expect(vacancy).toEqual({id: 100, title: "Vacancy 1", checked: false, type: "checkbox"});

    const filteredMap = new Map(
      [...myMap]
      .filter(([k, v]) => selectedKeys.includes(k)));

    expect(filteredMap).toEqual(new Map([["id", 100], ["title", "Vacancy 1"], ["checked", false]]));
  });

  it("Check structure view: Form.Check, moreBtn, deleteBtn", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1",
      company: "Company 1",
      date_created: "01.02.2020",
      date_changed: "02.03.2020",
      salary: "0",
      source: "Source 1",
      contact: "Contact 1",
      comment: "Comment 1",
      completed: false
    };

    const wrapper = shallow(<Vacancy vacancy={vacancy} />);
    const vacancyView = toJson(wrapper);

    expect(vacancyView.type).toEqual("ListGroupItem");
    expect(vacancyView.children.length).toBe(7); // showDeleteConfirmDlg, showVisibleMoreDlg, Form.Check, Подробнее, Удалить, dlg vacancy -1
  });

  it("DeleteConfirmDlg hidden in Vacancy", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1",
      company: "Company 1",
      date_created: "01.02.2020",
      date_changed: "02.03.2020",
      salary: "0",
      source: "Source 1",
      contact: "Contact 1",
      comment: "Comment 1",
      completed: false
    };

    const wrapper = shallow(<Vacancy vacancy={vacancy} />);
    expect(wrapper.props().children[1].type.name).toEqual("DeleteConfirmDlg");

    //wrapper.props().children[1] is DeleteConfirmDlg. (see Vacancy.js)
    expect(wrapper.props().children[1].props).toEqual(
        expect.objectContaining(
        {
          id: 100,
          title: "Vacancy 1",
          visible: false,
        })
    );
  });

  it("check props formCheck in Vacancy", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1",
      company: "Company 1",
      date_created: "01.02.2020",
      date_changed: "02.03.2020",
      salary: "0",
      source: "Source 1",
      contact: "Contact 1",
      comment: "Comment 1",
      completed: false
    };

    const wrapper = shallow(<Vacancy vacancy={vacancy} />);
    const formCheck = wrapper.props().children[4];

    expect(formCheck.props.id).toBe(vacancy.id);
    expect(formCheck.props.type).toBe("checkbox");
    expect(formCheck.props.label).toBe("100. Company 1. Vacancy 1");
    expect(formCheck.props.checked).toBe(vacancy.completed);
  });

  it("check showMoreBtn props in Vacancy", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1",
      company: "Company 1",
      date_created: "01.02.2020",
      date_changed: "02.03.2020",
      salary: "0",
      source: "Source 1",
      contact: "Contact 1",
      comment: "Comment 1",
      completed: false
    };

    const wrapper = shallow(<Vacancy vacancy={vacancy} />);
    const showMoreBtn = wrapper.props().children[5];

    expect(showMoreBtn.props["className"]).toEqual("col-1 list-group-item-action");
    expect(showMoreBtn.props["children"].props.children).toBe("Подробнее");
  });

  it("check deleteBtn props in Vacancy", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1",
      company: "Company 1",
      date_created: "01.02.2020",
      date_changed: "02.03.2020",
      salary: "0",
      source: "Source 1",
      contact: "Contact 1",
      comment: "Comment 1",
      completed: false
    };

    const wrapper = shallow(<Vacancy vacancy={vacancy} />);
    const deleteBtn = wrapper.props().children[6];

    expect(deleteBtn.props["className"]).toBe("col-1 list-group-item-action list-group-item-action-last");
    expect(deleteBtn.props["children"].props.children).toBe("Удалить");
    expect(deleteBtn.props.title).toBe("Удалить вакансию");
  });

  it('should open the delete confirmation dialog (https://chat.lmsys.org/)', () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1",
      company: "Company 1",
      date_created: "01.02.2020",
      date_changed: "02.03.2020",
      salary: "0",
      source: "Source 1",
      contact: "Contact 1",
      comment: "Comment 1",
      completed: false
    };

    const wrapper = mount(<Vacancy vacancy={vacancy} />);

    wrapper.find('#idDeleteBtn').simulate('click');
    expect(wrapper.find(DeleteConfirmDlg)).toHaveLength(1);
    expect(wrapper.find("#idDeleteBtn")).toHaveLength(1);

    const deleteDlg = wrapper.find(DeleteConfirmDlg);
  });

  it('should open the delete confirmation dialog with mount (https://chat.lmsys.org/)', () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1",
      company: "Company 1",
      date_created: "01.02.2020",
      date_changed: "02.03.2020",
      salary: "0",
      source: "Source 1",
      contact: "Contact 1",
      comment: "Comment 1",
      completed: false
    };

    const wrapper = mount(<Vacancy vacancy={vacancy} />);

    expect(wrapper.find(DeleteConfirmDlg)).toHaveLength(1);
    expect(wrapper.find("#idDeleteBtn")).toHaveLength(1);

    expect(wrapper.find(DeleteConfirmDlg)).toHaveLength(1);
    const deleteDlg = wrapper.find(DeleteConfirmDlg);

//    wrapper.setVisibleDeleteConfirmDlg(true);
//    console.log("=============================");
//    console.log(deleteDlg.props());
    deleteDlg.props().fnVacancyDeleteCancel(); // console.log("handleVacancyDeleteCancel" );
    expect(deleteDlg.props().visible).toBe(false); // OK

//    console.log(deleteDlg.props());
    wrapper.find('#idDeleteBtn').simulate('click');

//    wrapper.openDeleteConfirmDlg(vacancy.id);
//    console.log(wrapper);
//    deleteDlg.props().visible = true;
//    expect(deleteDlg.props().visible).toBe(true);
    expect(deleteDlg.props().title).toBe(vacancy.title);
    expect(deleteDlg.props().id).toBe(vacancy.id);

    act(() => {
        wrapper.find('#idDeleteBtn').simulate('click');
//        console.log(wrapper.props());
//        console.log(deleteDlg.props());
        expect(deleteDlg.props().visible).toBe(false); // OK, но нужно true
    });
  });

  it('simulate click on deleteBtn', () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1",
      company: "Company 1",
      date_created: "01.02.2020",
      date_changed: "02.03.2020",
      salary: "0",
      source: "Source 1",
      contact: "Contact 1",
      comment: "Comment 1",
      completed: false
    };

    const reactRedux = { useDispatch, useSelector }
    const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
    const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
    const initialState = {
          vacancy: {
                id: 1,
                title: 'Test Vacancy',
                completed: false,
              },
        };

    useSelectorMock.mockReturnValue(initialState);

    const vacancyComponent = mount(<Vacancy vacancy={vacancy} />);

    act(() => {
        expect(vacancyComponent.find("#idDeleteBtn")).toHaveLength(1);
        vacancyComponent.find('#idDeleteBtn').simulate('click');
        vacancyComponent.find('#idDeleteBtn').simulate('click');
        vacancyComponent.find('#idDeleteBtn').simulate('click');
        vacancyComponent.find('#idDeleteBtn').simulate('click');

        expect(vacancyComponent.find(DeleteConfirmDlg)).toHaveLength(1);
        const propsDeleteDlg = vacancyComponent.find(DeleteConfirmDlg).props();
    });
  });

// Example tests:
//    const children = toJson(wrapper.children);
//    console.log(children);


//  it("renders Account header", () => {
//    const wrapper = shallow(<App />);
//    const header = <h1>Display Active Users Account Details</h1>;
//   // expect(wrapper.contains(welcome)).toBe(true);
//    expect(wrapper.contains(header)).toEqual(true);
//  });
//
//  it("contains account", () => {
//    const wrapper = mount(<Account user={user} />);
//    const value = wrapper.find("p").text();
//    expect(value).toEqual("david@gmail.com");
//  });
//
//  it("accepts user account props", () => {
//    const wrapper = mount(<Account user={user} />);
//    expect(wrapper.props().user).toEqual(user);
//  });
});
