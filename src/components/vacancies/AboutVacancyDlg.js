import React from "react";
import PropTypes from 'prop-types';
import { Modal, Button } from "react-bootstrap";

const AboutVacancyDlg = ({vacancy, visible, fnClose}) => {

  const handleClose = () => {
    fnClose();
  }

  return (
      <Modal show={visible} className="rounded-0">
        <Modal.Header closeButton>
          <Modal.Title id="header">О вакансии</Modal.Title>
        </Modal.Header>
        <Modal.Body id="body">
            <form>
              <div>
                <label><b>id: </b>{vacancy.id}</label><br/>
                <label><b>Должность: </b>{vacancy.title}</label>
                <label><b>Компания: </b>{vacancy.company}</label>
                <label><b>Источник: </b>{vacancy.source}</label>
                <label><b>Контакты: </b>{vacancy.contact}</label>
                <label><b>Комментарий: </b>{vacancy.comment}</label>
                <label><b>Отработана: </b>{vacancy.completed? "Да": "Нет"}</label>
              </div>
            </form>
        </Modal.Body>

        <Modal.Footer>
            <Button id="ok-button" className="col-3" variant="primary" onClick={handleClose}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
  );

}

AboutVacancyDlg.propTypes = {
  vacancy: PropTypes.object.isRequired,
  fnClose: PropTypes.func.isRequired,
}

export default AboutVacancyDlg;