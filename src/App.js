import React from 'react';
import { Container } from "react-bootstrap";
import MainToolbar from "./components/MainToolbar";
import NewVacancyPanel from "./components/NewVacancyPanel";
import Vacancies from "./components/vacancies/Vacancies";
import { useSelector } from "react-redux";
import './App.css';
import { connect } from "react-redux";

function App(props) { // receives props from index.js

  const vacanciesFromState = useSelector(state => state.vacancies);
  console.log("App props:");
  console.log(props);
  console.log("App vacanciesFromState:");
  console.log(vacanciesFromState);
  return (
    //  "md-0" Margin Down (mD!) (https://react-bootstrap.github.io/docs/layout/grid)
    // this is comment OUTside Component. For comment INside Component see below.
    <Container fluid className="md-0 pt-0 main-app-container bg-light">
      <MainToolbar />
      <NewVacancyPanel /> {/* TODO: remove to dialog for new vacancy */}
      <Vacancies vacancies={vacanciesFromState} />
    </Container>
  );
}

function mapStateToProps(state) { // перенос из state в this.props....
    return {
        props: state // "year:" внутри компонета доступно через this.props.year
    }
}

function mapDispatchToProps(dispatch) {
  return {
//    setYearFunction: valYearProp => {
//          dispatch(setYearAction(valYearProp))
//          }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
