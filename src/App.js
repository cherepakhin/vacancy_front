import React from 'react';
import { Container } from "react-bootstrap";
import MainToolbar from "./components/MainToolbar";
import NewVacancyPanel from "./components/NewVacancyPanel";
import Vacancies from "./components/vacancies/Vacancies";
//import { useSelector } from "react-redux";
import './App.css';
import { connect } from "react-redux";

class App extends React.Component { // receives props from index.js
//  const vacanciesFromState = useSelector(state => state.vacancies);
//  console.log("App props:");
//  console.log(props);
//  console.log("App props.vacancies:");
//  console.log(props.vacancies);
//  console.log("App vacanciesFromState:");
//  console.log(vacanciesFromState);
  render() {
      console.log("App.render() this:");
      console.log(this);
      console.log("App.render() this.props.vacancies:");
      console.log(this.props.props.vacancies);
      return (
        //  "md-0" Margin Down (mD!) (https://react-bootstrap.github.io/docs/layout/grid)
        // this is comment OUTside Component. For comment INside Component see below.
        <Container fluid className="md-0 pt-0 main-app-container bg-light">
          <MainToolbar />
          <NewVacancyPanel /> {/* TODO: remove to dialog for new vacancy */}
          <Vacancies vacancies={this.props.props.vacancies} />  {/* TODO: remove to dialog for new vacancy */}
        </Container>
      );
  }
}

function mapStateToProps(state) { // перенос из state в this.props....
    console.log("App. mapStateToProps:"+JSON.stringify(state)); // App. mapStateToProps:{"vacancies":[{"completed":false,"id":-1,"title":"не показывать -1"}]}
    console.log("App. state.vacancies:"+JSON.stringify(state)); // App. state.vacancies:[{"completed":false,"id":-1,"title":"не показывать -1"}]
    return {
        props: state // "vacanciesFromState:" внутри компонета доступно через this.props.vacancies
    }
}

function mapDispatchToProps(dispatch) {
  return {
//TODO: add actions here
// actions: bindActionCreators(actions, dispatch)
// or
//    setYearFunction: valYearProp => {
//          dispatch(setYearAction(valYearProp))
//          }
  }
}

var AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppConnected;