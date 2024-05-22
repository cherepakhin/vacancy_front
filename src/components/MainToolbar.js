import React, { useState } from 'react';
import { Col, Row, Button } from "react-bootstrap";
import * as actions from "../actions/actions";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const MainToolbar = (props) => {
  console.log("props");
  console.log(props);
  const [visibleEditVacancyDlg, setVisibleEditVacancyDlg] = useState(false);
  const dispatch = useDispatch();
  let captionVisible = false;

  const handleShowDialogEditVacancy = (e) => {
      console.log("visibleEditVacancyDlg: " + visibleEditVacancyDlg);
//      setVisibleNewVacancyDlg(!visibleNewVacancyDlg); // work local, other component don't see state

//    console.log("MainToolbar.js. showDialogNewVacancy:");
//    console.log(e);
//    setShowDialogNewVacancy(true); // setting state variable will after exit from function

//    console.log(visibleNewVacancyDlg);
    let visibleEditVacancyDlgAction = actions.createVisibleEditVacancyDlgAction(visibleEditVacancyDlg);
    console.log(visibleEditVacancyDlgAction); // work! {"type": "SHOW_NEW_VACANCY_DLG","payload": {"visible": false}}
    dispatch(visibleEditVacancyDlgAction);
  }

  const testMethod = () => {
    return "test";
  }

  const getTitle = () => {
    // console.log(this); // undefined
//     console.log(this.app);
//     console.log(app); // error
    // console.log(this.props); // error
    // console.log(caption); // not work SWITCH! always only "Show"
    // console.log(this); // undefined
    // console.log(props); // undefined
    // console.log(state); // undefined
//    console.log(visibleNewVacancyDlg); // Don't delete console.log. OK. log: false
//    console.log(props); //Don't delete console.log. OK in connect. log: {"vacancies": [{"completed": false,"id": -1,"title": "не показывать -1"}],"visibleNewVacancyDlg": false}
//    console.log(props.visibleNewVacancyDlg); // Don't delete console.log. OK in connect, in prod. log: false
    let caption = props.visibleEditVacancyDlg ? "Dlg open" : "Dlg close";
//    return captionVisible? "Hide" : "Show";
    return caption;

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
        <Button className="mr-1 col-md-1 col-sm-2 w-12ch">Все</Button>
        <Button className="mr-1 col-md-1 col-sm-2 w-12ch">Текущие</Button>
        <Button className="mr-1 col-md-1 col-sm-2 w-12ch" onClick={handleShowDialogEditVacancy}>Новая</Button>
        <Button className="mr-1 col-md-1 col-sm-2 w-12ch">Найти</Button>
        <Button className="mr-1 col-md-1 col-sm-2 w-12ch">{getTitle()}</Button>
      </Col>
    </Row>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const mapStateToProps = (state) => {
    // work! show full state
    // for visibleNewVacancyDlg=false
    // MainToolBar. state.vacancies: {"vacancies":[{"completed":false,"id":-1,"title":"не показывать -1"}],"visibleNewVacancyDlg":false}
    // for visibleNewVacancyDlg=true
    // MainToolBar. state.vacancies: {"vacancies":[{"completed":false,"id":-1,"title":"не показывать -1"}],"visibleNewVacancyDlg":true}
    // state={"vacancies":[{"completed":false,"id":-1,"title":"не показывать -1"}],"visibleNewVacancyDlg":true}
    console.log("MainToolBar. state: " + JSON.stringify(state));
    const app = {...state};
//    console.log(app); // work! {vacancies: [...], visibleNewVacancyDlg: false}
//    console.log(app.visibleNewVacancyDlg); // work! log: false
    return app;
//    return {
//        // "vacanciesFromState:" внутри компонета доступно через this.props.app.vacancies
//        // Доступен весь state. На пример: state.VACANCIES доступен через this.props.app.VACANCIES (__THIS.PROPS__!!!)
//        app: {...state},
//        // так будет доступно через <Vacancies vacancies={this.props.vacancies} />
////        vacancies: state.vacancies,
////        visibleNewVacancyDlg: state.visibleNewVacancyDlg
//    }
}

let MainToolbarConnect = connect(mapStateToProps, mapDispatchToProps)(MainToolbar);

export { MainToolbarConnect as MainToolbarConnect };
export { MainToolbar as MainToolbar }; // for testing
