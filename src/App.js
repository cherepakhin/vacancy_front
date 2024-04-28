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
      <Row className="fixed-top mt-0 ml-1 bg-light">
        <Col xs={12} className="mt-2">
            <Button className="w-15">Новая</Button>
            <Button className="ml-1 w-15">Список</Button>
            <Button className="ml-1 w-15">В работе</Button>
        </Col>
      </Row>
      <Row className="mt-1 pt-5 pl-1">    {/* "mt-4"  top margin (https://react-bootstrap.github.io/docs/layout/grid)*/}
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
        <Col xs={12}>
          <VacancyList vacancies={ vacancies } />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
