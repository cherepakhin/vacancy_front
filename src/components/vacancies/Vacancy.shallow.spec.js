import React from "react";
import { shallow, mount } from "enzyme";
//import { render, queryByAttribute } from 'react-testing-library';
import toJson from "enzyme-to-json";
import { act, screen, render, queryByAttribute } from '@testing-library/react';
//import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
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
    expect(vacancyView.children.length).toBe(8); // showDeleteConfirmDlg, showVisibleMoreDlg, Form.Check, Подробнее, Удалить, dlg vacancy -1
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
    expect(vacancyView.children.length).toBe(8); // showDeleteConfirmDlg, showVisibleMoreDlg, Form.Check, Подробнее, Удалить, dlg vacancy -1
  });

  it("Check content in Vacancy", () => {
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

    expect(vacancyView.children[0].props.vacancy).toEqual(vacancy);
  });

  it("Check hidden AboutVacancyDlg in Vacancy", () => {
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
//    console.log(vacancyView.children[0].props);
//      console.log src/components/vacancies/Vacancy.shallow.spec.js:109
//        {
//          vacancy: {
//            id: 100,
//            title: 'Vacancy 1',
//            company: 'Company 1',
//            date_created: '01.02.2020',
//            date_changed: '02.03.2020',
//            salary: '0',
//            source: 'Source 1',
//            contact: 'Contact 1',
//            comment: 'Comment 1',
//            completed: false
//          },
//          visible: false,
//          fnClose: [Function: closeAboutDlg]
//        }

    // children[0] is AboutVacancyDlg. (see Vacancy.js)
    expect(vacancyView.children[0].props.visible).toEqual(false);
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
//    expect(wrapper.props().children[1].props).toEqual(
//        expect.objectContaining(
//        {
//          id: 100,
//          title: "Vacancy 1",
//          visible: false,
//        })
//    );
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
    expect(wrapper.find("#idLastEvent")).toHaveLength(1);
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

    expect(showMoreBtn.props["className"]).toEqual("col-1 list-group-item-action list-group-item-action-about");
    expect(showMoreBtn.props["children"].props.children).toBe("Описание");
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
    const deleteBtn = wrapper.props().children[7];

    expect(deleteBtn.props["className"]).toBe("col-1 list-group-item-action list-group-item-action-delete");
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

    wrapper.find('#idDeleteBtn').simulate('click'); // find button by id
    expect(wrapper.find(DeleteConfirmDlg)).toHaveLength(1); // find component by class

    const deleteDlg = wrapper.find(DeleteConfirmDlg);
    expect(deleteDlg.props().visible).toBe(false);
    expect(deleteDlg.props().vacancy).toBe(vacancy);
  });

  it('find DeleteDlg by ID', () =>  {
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
    expect(wrapper.find("#deleteConfirmDlg")).toHaveLength(1); // find component by id
  });

  it('find DeleteDlg by name class', () =>  {
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
    expect(wrapper.find(DeleteConfirmDlg)).toHaveLength(1); // find component by class
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

//    console.log(deleteDlg.props()); // DON`T DELETE COMMENT
    deleteDlg.props().fnVacancyDeleteCancel(); // Close delete dialog. console.log("handleVacancyDeleteCancel" );
    expect(deleteDlg.props().visible).toBe(false); // OK

//    console.log(deleteDlg.props());
//    wrapper.find('#idDeleteBtn').simulate('click');

//    wrapper.openDeleteConfirmDlg(vacancy.id);
//    console.log(wrapper);
//    deleteDlg.props().visible = true;
//    expect(deleteDlg.props().visible).toBe(true);
//    expect(deleteDlg.props().title).toBe(vacancy.title);
//    expect(deleteDlg.props().id).toBe(vacancy.id);

//    act(() => {
//        wrapper.find('#idDeleteBtn').simulate('click');
////        console.log(wrapper.props());
////        console.log(deleteDlg.props());
//        expect(deleteDlg.props().visible).toBe(false); // OK, но нужно true
//    });
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
    const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
    const initialState = {
          vacancy: {
                id: 1,
                title: 'Test Vacancy',
                completed: false,
              },
        };

    useSelectorMock.mockReturnValue(initialState);

    const vacancyComponent = render(<Vacancy vacancy={vacancy} />);
    // screen.debug(); // ERROR
    console.log(screen);
    const divIdLastEvent = vacancyComponent.container.querySelector('#idLastEvent');
    //  <div class="col-1 list-group-item-date" id="idLastEvent" title="Последнее событие"><span tabindex="0">02.03.2020</span></div>
    expect(divIdLastEvent.id).toBe('idLastEvent');
    expect(divIdLastEvent.title).toBe('Последнее событие');
    expect(divIdLastEvent.className).toBe('col-1 list-group-item-date');

//    console.log(someElement);
//      <ref *1> HTMLDivElement {
//        '__reactInternalInstance$5daycucevbn': <ref *2> FiberNode {
//          tag: 5,
//          key: null,
//          elementType: 'div',
//          type: 'div',
//          stateNode: [Circular *1],
//          return: FiberNode {
//            tag: 5,
//            key: null,
//            elementType: 'div',
//            type: 'div',
//            stateNode: [HTMLDivElement],
//            return: [FiberNode],
//            child: [FiberNode],
//            sibling: null,
//            index: 0,
//            ref: null,
//            pendingProps: [Object],
//            memoizedProps: [Object],
//            updateQueue: null,
//            memoizedState: null,
//            dependencies: null,
//            mode: 0,
//            effectTag: 0,
//            nextEffect: null,
//            firstEffect: [FiberNode],
//            lastEffect: [FiberNode],
//            expirationTime: 0,
//            childExpirationTime: 1073741823,
//            alternate: [FiberNode],
//            actualDuration: 0,
//            actualStartTime: -1,
//            selfBaseDuration: 0,
//            treeBaseDuration: 0,
//            _debugID: 591,
//            _debugIsCurrentlyTiming: false,
//            _debugSource: null,
//            _debugOwner: [FiberNode],
//            _debugNeedsRemount: false,
//            _debugHookTypes: null
//          },
//          child: FiberNode {
//            tag: 5,
//            key: null,
//            elementType: 'span',
//            type: 'span',
//            stateNode: [HTMLSpanElement],
//            return: [Circular *2],
//            child: null,
//            sibling: null,
//            index: 0,
//            ref: null,
//            pendingProps: [Object],
//            memoizedProps: [Object],
//            updateQueue: null,
//            memoizedState: null,
//            dependencies: null,
//            mode: 0,
//            effectTag: 0,
//            nextEffect: null,
//            firstEffect: null,
//            lastEffect: null,
//            expirationTime: 0,
//            childExpirationTime: 0,
//            alternate: null,
//            actualDuration: 0,
//            actualStartTime: -1,
//            selfBaseDuration: 0,
//            treeBaseDuration: 0,
//            _debugID: 623,
//            _debugIsCurrentlyTiming: false,
//            _debugSource: [Object],
//            _debugOwner: [FiberNode],
//            _debugNeedsRemount: false,
//            _debugHookTypes: null
//          },
//          sibling: FiberNode {
//            tag: 11,
//            key: null,
//            elementType: [Object],
//            type: [Object],
//            stateNode: null,
//            return: [FiberNode],
//            child: [FiberNode],
//            sibling: [FiberNode],
//            index: 4,
//            ref: null,
//            pendingProps: [Object],
//            memoizedProps: [Object],
//            updateQueue: null,
//            memoizedState: [Object],
//            dependencies: [Object],
//            mode: 0,
//            effectTag: 1,
//            nextEffect: null,
//            firstEffect: null,
//            lastEffect: null,
//            expirationTime: 0,
//            childExpirationTime: 0,
//            alternate: [FiberNode],
//            actualDuration: 0,
//            actualStartTime: -1,
//            selfBaseDuration: 0,
//            treeBaseDuration: 0,
//            _debugID: 597,
//            _debugIsCurrentlyTiming: false,
//            _debugSource: [Object],
//            _debugOwner: [FiberNode],
//            _debugNeedsRemount: false,
//            _debugHookTypes: [Array]
//          },
//          index: 3,
//          ref: null,
//          pendingProps: {
//            id: 'idLastEvent',
//            className: 'col-1 list-group-item-date',
//            title: 'Последнее событие',
//            children: [Object]
//          },
//          memoizedProps: {
//            id: 'idLastEvent',
//            className: 'col-1 list-group-item-date',
//            title: 'Последнее событие',
//            children: [Object]
//          },
//          updateQueue: null,
//          memoizedState: null,
//          dependencies: null,
//          mode: 0,
//          effectTag: 0,
//          nextEffect: null,
//          firstEffect: null,
//          lastEffect: null,
//          expirationTime: 0,
//          childExpirationTime: 0,
//          alternate: FiberNode {
//            tag: 5,
//            key: null,
//            elementType: 'div',
//            type: 'div',
//            stateNode: [Circular *1],
//            return: [FiberNode],
//            child: [FiberNode],
//            sibling: [FiberNode],
//            index: 3,
//            ref: null,
//            pendingProps: [Object],
//            memoizedProps: [Object],
//            updateQueue: null,
//            memoizedState: null,
//            dependencies: null,
//            mode: 0,
//            effectTag: 0,
//            nextEffect: null,
//            firstEffect: null,
//            lastEffect: null,
//            expirationTime: 0,
//            childExpirationTime: 0,
//            alternate: [Circular *2],
//            actualDuration: 0,
//            actualStartTime: -1,
//            selfBaseDuration: 0,
//            treeBaseDuration: 0,
//            _debugID: 596,
//            _debugIsCurrentlyTiming: false,
//            _debugSource: [Object],
//            _debugOwner: [FiberNode],
//            _debugNeedsRemount: false,
//            _debugHookTypes: null
//          },
//          actualDuration: 0,
//          actualStartTime: -1,
//          selfBaseDuration: 0,
//          treeBaseDuration: 0,
//          _debugID: 596,
//          _debugIsCurrentlyTiming: false,
//          _debugSource: {
//            fileName: '/home/vasi/prog/js/vacancy_front/src/components/vacancies/Vacancy.js',
//            lineNumber: 107,
//            columnNumber: 7
//          },
//          _debugOwner: FiberNode {
//            tag: 0,
//            key: null,
//            elementType: [Function],
//            type: [Function],
//            stateNode: null,
//            return: [FiberNode],
//            child: [FiberNode],
//            sibling: null,
//            index: 0,
//            ref: null,
//            pendingProps: [Object],
//            memoizedProps: [Object],
//            updateQueue: null,
//            memoizedState: [Object],
//            dependencies: null,
//            mode: 0,
//            effectTag: 1,
//            nextEffect: null,
//            firstEffect: [FiberNode],
//            lastEffect: [FiberNode],
//            expirationTime: 0,
//            childExpirationTime: 1073741823,
//            alternate: [FiberNode],
//            actualDuration: 0,
//            actualStartTime: -1,
//            selfBaseDuration: 0,
//            treeBaseDuration: 0,
//            _debugID: 585,
//            _debugIsCurrentlyTiming: false,
//            _debugSource: [Object],
//            _debugOwner: null,
//            _debugNeedsRemount: false,
//            _debugHookTypes: [Array]
//          },
//          _debugNeedsRemount: false,
//          _debugHookTypes: null
//        },
//        '__reactEventHandlers$5daycucevbn': {
//          id: 'idLastEvent',
//          className: 'col-1 list-group-item-date',
//          title: 'Последнее событие',
//          children: {
//            '$$typeof': Symbol(react.element),
//            type: 'span',
//            key: null,
//            ref: null,
//            props: [Object],
//            _owner: [FiberNode],
//            _store: {}
//          }
//        }
//      }

    // console.log(screen.debug); // [Function: debug]
    // console.log(screen.debug()); // ERROR
    // console.log(vacancyComponent.debug()); // vacancyComponent.debug is not a function
    // console.log(screen.queryByLabelText("deleteConfirmDlg")); // null
    // console.log(screen.queryByDisplayValue("Удалить")); // null
// HELP
//    const vacancyComponent = render(<Vacancy vacancy={vacancy} />);
//    console.log(screen);
//     {
//            debug: [Function: debug],
//            logTestingPlaygroundURL: [Function: logTestingPlaygroundURL],

// By LabelText
//            queryAllByLabelText: [Function: bound ],
//            queryByLabelText: [Function: bound ],
//            getAllByLabelText: [Function: bound ],
//            getByLabelText: [Function: bound ],
//            findAllByLabelText: [Function: bound ],
//            findByLabelText: [Function: bound ],

// By PlaceholderText
//            queryByPlaceholderText: [Function: bound ],
//            queryAllByPlaceholderText: [Function: bound ],
//            getByPlaceholderText: [Function: bound ],
//            getAllByPlaceholderText: [Function: bound ],
//            findAllByPlaceholderText: [Function: bound ],
//            findByPlaceholderText: [Function: bound ],

// By Text
//      console.log(screen.queryByText("Удалить")); // null
//      console.log(screen.queryByText("DeleteConfirmDlg")); // null
//            queryByText: [Function: bound ],
//            queryAllByText: [Function: bound ],
//            getByText: [Function: bound ],
//            getAllByText: [Function: bound ],
//            findAllByText: [Function: bound ],
//            findByText: [Function: bound ],

// By DisplayValue:
//        console.log(screen.queryByDisplayValue("Удалить")); // null
//            queryByDisplayValue: [Function: bound ],
//            queryAllByDisplayValue: [Function: bound ],
//            getByDisplayValue: [Function: bound ],
//            getAllByDisplayValue: [Function: bound ],
//            findAllByDisplayValue: [Function: bound ],
//            findByDisplayValue: [Function: bound ],

// By AltText:
//            queryByAltText: [Function: bound ],
//            queryAllByAltText: [Function: bound ],
//            getByAltText: [Function: bound ],
//            getAllByAltText: [Function: bound ],
//            findAllByAltText: [Function: bound ],
//            findByAltText: [Function: bound ],
//            queryByTitle: [Function: bound ],
//            queryAllByTitle: [Function: bound ],
//            getByTitle: [Function: bound ],
//            getAllByTitle: [Function: bound ],
//            findAllByTitle: [Function: bound ],
//            findByTitle: [Function: bound ],

//            queryByRole: [Function: bound ],
//            queryAllByRole: [Function: bound ],
//            getAllByRole: [Function: bound ],
//            getByRole: [Function: bound ],
//            findAllByRole: [Function: bound ],
//            findByRole: [Function: bound ],

//            queryByTestId: [Function: bound ],
//            queryAllByTestId: [Function: bound ],
//            getByTestId: [Function: bound ],
//            getAllByTestId: [Function: bound ],
//            findAllByTestId: [Function: bound ],
//            findByTestId: [Function: bound ]
//          }

  });

  it("check title idOpenBtn props in Vacancy", () => {
    let vacancy = {
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
    const changeBtn = wrapper.props().children[6];

    expect(changeBtn.props["className"]).toBe("col-1 list-group-item-action list-group-item-action-open");
    expect(changeBtn.props["children"].props.children).toBe("Изменить");
    expect(changeBtn.props.title).toBe("Изменить вакансию");
  });

  it("show NOT delete dialog for vacancy=-1", () => {
    let vacancy = {
      id: -1,
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
    const changeBtn = wrapper.props().children[6];

  });

// Don`t delete this comment. Example tests:
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
