import moment from 'moment';

import * as actionTypes from './actionTypes';
import {createAddVacancyAction, createToggleVacancyAction, createRemoveVacancyAction} from "./actions";

describe("Vacancy actions tests", () => {
  it("createAddVacancyAction.", () => {
      const action = createAddVacancyAction();
      expect(action).toEqual({
                               type: actionTypes.VACANCY_ADD,
                               payload: {"id": -1,
                                         "title": "",
                                         "company": "",
                                         "date_created": moment().format('DD.MM.YYYY'),
                                         "date_changed": moment().format('DD.MM.YYYY'),
                                         "salary": "0",
                                         "source": "",
                                         "contact": "",
                                         "comment": "",
                                         "completed": false}
                             });
    });

  it("createToggleVacancyAction.", () => {
      const ID = 100;
      const action = createToggleVacancyAction(ID);
      expect(action).toEqual({
                               type: actionTypes.VACANCY_TOGGLE,
                               payload: {id: 100}
                             });
    });

  it("createRemoveVacancyAction.", () => {
      const ID = 100;
      const action = createRemoveVacancyAction(ID);
      expect(action).toEqual({
                               type: actionTypes.VACANCY_REMOVE,
                               payload: {id: 100}
                             });
    });
});
