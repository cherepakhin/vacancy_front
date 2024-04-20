import React from 'react';
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

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

VacancyList.propTypes = {
    vacancies: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
    }))
}

VacancyList.defaultProps = {
    vacancies: [],
}

export default VacancyList;