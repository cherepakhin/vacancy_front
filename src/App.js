import React from 'react';
import { Container, Col, Row, Button } from "react-bootstrap";
import VacancyList from "./components/VacancyList";
import AddNewVacancy from "./components/AddNewVacancy";
import { useSelector } from "react-redux";
import './App.css';

function App() {

  const vacancies = useSelector(state => state);

  return (
    <Container fluid className="md-0 pt-0 main-app-container bg-light"> {/*  "ml-4" Margin Left (ml!) (https://react-bootstrap.github.io/docs/layout/grid)*/}
      <Row className="fixed-top mt-0 md-1 pd-1 pl-0 ml-0 bg-light table-bordered">
        <Col xs={12} className="mt-2 mb-2">
            <Button className="ml-0 pl-0 pr-0 col-1">Все</Button>
            <Button className="ml-1 pl-0 pr-0 col-1">Текущие</Button>
            <Button className="ml-1 pl-0 pr-0 col-1">Новая</Button>
        </Col>
      </Row>
      <Row className="mt-2 md-0 pt-5 pl-0 pd-0">    {/* "mt-4"  top margin (https://react-bootstrap.github.io/docs/layout/grid)*/}
        <Col xs={6}>           {/* xs={6} 10 cells (https://react-bootstrap.github.io/docs/layout/grid)*/}
          <h4>Новая вакансия</h4>
          <AddNewVacancy />
        </Col>
      </Row>
      <Row className="mt-0 pt-0">
        <Col>
          <h4>Список вакансий</h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <VacancyList vacancies={ vacancies } />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
