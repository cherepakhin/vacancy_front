import { createStore } from 'redux';
import reducerVacancy from "../reducers/reducerVacancy";

const store = createStore(
  reducerVacancy,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;