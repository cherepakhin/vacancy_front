import React from 'react';
import { Col, Row } from "react-bootstrap";
import AddNewVacancy from "./vacancies/AddNewVacancy";

// TODO: для ввода вакансий нужна не просто строка, а отдельный НЕ МОДАЛЬНЫЙ диалог (в модальный не влезет).
const NewVacancyPanel = (props) => {
    return (
      <Row id="idNewVacancyPanel" className="mt-2 md-0 pt-5 pl-0 pd-0">    {/* "mt-4"  top margin (https://react-bootstrap.github.io/docs/layout/grid)*/}
        {/* <Col xs={6} className="d-none">
        add className="d-none" for hide on all screens
        or .d-{sm,md,lg,xl,xxl}-none for hide on xs, sm, md, lg, xl, xxl screens
        (https://getbootstrap.com/docs/5.1/utilities/display/) */}
        <Col id="colNewVacancyPanel" xs={12} className={props.visible? "" : "d-none"}>           {/* className={props.show.visible? "" : "d-none"} add className="d-none" for hide, xs={6} 10 cells (https://react-bootstrap.github.io/docs/layout/grid)*/}
          <h4 id="headerNewVacancyPanel">Новая вакансия</h4>
          <AddNewVacancy />
        </Col>
      </Row>
    )
}

export default NewVacancyPanel;