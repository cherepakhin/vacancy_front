import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Vacancy from "./Vacancy";

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
      completed: false
    };

    const wrapper = shallow(<Vacancy vacancy={vacancy} />);
    const vacancyView = toJson(wrapper);

    expect(vacancyView.type).toEqual("ListGroupItem");
    expect(vacancyView.children.length).toBe(6); // showDeleteConfirmDlg, showVisibleMoreDlg, Form.Check, Подробнее, Удалить, dlg vacancy -1
  });

//TODO: move to DeleteConfirmDlg.spec.js
  it("showDeleteConfirmDlg hidden in Vacancy", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1",
      completed: false
    };

    const wrapper = shallow(<Vacancy vacancy={vacancy} />);
    expect(wrapper.props().children[0].type.displayName).toEqual("Modal");

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
      completed: false
    };

    const wrapper = shallow(<Vacancy vacancy={vacancy} />);
    const formCheck = wrapper.props().children[3];

    expect(formCheck.props.id).toBe(vacancy.id);
    expect(formCheck.props.type).toBe("checkbox");
    expect(formCheck.props.label).toBe("100. Vacancy 1");
    expect(formCheck.props.checked).toBe(vacancy.completed);
  });

  it("check showMoreBtn props in Vacancy", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1",
      completed: false
    };

    const wrapper = shallow(<Vacancy vacancy={vacancy} />);
    const showMoreBtn = wrapper.props().children[4];

    expect(showMoreBtn.props["className"]).toEqual("list-group-item-actions");
    expect(showMoreBtn.props["children"].props.children).toBe("Подробнее");
  });

  it("check deleteBtn props in Vacancy", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1",
      completed: false
    };

    const wrapper = shallow(<Vacancy vacancy={vacancy} />);
    const deleteBtn = wrapper.props().children[5];

    expect(deleteBtn.props["className"]).toBe("list-group-item-actions");
    expect(deleteBtn.props["children"].props.children).toBe("Удалить");
    expect(deleteBtn.props.title).toBe("Удалить вакансию");
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
