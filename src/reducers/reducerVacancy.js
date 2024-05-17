import moment from 'moment';

import * as actionTypes from '../actions/actionTypes';
import vacancy0 from '../components/vacancies/vacancy0';
import vacancyTest from '../components/vacancies/vacancyTest';

let state0 = { vacancies: [vacancy0, vacancyTest],
               visibleNewVacancyDlg: false,
               visibleVacancies: false,
             };

let lastId = 1; //TODO: get from backend

export default function reducerVacancy(state = state0, action) {
  console.log("reduserVacancy.js: BEFORE state:");
  console.log(state);
  console.log("reduserVacancy.js: action:");
  console.log(action);
  if(action === undefined) {
    console.log("reduserVacancy.js: undefined action in reducerVacancy.js");
    return {...state};
  }
  let newState = {...state};
  console.log("reduserVacancy.js: newState-->"+ JSON.stringify(newState));
  switch (action.type) {
    case actionTypes.VACANCY_ADD:
      //TODO: add rest request
      //TODO: and refresh all vacancies
      //TODO: add dozer mapper for convert backend model to frontend
      // Пример простого добавление задачи в state из action.payload
      // ТУТ делается изменение state
      newState.vacancies.push({
                                id: ++lastId,
                                date_created: moment().format('DD.MM.YYYY'),
                                date_changed: moment().format('DD.MM.YYYY'),
                                title: action.payload.title,
                                company: action.payload.company,
                                source: action.payload.source,
                                salary: action.payload.salary,
                                contact: action.payload.contact,
                                comment: action.payload.comment,
                                completed: false,
                              });
      newState.visibleNewVacancyDlg = false;
      newState.visibleVacancies = true;
      console.log("reduserVacancy.js: newState-->"+ JSON.stringify(newState));
      return newState;

    case actionTypes.VACANCY_TOGGLE:
      let changedVacancies = newState.vacancies.map(vacancy => {
                                                               if (vacancy.id === action.payload.id)
                                                                 return { ...vacancy, completed: !vacancy.completed }
                                                               return vacancy;
                                                             });
      newState.vacancies = changedVacancies;
      return newState;
    case actionTypes.VACANCY_REMOVE:
      //TODO: add rest request
      console.log("reduserVacancy.js: soFetch delete and get new list vacancies");
      let filtered = newState.vacancies.filter(vacancy => action.payload.id !== vacancy.id)
      console.log(filtered);
      newState.vacancies = filtered;
      return newState;

    case actionTypes.SHOW_NEW_VACANCY_DLG:
      console.log("actionTypes.SHOW_NEW_VACANCY_DLG="+JSON.stringify(action));
      console.log("before newState.visibleNewVacancyDlg="+JSON.stringify(newState.visibleNewVacancyDlg));
      newState.visibleNewVacancyDlg = true
      newState.visibleVacancies = false;
      console.log("after newState.visibleNewVacancyDlg="+JSON.stringify(newState.visibleNewVacancyDlg));
      return newState;

    case actionTypes.HIDE_NEW_VACANCY_DLG:
      console.log("actionTypes.SHOW_NEW_VACANCY_DLG="+JSON.stringify(action));
      console.log("before newState.visibleNewVacancyDlg="+JSON.stringify(newState.visibleNewVacancyDlg));
      newState.visibleNewVacancyDlg = false;
      newState.visibleVacancies = true;
      console.log("after newState.visibleNewVacancyDlg="+JSON.stringify(newState.visibleNewVacancyDlg));
      return newState;

    default:
      return state;
  } // switch
}