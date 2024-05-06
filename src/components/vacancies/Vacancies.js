import React from 'react';
import { Col, Row } from "react-bootstrap";

import VacanciesHeader from "./VacanciesHeader";
import VacancyList from "./VacancyList";

const Vacancies = ({ vacancies }) => {
  console.log(vacancies);
  console.log(vacancies[0]);
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

//Vacancies.defaultProps = {
//    vacancies: [],
//}

export default Vacancies;