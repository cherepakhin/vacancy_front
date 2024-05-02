import React from 'react';
import { Container, Col, Row, Button } from "react-bootstrap";
import VacancyList from "./components/VacancyList";
import AddNewVacancy from "./components/AddNewVacancy";
import { useSelector } from "react-redux";
import './App.css';

function App() {

  const vacancies = useSelector(state => state);

  return (
    //  "ml-4" Margin Left (mL!) (https://react-bootstrap.github.io/docs/layout/grid)
    // this is comment OUTside Component. For comment INside Component see below.
    <Container fluid className="md-0 pt-0 main-app-container bg-light">
      {/* Toolbar (comment INside Component)*/}
      {/* Row fixed on TOP PAGE (fixed-top) */}
      <Row className="fixed-top mt-0 md-1 pd-1 pl-0 ml-0 bg-light table-bordered">
        {/* Одна колонка во всю ширину экрана (xs=12).*/}
        {/* Отступ элементов внутри колонки сверху(mt-2) и снизу (mb-2) = 8px */}
        <Col xs={12} className="mt-2 mb-2">
            {/* все кнопки имеют одинаковую ширину "col-md-1 col-sm-2" */}
            {/* on middle device 1 column(col-md-1),*/}
            {/* on small device 2 columns(col-sm-2)*/}
            {/* отступ элементов внутри колонки mr-1. margin right = 1 (1 char 'x') */}
            <Button className="mr-1 col-md-1 col-sm-2">Все</Button>
            <Button className="mr-1 col-md-1 col-sm-2">Текущие</Button>
            <Button className="mr-1 col-md-1 col-sm-2">Новая</Button>
            <Button className="mr-1 col-md-1 col-sm-2">Фильтр</Button>
        </Col>
      </Row>
      {/*TODO: для ввода вакансий нужна не просто строка, а отдельный НЕ МОДАЛЬНЫЙ диалог (в модальный не влезет). */}
      <Row className="mt-2 md-0 pt-5 pl-0 pd-0">    {/* "mt-4"  top margin (https://react-bootstrap.github.io/docs/layout/grid)*/}
        <Col xs={6}>           {/* xs={6} 10 cells (https://react-bootstrap.github.io/docs/layout/grid)*/}
          <h4>Новая вакансия</h4>
          <AddNewVacancy />
        </Col>
      </Row>
      <Row className="mt-0 pt-0">
        <Col>
          <h4 id="label_list_vacancies">Список вакансий</h4>
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
