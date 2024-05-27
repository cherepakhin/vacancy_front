import moment from 'moment';

import reducerVacancy from './reducerVacancy';
import * as actionTypes from '../actions/actionTypes';

describe("reducerVacancy tests", () => {
  it("init reducerVacancy", () => {
    let state0 = reducerVacancy({vacancies: [
                                               {"completed": false, "id": -1, "title": "не показывать -1"},
                                               {"completed": false, "id": -2, "title": "не показывать -2"},
                                               {"completed": false, "id": -3, "title": "не показывать -3"}
                                             ]});
    // console.log(state0); // DON`T DELETE COMMENT
    expect(state0).toEqual({vacancies: [
      {"completed": false, "id": -1, "title": "не показывать -1"},
      {"completed": false, "id": -2, "title": "не показывать -2"},
      {"completed": false, "id": -3, "title": "не показывать -3"}
    ]});
  });

  it("add vacancy", () => {
    let vacancy0 = {
           title: "TITLE0",
           company: "COMPANY0",
           source: "SOURCE0",
           salary: "SALARY0",
           contact: "CONTACT0",
           comment: "COMMENT0",
           completed: false
    };

    let state0 = reducerVacancy({vacancies: [vacancy0]});

    expect(state0).toEqual({vacancies: [vacancy0,]});

    let action = {
        type: actionTypes.VACANCY_ADD,
        payload: {
          title: "TITLE_ADD",
          company: "COMPANY1",
          salary: "SALARY1",
          source: "SOURCE1",
          contact: "CONTACT1",
          comment: "COMMENT1",
          completed: false
        }
    };
//
    let newState = reducerVacancy(state0, action);
//
    expect(newState.vacancies.length).toEqual(2);
    expect(newState.vacancies[0]).toEqual(vacancy0);
    let vacancyMustAdded = {
          id:2,
          date_created: moment().format('DD.MM.YYYY'),
          date_changed: moment().format('DD.MM.YYYY'),
          title: "TITLE_ADD",
          company: "COMPANY1",
          source: "SOURCE1",
          salary: "SALARY1",
          contact: "CONTACT1",
          comment: "COMMENT1",
          completed: false
        }; // id 2 generated in reducer
    expect(newState.vacancies[1]).toEqual(vacancyMustAdded);
  });

  it("get vacancy by id", () => {
    let ID = 3;
    let vacancies = [
      {"id": 2, "completed": false, "title": "vacancy 2"},
      {"id": 3, "completed": false, "title": "vacancy 3"},
      {"id": 1, "completed": false, "title": "vacancy 1"}
     ];

    let foundElement = vacancies.find(item => item.id == ID);

//    console.log(foundElement);
    expect(foundElement.id).toEqual(ID);
  });

  it("get vacancy by id not found", () => {
    let ID = 30;
    let vacancies = [
      {"id": 2, "completed": false, "title": "vacancy 2"},
      {"id": 3, "completed": false, "title": "vacancy 3"},
      {"id": 1, "completed": false, "title": "vacancy 1"}
     ];

    let foundElement = vacancies.find(item => item.id == ID);
    let notFound = false;
    if (foundElement === undefined) {
       notFound = true;
    }
    expect(notFound).toBeTruthy();
  });

});