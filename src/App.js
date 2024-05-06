import React from 'react';
import { Container } from "react-bootstrap";
import MainToolbar from "./components/MainToolbar";
import NewVacancyPanel from "./components/NewVacancyPanel";
import Vacancies from "./components/vacancies/Vacancies";
import { useSelector } from "react-redux";
import './App.css';

function App(props) { // receives props from index.js

  const vacancies = useSelector(state => state.vacancies);
  console.log("App props:");
  console.log(props);
  console.log("App vacancies from state.vacancies:");
  console.log(vacancies);
  return (
    //  "md-0" Margin Down (mD!) (https://react-bootstrap.github.io/docs/layout/grid)
    // this is comment OUTside Component. For comment INside Component see below.
    <Container fluid className="md-0 pt-0 main-app-container bg-light">
      <MainToolbar />
      <NewVacancyPanel /> {/* TODO: remove to dialog for new vacancy */}
      <Vacancies vacancies={vacancies} />
    </Container>
  );
}

export default App;
