import React from 'react';
import { ListGroup } from "react-bootstrap";
import Vacancy from './Vacancy';

const VacancyList = ({ vacancies }) => {

  if (vacancies.length)
    return (
      <ListGroup>
        {
          vacancies.map(vacancy => <Vacancy key={vacancy.id} vacancy={vacancy} />)
        }
      </ListGroup>
    )
  else return null;
}

//TODO: Add PropTypes for vacancies array
//VacancyList.propTypes = {
//    vacancies: React.PropTypes.arrayOf(React.PropTypes.object)
//}

VacancyList.defaultProps = {
    vacancies: [],
}

export default VacancyList;