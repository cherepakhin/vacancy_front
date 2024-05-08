import React, { useState } from 'react';
import { Col, Row, Button } from "react-bootstrap";
import * as actions from "../actions/actions";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const MainToolbar = () => {

  const [visibleNewVacancyDlg, setVisibleNewVacancyDlg] = useState(false);
  const dispatch = useDispatch();

  console.log(visibleNewVacancyDlg);

  const handleShowDialogNewVacancy = (e) => {
      console.log("visibleNewVacancyDlg: " + visibleNewVacancyDlg);
//      setVisibleNewVacancyDlg(!visibleNewVacancyDlg); // work local, other component don't see state

//    console.log("MainToolbar.js. showDialogNewVacancy:");
//    console.log(e);
//    setShowDialogNewVacancy(true); // setting state variable will after exit from function

//    console.log(visibleNewVacancyDlg);
    let visibleNewVacancyDlgAction = actions.createVisibleNewVacancyDlgAction(visibleNewVacancyDlg);
    console.log(visibleNewVacancyDlgAction);
    dispatch(visibleNewVacancyDlgAction);
  }

  const getTitle = () => {
    console.log(visibleNewVacancyDlg);
    return visibleNewVacancyDlg ? "Hide" : "Show";
  }

  return (
    <Row className="fixed-top mt-0 md-1 pd-1 pl-0 ml-0 bg-light table-bordered">
    {/* className="fixed-top" - row fixed on TOP PAGE  */}
    {/* "mt-0 md-1 ml-0" - margin top, margin bottom, margin left */}
    {/* "pd-1 pl-0" - padding down, padding left */}
      {/* xs={12} одна колонка во всю ширину экрана(12). */}
      {/* Отступ элементов внутри колонки сверху(mt-2) и снизу (mb-2) = 8px */}
      <Col xs={12} className="mt-2 mb-2">
        {/* col-md-1 col-sm-2 все кнопки имеют одинаковую ширину */}
        {/* col-md-1 width on middle device = 1 column,*/}
        {/* col-sm-2 width on small device = 2 columns*/}
        {/* mr-1 отступ справа внутри колонки margin right = 1 (1 char 'x') */}
        <Button className="mr-1 col-md-1 col-sm-2">Все</Button>
        <Button className="mr-1 col-md-1 col-sm-2">Текущие</Button>
        <Button className="mr-1 col-md-1 col-sm-2" onClick={handleShowDialogNewVacancy}>Новая</Button>
        <Button className="mr-1 col-md-1 col-sm-2">Фильтр</Button>
        <Button className="mr-1 col-md-1 col-sm-2">{getTitle()}</Button>
      </Col>
    </Row>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const mapStateToProps = (state) => {
    console.log("MainToolBar. state.vacancies: " + JSON.stringify(state)); // App. state.vacancies: {"vacancies":[{"completed":false,"id":-1,"title":"не показывать -1"}]}
    return {
        // "vacanciesFromState:" внутри компонета доступно через this.props.app.vacancies
        // Доступен весь state. На пример: state.VACANCIES доступен через this.props.app.VACANCIES (__THIS.PROPS__!!!)
        app: state,
        // так будет доступно через <Vacancies vacancies={this.props.vacancies} />
//        vacancies: state.vacancies,
//        visibleNewVacancyDlg: state.visibleNewVacancyDlg
    }
}

var MainToolbarConnect = connect(mapStateToProps, mapDispatchToProps)(MainToolbar);

export { MainToolbarConnect as MainToolbarConnect };
export { MainToolbar as MainToolbar }; // for testing
