import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, ListGroup } from "react-bootstrap";
import { createToggleVacancyAction }  from "../../actions/actions";

import AboutVacancyDlg from "./AboutVacancyDlg";
import DeleteConfirmDlg from "./DeleteConfirmDlg";
import Vacancy0NotDeleteDlg from "./Vacancy0NotDeleteDlg";

import PropTypes from "prop-types";
import * as actions from "../../actions/actions";

const Vacancy = ({ vacancy }) => {
// for testing use props uncomment
//  console.log("props=", task);
  const { id, title, company, source, contact, comment, completed } = {...vacancy};
  const dispatch = useDispatch();

  const [visibleAboutDlg, setVisibleAboutDlg] = useState(false);
  const [visibleDeleteConfirmDlg, setVisibleDeleteConfirmDlg] = useState(false);
  const [visibleVacancy0NotDeleteDlg, setVisibleVacancy0NotDeleteDlg] = useState(false);

  const showLastEvent = () => {
    console.log("showLastEvent");
  }

// show about dialog
  const openAboutDlg = () => {
    setVisibleAboutDlg(true);
  }

  const closeAboutDlg = () => {
    setVisibleAboutDlg(false);
  }

  const openDeleteConfirmDlg = (vacancyId) => {
    console.log("openDeleteConfirmDlg vacancyId=", vacancyId);
    if(vacancyId === -1) {
        console.log("try delete vacancy.id === -1");
        setVisibleVacancy0NotDeleteDlg(true);
        return
    }
    console.log(visibleDeleteConfirmDlg);
    console.log("before handleDeleteConfirmDlg task:");
    // в state устанавливается состояние диалога - visible=true через переменную visibleDeleteConfirmDlg.
    // из usestate() через переменную visibleDeleteConfirmDlg  приходит новое состояние,
    // видимость компоненты DeleteConfirmDlg "привязана" к переменной visibleDeleteConfirmDlg

    // DeleteConfirmDlg ничего не знает о Redux, store, state. ВСЕ управление  сделано в Task.js.

    // DeleteConfirmDlg ДОЛЖЕН БЫТЬ встроен в HTML(!!!) страницы Task.js.
    // и НЕ может существовать как совершенно независимый компонент (это не windows).
    setVisibleDeleteConfirmDlg(true);

    // Само удаление вакансии делать в этой компоненте (Vacancy.js), НЕ в диалоге.
    // КАК принять ответ от диалога? Через ПЕРЕДАЧУ функции удаления (handleVacancyDeleteConfirm) в диалог.
    //      <DeleteConfirmDlg id={id} title={title} visible={visibleDeleteConfirmDlg}
    //        fnVacancyDeleteConfirm={handleVacancyDeleteConfirm}
    //        fnVacancyDeleteCancel={handleVacancyDeleteCancel}
    //      />
  }

  const cancelDeleteConfirmDlg = () => {
    //TODO: delete console.log
    console.log("handleVacancyDeleteCancel" );
    setVisibleDeleteConfirmDlg(false);
  }

  const confirmDeleteConfirmDlg = (id) => {
    //TODO: delete console.log
    console.log("confirmDeleteConfirmDlg id=" + id);
    setVisibleDeleteConfirmDlg(false);
    // dispatch to REST API!!!
    dispatch(actions.createRemoveVacancyAction(id));
  }

  const closeVacancy0NotDeleteDlg = () => {
    setVisibleVacancy0NotDeleteDlg(false);
  }

  // MoreDlg - пример диалога, встроенного в компоненту Task.js
  // DeleteConfirmDlg.js - пример диалога в отдельной компоненте
  return (
    <ListGroup.Item className={completed && 'vacancy-completed'}>
      <AboutVacancyDlg vacancy={vacancy} visible={visibleAboutDlg}
        fnClose={closeAboutDlg}
      />

      <DeleteConfirmDlg id={id} title={title} visible={visibleDeleteConfirmDlg}
        fnVacancyDeleteConfirm={(id) => confirmDeleteConfirmDlg(id)}
        fnVacancyDeleteCancel={cancelDeleteConfirmDlg}
      />

      <Vacancy0NotDeleteDlg visible={visibleVacancy0NotDeleteDlg}
        fnVacancy0NotDeleteDlgClose={closeVacancy0NotDeleteDlg}
      />

      <div id="idLastEvent" className="col-1 list-group-item-date" title="Последнее событие">
        <span onClick={() => showLastEvent(id)} tabIndex={0} role="button">26.04.2023 </span>
      </div>

      <Form.Check
        id={id}
        type="checkbox"
        label={id+". "+company+". "+title}
        checked={completed}
        onChange={ () => dispatch(createToggleVacancyAction(id)) }
        title={"title Form.Check id="+id + " " + ((completed ? "Отработана":"Не отработана"))}
      />

      <div id="idAboutBtn" className="col-1 list-group-item-action" title="Подробнее о вакансии">
        <span onClick={() => openAboutDlg()} tabIndex={0} role="button">Подробнее</span>
      </div>

      <div id="idDeleteBtn" className="col-1 list-group-item-action list-group-item-action-last" title="Удалить вакансию">
        <span onClick={() => openDeleteConfirmDlg(id)} tabIndex={-1} role="button">Удалить</span>
      </div>

    </ListGroup.Item>
  )
}

Vacancy.propTypes = {
    vacancy: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            company: PropTypes.string.isRequired,
            source: PropTypes.string.isRequired,
            contact: PropTypes.string.isRequired,
            comment: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
  }).isRequired
}

export default Vacancy;