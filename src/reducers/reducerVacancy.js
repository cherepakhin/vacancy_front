import * as actionTypes from '../actions/actionTypes';

let state0 = { vacancies: [
                {"completed": false, "id": -1, "title": "не показывать -1"},
                ],
               visibleNewVacancyDlg: false,
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
  var newState = {...state};
  console.log("reduserVacancy.js: newState-->"+ JSON.stringify(newState));
  switch (action.type) {
    case actionTypes.VACANCY_ADD:
      //TODO: add rest request
      //TODO: and refresh all vacancies

      // Пример простого добавление задачи в state из action.payload
      // ТУТ делается изменение state
      newState.vacancies.push({
                                id: ++lastId,
                                title: action.payload.title,
                                completed: false,
                              });
      console.log("reduserVacancy.js: newState-->"+ JSON.stringify(newState));
      return newState;

    case actionTypes.VACANCY_TOGGLE:
      var changedVacancies = newState.vacancies.map(vacancy => {
                                                               if (vacancy.id === action.payload.id)
                                                                 return { ...vacancy, completed: !vacancy.completed }
                                                               return vacancy;
                                                             });
      newState.vacancies = changedVacancies;
      return newState;
    case actionTypes.VACANCY_REMOVE:
      //TODO: add rest request
      console.log("reduserVacancy.js: soFetch delete and get new list vacancies");
      var filtered = newState.vacancies.filter(vacancy => action.payload.id !== vacancy.id)
      console.log(filtered);
      newState.vacancies = filtered;
      return newState;

    case actionTypes.SHOW_NEW_VACANCY_DLG:
      console.log("actionTypes.SHOW_NEW_VACANCY_DLG="+JSON.stringify(action));
      newState.visibleNewVacancyDlg = action.payload;
      return newState;

    default:
      return state;
  } // switch
}