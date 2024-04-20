import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import VacancyList from "./components/VacancyList";
import AddNewVacancy from "./components/AddNewVacancy";
import { useSelector } from "react-redux";
import './App.css';

function App() {

  const vacancies = useSelector(state => state);

  return (
    <Container className="main-app-container ml-4"> {/*  "ml-4" Margin Left (ml!) (https://react-bootstrap.github.io/docs/layout/grid)*/}
      <Row className="mt-4">    {/* "mt-4"  top margin (https://react-bootstrap.github.io/docs/layout/grid)*/}
        <Col xs={6}>           {/* xs={6} 10 cells (https://react-bootstrap.github.io/docs/layout/grid)*/}
          <h4>Новая вакансия</h4>
          <AddNewVacancy />
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Список вакансий</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <VacancyList vacancies={ vacancies } />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
