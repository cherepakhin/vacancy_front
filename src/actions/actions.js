import * as actionTypes from './actionTypes';
import vacancyNew from '../components/vacancies/vacancyNew';


// actions это просто контейнер для переноса данных(payload) и команды для обработки этих данных(type)
// вызывается из формы AddNewVacancy dispatch(actions.addVacancy({title: vacancyTitle}));
// сама обработка action происходит в reducer___.js (reducerVacancy.js, ...)
export const createAddVacancyAction = () => ({
  type: actionTypes.VACANCY_ADD,
  payload: {...vacancyNew}
});

export const createToggleVacancyAction = id => ({
  type: actionTypes.VACANCY_TOGGLE,
  payload: { id }
});

export const createRemoveVacancyAction = id => ({
  type: actionTypes.VACANCY_REMOVE,
  payload: { id }
})

export const createShowDeleteConfirmDlgAction = vacancy => ({
  type: actionTypes.SHOW_DELETE_CONFIRM_DLG,
  payload: { vacancy }
})

export const createVisibleEditVacancyDlgAction = vacancy => ({
  type: actionTypes.SHOW_EDIT_VACANCY_DLG,
  payload: { ...vacancy }
})

export const createHideEditVacancyDlgAction = () => ({
  type: actionTypes.HIDE_EDIT_VACANCY_DLG,
})

export const createSaveVacancyAction = vacancy => ({
  type: actionTypes.VACANCY_SAVE,
  payload: vacancy
});
