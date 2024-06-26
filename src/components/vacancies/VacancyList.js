import React from 'react';
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

import Vacancy from './Vacancy';

const VacancyList = ({ vacancies }) => {

  if (vacancies.length)
    return (
      <ListGroup id="vacancyList" xs={12}>
        {
          vacancies.map(vacancy => <Vacancy id={"vacancyId" + vacancy.id} key={vacancy.id} vacancy={vacancy} />)
        }
      </ListGroup>
    )
  else return <ListGroup/>;
}

VacancyList.propTypes = {
    vacancies: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            company: PropTypes.string.isRequired,
            date_created: PropTypes.string.isRequired,
            date_changed: PropTypes.string.isRequired,
            source: PropTypes.string.isRequired,
            contact: PropTypes.string.isRequired,
            comment: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
    }))
}

VacancyList.defaultProps = {
    vacancies: [],
}

export default VacancyList;