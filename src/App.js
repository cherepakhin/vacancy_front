import React from 'react';
import { Container } from "react-bootstrap";
import { MainToolbarConnect as MainToolbar } from "./components/MainToolbar";
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
      // this.props. обязательно!!! this.vacancies не работает.
//      console.log(this.props.app.vacancies);
      console.log(this.props.vacancies);
      console.log(this.props);
      return (
        //  "md-0" Margin Down (mD!) (https://react-bootstrap.github.io/docs/layout/grid)
        // this is comment OUTside Component. For comment INside Component see below.
        // path for test appView.node.props.className
        // Attention:  access to props with __THIS.props.*__
        // <NewVacancyPanel visible={this.props.visibleNewVacancyDlg}/>

        <Container fluid className="md-0 pt-0 main-app-container bg-light">
          <MainToolbar />
          <NewVacancyPanel visible={this.props.visibleNewVacancyDlg}/>
          <Vacancies vacancies={this.props.vacancies} visible={!this.props.visibleNewVacancyDlg}/>
        </Container>
      );
  }
}

// перенос из state в this.props.
// В render() будет доступно через <Vacancies vacancies={this.props.app.vacancies}.
// __THIS.PROPS__!!! этот путь формируется по умолчанию функцией mapStateToProps
// __this.app.vacancies__!!! никак не делается
const mapStateToProps = (state) => {
    console.log("App. state.vacancies: " + JSON.stringify(state)); // App. state.vacancies: {"vacancies":[{"completed":false,"id":-1,"title":"не показывать -1"}]}
    return {
        // "vacanciesFromState:" внутри компонета доступно через this.props.app.vacancies
        // Доступен весь state. На пример: state.VACANCIES доступен через this.props.app.VACANCIES (__THIS.PROPS__!!!)
//        app: state,
        // так будет доступно через <Vacancies vacancies={this.props.vacancies} />
        vacancies: state.vacancies,
        visibleNewVacancyDlg: state.visibleNewVacancyDlg
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
//TODO: add actions here
// actions: bindActionCreators(actions, dispatch)
// or
//    setYearFunction: valYearProp => {
//          dispatch(setYearAction(valYearProp))
//          }
  }
}

let AppConnect = connect(mapStateToProps, mapDispatchToProps)(App);

export { App as AppUnwrapped };

export { AppConnect as AppConnected };
