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
        <Modal.Body id="body">{"id: "+vacancy.id+", title: '"+vacancy.title}</Modal.Body>
        <Modal.Footer>
            <Button id="ok" className="col-2 text-center" variant="primary" onClick={handleClose}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
  );

}

AboutVacancyDlg.propTypes = {
  vacancy: PropTypes.object.isRequired,
  fnClose: PropTypes.func.isRequired,
}

export default AboutVacancyDlg;