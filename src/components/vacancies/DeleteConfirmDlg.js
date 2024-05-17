import React from "react";
import PropTypes from 'prop-types';
import { Modal, Button } from "react-bootstrap";

// Этот диалог никак не связан с Redux.
// Присвоение параметров, управление видимостью и реакция на нажатие кнопок сделано снаружи в компоненте Task.js
const DeleteConfirmDlg = ({vacancy, visible, fnVacancyDeleteConfirm, fnVacancyDeleteCancel}) => {

  const handleCancel = () => {
    fnVacancyDeleteCancel(vacancy.id);
  }

  const handleConfirm = () => {
    fnVacancyDeleteConfirm(vacancy.id);
  }

  return (
      <Modal show={visible} className="rounded-0">
        <Modal.Header closeButton>
          <Modal.Title id="header">Удалить?</Modal.Title>
        </Modal.Header>
        <Modal.Body id="body">
            <form>
              <div>
                <label id="id"><b>id: </b>{vacancy.id}</label><br/>
                <label id="title"><b>Должность: </b>{vacancy.title}</label><br/>
                <label id="company"><b>Компания: </b>{vacancy.company}</label><br/>
                <label id="date_created"><b>Дата создания: </b>{vacancy.date_created}</label><br/>
                <label id="date_changed"><b>Дата изменения: </b>{vacancy.date_changed}</label><br/>
                <label id="source"><b>Источник: </b>{vacancy.source}</label><br/>
                <label id="contact"><b>Контакты: </b>{vacancy.contact}</label><br/>
                <label id="comment"><b>Комментарий: </b>{vacancy.comment}</label><br/>
                <label id="completed"><b>Отработана: </b>{vacancy.completed? "Да": "Нет"}</label>
              </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <Button id="ok" className="col-2 text-center" variant="primary" onClick={handleConfirm}>Да</Button>
            <Button id="cancel" className="col-2 text-center" variant="secondary" onClick={handleCancel}>Нет</Button>
        </Modal.Footer>
      </Modal>
  );

}

DeleteConfirmDlg.propTypes = {
  vacancy: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  fnVacancyDeleteConfirm: PropTypes.func.isRequired,
  fnVacancyDeleteCancel: PropTypes.func.isRequired
}

export default DeleteConfirmDlg;