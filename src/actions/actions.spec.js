import * as actionTypes from './actionTypes';
import {createAddVacancyAction, createToggleVacancyAction, createRemoveVacancyAction} from "./actions";

describe("Vacancy actions tests", () => {
  it("createAddVacancyAction.", () => {
      const action = createAddVacancyAction("Example vacancy");
      expect(action).toEqual({
                               type: actionTypes.VACANCY_ADD,
                               payload: "Example vacancy"
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
