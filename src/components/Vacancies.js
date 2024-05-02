import React from 'react';
import { Col, Row } from "react-bootstrap";

import VacanciesHeader from "./VacanciesHeader";
import VacancyList from "./VacancyList";

const Vacancies = ({ vacancies }) => {
  return (
      <div>
          <VacanciesHeader />
          <Row>
            <Col xs={12}>
              <VacancyList vacancies={ vacancies } />
            </Col>
          </Row>
      </div>
  )

}

export default Vacancies;