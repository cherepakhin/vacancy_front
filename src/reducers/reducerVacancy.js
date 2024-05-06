import * as actionTypes from '../actions/actionTypes';

let state0 = {vacancies: [
               {"completed": false, "id": -1, "title": "не показывать -1"},
             ]};

let lastId = 1; //TODO: get from backend

export default function reducerVacancy(state = state0, action) {
  console.log("reduserVacancy.js: BEFORE state:");
  console.log(state);
  console.log("reduserVacancy.js action:");
  console.log(action);
  if(action === undefined) {
    console.log("undefined action in reducerVacancy.js");
    return {...state};
  }
  switch (action.type) {
    case actionTypes.VACANCY_ADD:
      //TODO: add rest request
      //TODO: and refresh all vacancies

      // Пример простого добавление задачи в state из action.payload
      // ТУТ делается изменение state
      let newState = {...state};
      newState.vacancies.push({
                                id: ++lastId,
                                title: action.payload.title,
                                completed: false,
                              });
      console.log("newState-->"+ JSON.stringify(newState));
      return newState;

    case actionTypes.VACANCY_TOGGLE:
      return state.vacancies.map(vacancy => {
        if (vacancy.id === action.payload.id)
          return { ...vacancy, completed: !vacancy.completed }
        return vacancy;
      });

    case actionTypes.VACANCY_REMOVE:
      //TODO: add rest request
      console.log("soFetch delete and get new list vacancies");
      return state.vacancies.filter(vacancy => action.payload.id !== vacancy.id);

    default:
      return state;
  } // switch
}