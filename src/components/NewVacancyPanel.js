import React from 'react';
import { Col, Row } from "react-bootstrap";
import AddNewVacancy from "./vacancies/AddNewVacancy";

// TODO: для ввода вакансий нужна не просто строка, а отдельный НЕ МОДАЛЬНЫЙ диалог (в модальный не влезет).
const NewVacancyPanel = () => {
    return (
      <Row className="mt-2 md-0 pt-5 pl-0 pd-0">    {/* "mt-4"  top margin (https://react-bootstrap.github.io/docs/layout/grid)*/}
        <Col xs={6}>           {/* xs={6} 10 cells (https://react-bootstrap.github.io/docs/layout/grid)*/}
          <h4>Новая вакансия</h4>
          <AddNewVacancy />
        </Col>
      </Row>
    )
}

export default NewVacancyPanel;