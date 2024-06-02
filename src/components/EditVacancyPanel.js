import React from 'react';
import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import EditVacancyDlg from "./vacancies/EditVacancyDlg";

// Param:
// props.visible - true/false to show/hide panel
// props.vacancy - vacancy for editing
const EditVacancyPanel = (props) => {
    console.log(props.vacancy);
    return (
      <Row id="idEditVacancyPanel" className="mt-2 md-0 pt-5 pl-0 pd-0">    {/* "mt-4"  top margin (https://react-bootstrap.github.io/docs/layout/grid)*/}
        {/* <Col xs={6} className="d-none">
        add className="d-none" for hide on all screens
        or .d-{sm,md,lg,xl,xxl}-none for hide on xs, sm, md, lg, xl, xxl screens
        (https://getbootstrap.com/docs/5.1/utilities/display/) */}
        <Col id="colEditVacancyPanel" xs={12} className={props.visible? "" : "d-none"}>           {/* className={props.show.visible? "" : "d-none"} add className="d-none" for hide, xs={6} 10 cells (https://react-bootstrap.github.io/docs/layout/grid)*/}
          <h4 id="headerEditVacancyPanel">{props.vacancy.id === -1 ? "Добавить вакансию" : "Изменить вакансию"}</h4>
          <EditVacancyDlg vacancy={props.vacancy} />
        </Col>
      </Row>
    )
}

EditVacancyPanel.propTypes = {
    vacancy: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            company: PropTypes.string.isRequired,
            date_created: PropTypes.string.isRequired,
            date_changed: PropTypes.string.isRequired,
            source: PropTypes.string.isRequired,
            contact: PropTypes.string.isRequired,
            comment: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
  }).isRequired
}

export default EditVacancyPanel;