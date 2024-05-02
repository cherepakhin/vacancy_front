import React from 'react';
import { Col, Row } from "react-bootstrap";

const VacanciesHeader = () => {
    return (
      <Row className="mt-0 pt-0">
        <Col>
          <h4 id="label_list_vacancies">Список вакансий</h4>
        </Col>
      </Row>
    )
}

export default VacanciesHeader;