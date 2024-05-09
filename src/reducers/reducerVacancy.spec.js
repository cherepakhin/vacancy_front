import reducerVacancy from './reducerVacancy';
import * as actionTypes from '../actions/actionTypes';

describe("reducerVacancy tests", () => {
  it("init reducerVacancy", () => {
    let state0 = reducerVacancy({vacancies: [
                                               {"completed": false, "id": -1, "title": "не показывать -1"},
                                               {"completed": false, "id": -2, "title": "не показывать -2"},
                                               {"completed": false, "id": -3, "title": "не показывать -3"}
                                             ]});
    console.log(state0);
    expect(state0).toEqual({vacancies: [
      {"completed": false, "id": -1, "title": "не показывать -1"},
      {"completed": false, "id": -2, "title": "не показывать -2"},
      {"completed": false, "id": -3, "title": "не показывать -3"}
    ]});
  });

  it("add vacancy", () => {
    let vacancy0 = {"completed": false, "title": "TITLE0"};
    let state0 = reducerVacancy({vacancies: [vacancy0]});

    expect(state0).toEqual({vacancies: [vacancy0,]});

    let action = {
        type: actionTypes.VACANCY_ADD,
        payload: {title: "TITLE_ADD"}
    };

    let newState = reducerVacancy(state0, action);

    expect(newState.vacancies.length).toEqual(2);
    expect(newState.vacancies[0]).toEqual(vacancy0);
    let vacancyMustAdded = {"completed": false, id:2, "title": "TITLE_ADD"}; // id 2 generated in reducer
    expect(newState.vacancies[1]).toEqual(vacancyMustAdded);
  });

});