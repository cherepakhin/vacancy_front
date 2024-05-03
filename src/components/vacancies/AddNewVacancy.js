import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from "react-bootstrap";
import * as actions from "../../actions/actions";
import { useDispatch } from "react-redux";

const AddNewVacancy = () => {
// Вызовите useState на верхнем уровне вашего компонента, чтобы объявить переменную состояния.
  const [vacancyTitle, setVacancyTitle] = useState('-'); // '-' - значение по умолчанию
  const dispatch = useDispatch();

  const handleVacancyTitleChange = (e) => {
    setVacancyTitle(e.target.value);
  }

  const handleVacancySubmit = () => {
// Variant 1. WORKED!
//    dispatch(actions.addTask({
//      title: taskTitle
//    }));

// Variant 2. WORKED!
    let addVacancyAction = actions.createAddVacancyAction({ title: vacancyTitle});
// actionAddTask:
//   type: actions.TASK_ADD,
//   payload: taskTitle

    dispatch(addVacancyAction);
    setVacancyTitle('');
  }

  return (
    <InputGroup className="mb-2 ml-0">
      <FormControl placeholder="Название новой вакансии" value={vacancyTitle} onChange={e => handleVacancyTitleChange(e)} />
      <InputGroup.Append>
        <Button onClick={handleVacancySubmit}>Сохранить</Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default AddNewVacancy;