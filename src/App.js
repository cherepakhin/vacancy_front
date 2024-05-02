import React from 'react';
import { Container } from "react-bootstrap";
import MainToolbar from "./components/MainToolbar";
import NewVacancyPanel from "./components/NewVacancyPanel";
import Vacancies from "./components/Vacancies";
import { useSelector } from "react-redux";
import './App.css';

function App() {

  const vacancies = useSelector(state => state);

  return (
    //  "md-0" Margin Down (mD!) (https://react-bootstrap.github.io/docs/layout/grid)
    // this is comment OUTside Component. For comment INside Component see below.
    <Container fluid className="md-0 pt-0 main-app-container bg-light">
      <MainToolbar />
      <NewVacancyPanel />
      <Vacancies vacancies={vacancies} />
    </Container>
  );
}

export default App;
