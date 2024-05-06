import * as actionTypes from '../actions/actionTypes';

let state0 = [
               {"completed": false, "id": -1, "title": "не показывать -1"},
               {"completed": false, "id": -2, "title": "не показывать -2"},
               {"completed": false, "id": -3, "title": "не показывать -3"}
             ];

let lastId = 1; //TODO: get from backend

export default function reducerVacancy(state = state0, action) {
  console.log("reduserVacancy.js: BEFORE state:");
  console.log(state);
  console.log("reduserVacancy.js action: " + action);
  if(action === undefined) {
    console.log("undefined action in reducerVacancy.js");
    return [...state];
  }
  switch (action.type) {
    case actionTypes.VACANCY_ADD:
      //TODO: add rest request
      //TODO: and refresh all vacancies

      // Пример простого добавление задачи в state из action.payload
      // ТУТ делается изменение state
      return [...state, {
        id: ++lastId,
        title: action.payload.title,
        completed: false,
      }];

    case actionTypes.VACANCY_TOGGLE:
      return state.map(vacancy => {
        if (vacancy.id === action.payload.id)
          return { ...vacancy, completed: !vacancy.completed }
        return vacancy;
      });

    case actionTypes.VACANCY_REMOVE:
      //TODO: add rest request
      console.log("soFetch delete and get new list vacancies");
      return state.filter(vacancy => action.payload.id !== vacancy.id);

    default:
      return state;
  } // switch
}