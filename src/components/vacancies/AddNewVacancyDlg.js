import React, { useState } from 'react';
import { Button, FormControl } from "react-bootstrap";
import * as actions from "../../actions/actions";
import { useDispatch } from "react-redux";

const AddNewVacancyDlg = () => {
// Вызовите useState на верхнем уровне вашего компонента, чтобы объявить переменную состояния.
  const [vacancyTitle, setVacancyTitle] = useState(''); // '' - значение по умолчанию, описание вакансии
  const [vacancyCompany, setVacancyCompany] = useState(''); // компания
  const [vacancySource, setVacancySource] = useState(''); // источник вакансии (сайт)
  const [vacancyContact, setVacancyContact] = useState(''); // контакт(tel, email, telegram,...)
  const [vacancyComment, setVacancyComment] = useState(''); // комментарий
  const dispatch = useDispatch();

  const handleVacancyTitleChange = (e) => {
    setVacancyTitle(e.target.value);
  }

  const handleVacancyCompanyChange = (e) => {
    setVacancyCompany(e.target.value);
  }

  const handleVacancySourceChange = (e) => {
    setVacancySource(e.target.value);
  }

  const handleVacancyContactChange = (e) => {
    setVacancyContact(e.target.value);
  }

  const handleVacancyCommentChange = (e) => {
    setVacancyComment(e.target.value);
  }

  const handleVacancySubmit = () => {
// Variant 1. WORKED!
//    dispatch(actions.addTask({
//      title: taskTitle
//    }));

// Variant 2. WORKED! копируются значения из формы в объект vacancy
// значения полей в переменных с префиксом vacancy.
// Переменные с префиксом vacancy.. нужны для того, чтобы заполнить значения в форме
    let newVacancy = {
        title: vacancyTitle,
        company: vacancyCompany,
        source: vacancySource,
        contact: vacancyContact,
        comment: vacancyComment,
        completed: false
        };
    let addVacancyAction = actions.createAddVacancyAction(newVacancy);
//NOTE: don't delete comment
// actionAddTask:
//   type: actions.TASK_ADD,
//   payload: taskTitle

    dispatch(addVacancyAction);
    setVacancyTitle('');
  }

  const handleVacancyCancel = () => {
    let hideVacancyDlgAction = actions.createHideNewVacancyDlgAction();
    dispatch(hideVacancyDlgAction);
  }

  return (
    <div>
      <div className="mb-2 ml-0">
        <FormControl id="vacancyTitle" placeholder="Название новой вакансии"
          value={vacancyTitle} onChange={e => handleVacancyTitleChange(e)} />
        <FormControl id="vacancyCompany" className="mt-2" placeholder="Компания"
          value={vacancyCompany} onChange={e => handleVacancyCompanyChange(e)} />
        <FormControl id="vacancySource" className="mt-2" placeholder="Источник вакансии (н.п. ссылка на сайт)"
          value={vacancySource} onChange={e => handleVacancySourceChange(e)} />
        <FormControl id="vacancyContact" className="mt-2" placeholder="Контакты (ФИО, telegram, email, телефон)"
          value={vacancyContact} onChange={e => handleVacancyContactChange(e)} />
        <FormControl id="vacancyComment" className="mt-2" placeholder="Дополнительная информация"
          value={vacancyComment} onChange={e => handleVacancyCommentChange(e)} />
      </div>
      <Button className="mr-0 col-md-1 col-sm-2 float-end" onClick={handleVacancySubmit}>Сохранить</Button>
      <Button className="mr-1 col-md-1 col-sm-2 float-end" onClick={handleVacancyCancel}>Отмена</Button>
    </div>
  )
}

export default AddNewVacancyDlg;