import React from 'react';
import { Container, Col, Row, Button } from "react-bootstrap";
import VacancyList from "./components/VacancyList";
import AddNewVacancy from "./components/AddNewVacancy";
import { useSelector } from "react-redux";
import './App.css';

function App() {

  const vacancies = useSelector(state => state);

  return (
    //  "ml-4" Margin Left (ml!) (https://react-bootstrap.github.io/docs/layout/grid)
    // (comment OUTside Component)
    <Container fluid className="md-0 pt-0 main-app-container bg-light">
      {/* Toolbar (comment INside Component)*/}
      {/* Row зафиксирован сверху экрана (fixed-top) */}
      <Row className="fixed-top mt-0 md-1 pd-1 pl-0 ml-0 bg-light table-bordered">
        {/* Одна колонка во всю ширину экрана (xs=12).*/}
        {/* Отступ элементов внутри колонки сверху и снизу (mt-2 mb-2) = 8px */}
        <Col xs={12} className="mt-2 mb-2">
            {/* все кнопки имеют одинаковую ширину */}
            {/* on middle device 1 column(col-md-1),*/}
            {/* on small device 2 columns(col-sm-2)*/}
            {/* для первой колонки отступ СЛЕВА =0, для остальных ml-1 */}
            <Button className="ml-0 mr-0 col-md-1 col-sm-2">Все</Button>
            {/* ml-1 margin left = 1 (1 char 'x') */}
            <Button className="mr-1 col-md-1 col-sm-2">Текущие</Button>
            <Button className="mr-1 col-md-1 col-sm-2">Новая</Button>
            <Button className="mr-1 col-md-1 col-sm-2">Фильтр</Button>
        </Col>
      </Row>
      {/*TODO: убрать это поле */}
      {/*TODO: для ввода вакансий нужен отдельный НЕ МОДАЛЬНЫЙ диалог. В модальный не влезет. */}
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
