import * as actionTypes from './actionTypes';

// actions это просто контейнер для переноса данных(payload) и команды для обработки этих данных(type)
// вызывается из формы AddNewVacancy dispatch(actions.addVacancy({title: taskTitle}));
// сама обработка action происходит в reducer.js
export const createAddVacancyAction = title => ({
  type: actionTypes.VACANCY_ADD,
  payload: title
});

export const createToggleVacancyAction = id => ({
  type: actionTypes.VACANCY_TOGGLE,
  payload: { id }
});

export const createRemoveVacancyAction = id => ({
  type: actionTypes.VACANCY_REMOVE,
  payload: { id }
})

export const createShowDeleteConfirmDlgAction = task => ({
  type: actionTypes.SHOW_DELETE_CONFIRM_DLG,
  payload: { task }
})

