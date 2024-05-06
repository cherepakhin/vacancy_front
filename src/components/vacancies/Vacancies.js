import React from 'react';
import { Col, Row } from "react-bootstrap";

import VacanciesHeader from "./VacanciesHeader";
import VacancyList from "./VacancyList";

const Vacancies = ({ vacancies }) => {
  console.log(vacancies); // {vacancies: [{id, ...},{id, ...}]}
  console.log(vacancies[0]); // {"id": -1, "title": "не показывать -1", "completed": false}
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