import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, ListGroup, Modal, Button } from "react-bootstrap";
import { createToggleVacancyAction, }  from "../store/actions";

import DeleteConfirmDlg from "./DeleteConfirmDlg";
import Vacancy0NotDeleteDlg from "./Vacancy0NotDeleteDlg";

import PropTypes from "prop-types";
import * as actions from "../store/actions";

const Vacancy = ({ vacancy }) => {
// for testing use props uncomment
//  console.log("props=", task);
  const { id, title, completed } = {...vacancy};
  const dispatch = useDispatch();

  const [visibleMoreDlg, setVisibleMoreDlg] = useState(false);
  const [visibleDeleteConfirmDlg, setVisibleDeleteConfirmDlg] = useState(false);
  const [visibleVacancy0NotDeleteDlg, setVisibleVacancy0NotDeleteDlg] = useState(false);

// show more dialog
  const openMoreDlg= (id) => {
    setVisibleMoreDlg(true);
  }

  const closeMoreDlg = () => {
    setVisibleMoreDlg(false);
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
      <Modal show={visibleMoreDlg} className="rounded-0">
        <Modal.Header closeButton>
          <Modal.Title>Подробнее о вакансии</Modal.Title>
        </Modal.Header>
        <Modal.Body>{"JSON: {id: "+id+", title: '"+title+"'}"}</Modal.Body>
        <Modal.Footer>
            <Button className="col-2" variant="primary" onClick={closeMoreDlg}>Закрыть</Button>
        </Modal.Footer>
      </Modal>

      <DeleteConfirmDlg id={id} title={title} visible={visibleDeleteConfirmDlg}
        fnVacancyDeleteConfirm={(id) => confirmDeleteConfirmDlg(id)}
        fnVacancyDeleteCancel={cancelDeleteConfirmDlg}
      />

      <Vacancy0NotDeleteDlg visible={visibleVacancy0NotDeleteDlg}
        fnVacancy0NotDeleteDlgClose={closeVacancy0NotDeleteDlg}
      />

      <Form.Check
        id={id}
        type="checkbox"
        label={id+". "+title}
        checked={completed}
        onChange={ () => dispatch(createToggleVacancyAction(id)) }
        title="title Form.Check"
        className="col-9"
      />
      <div
        id="idMoreBtn"
        className="col-2 list-group-item-actions list-group-item-actions-right"
        title="Подробнее о вакансии">
        <span onClick={() => openMoreDlg(id)} tabIndex={0} role="button">Подробнее</span>
      </div>
      <div
        id="idDeleteBtn"
        className="col-1 list-group-item-actions list-group-item-actions-right"
        title="Удалить вакансию">
        <span onClick={() => openDeleteConfirmDlg(id)} tabIndex={-1} role="button">Удалить</span>
      </div>
    </ListGroup.Item>
  )
}

Vacancy.propTypes = {
    vacancy: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
  }).isRequired
}

export default Vacancy;