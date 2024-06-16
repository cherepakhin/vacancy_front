import React, { useState } from 'react';
import { Button, FormControl } from "react-bootstrap";
import * as actions from "../../actions/actions";
import { useDispatch } from "react-redux";

const EditVacancyDlg = (props) => {
    console.log(props);
    console.log(props.vacancy);
// Вызовите useState на верхнем уровне вашего компонента, чтобы объявить переменную состояния.
// в компоненте используются только методы set... (setVacancyTitle, setVacancyCompany... и т.д.).
// Значения vacancyTitle, vacancyCompany и т.д. диалог получает из props, из redux .
// vacancyTitle, vacancyCompany и т.д. можно удалить
// или методы set... получать снаружи и, в таком случае, компонент будет отвязан от redux
  const [vacancyTitle, setVacancyTitle] = useState(''); // '' - значение по умолчанию, описание вакансии
  const [vacancyCompany, setVacancyCompany] = useState(''); // компания
  const [vacancySource, setVacancySource] = useState(''); // источник вакансии (сайт)
  const [vacancyContact, setVacancyContact] = useState(''); // контакт(tel, email, telegram,...)
  const [vacancyComment, setVacancyComment] = useState(''); // комментарий
  const dispatch = useDispatch();

  const handleVacancyTitleChange = (e) => {
    console.log(props.vacancy);
    props.vacancy.title = e.target.value;
    console.log(props.vacancy);
    setVacancyTitle(e.target.value);
  }

  const handleVacancyCompanyChange = (e) => {
    props.vacancy.company = e.target.value;
    setVacancyCompany(e.target.value);
  }

  const handleVacancySourceChange = (e) => {
    props.vacancy.source = e.target.value;
    setVacancySource(e.target.value);
  }

  const handleVacancyContactChange = (e) => {
    props.vacancy.contact = e.target.value;
    setVacancyContact(e.target.value);
//    setVacancyContact(e.target.value);
  }

  const handleVacancyCommentChange = (e) => {
    props.vacancy.comment = e.target.value;
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
    let changedVacancy = {
        id: props.vacancy.id,
        title: props.vacancy.title,
        company: props.vacancy.company,
        source: props.vacancy.source,
        contact: props.vacancy.contact,
        comment: props.vacancy.comment,
        completed: props.vacancy.completed
        };
    console.log("Save changedVacancy:");
    console.log(changedVacancy);
    let changedVacancyAction = actions.createSaveVacancyAction(changedVacancy);
//NOTE: don't delete comment
// actionAddTask:
//   type: actions.TASK_ADD,
//   payload: taskTitle

    dispatch(changedVacancyAction);
//    setVacancyTitle('');
  }

  const handleVacancyCancel = () => {
    let hideVacancyDlgAction = actions.createHideEditVacancyDlgAction();
    dispatch(hideVacancyDlgAction);
  }

  return (
    <div>
      <div className="mb-2 ml-0">
        <FormControl id="vacancyCompany" placeholder="Компания"
          value={props.vacancy.company} onChange={e => handleVacancyCompanyChange(e)} />
        <FormControl id="vacancyTitle" className="mt-2" placeholder="Название новой вакансии"
          value={props.vacancy.title} onChange={e => handleVacancyTitleChange(e)} />
        <FormControl id="vacancySource" className="mt-2" placeholder="Источник вакансии (н.п. ссылка на сайт)"
          value={props.vacancy.source} onChange={e => handleVacancySourceChange(e)} />
        <FormControl id="vacancyContact" className="mt-2" placeholder="Контакты (ФИО, telegram, email, телефон)"
          value={props.vacancy.contact} onChange={e => handleVacancyContactChange(e)} />
        <FormControl id="vacancyComment" className="mt-2" placeholder="Дополнительная информация"
          value={props.vacancy.comment} onChange={e => handleVacancyCommentChange(e)} />
      </div>
      <Button className="mr-1 col-md-1 col-sm-2 float-end w-12ch" onClick={handleVacancySubmit}>Сохранить</Button>
      <Button className="mr-1 col-md-1 col-sm-2 float-end w-12ch" onClick={handleVacancyCancel}>Отмена</Button>
    </div>
  )
}

export default EditVacancyDlg;