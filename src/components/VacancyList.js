import React from 'react';
import { ListGroup } from "react-bootstrap";
import Task from './Task';

const TaskList = ({ tasks }) => {

  if (tasks.length)
    return (
      <ListGroup>
        {
          tasks.map(task => <Task key={task.id} task={task} />)
// with console.log:
//          tasks.map(task => {
//            console.log("task:");
//            console.log(task);
//            return <Task key={task.id} task={task} />
//          })
        }
      </ListGroup>
    )
  else return null;
}

VacancyList.propTypes = {
    tasks: React.PropTypes.arrayOf(React.PropTypes.object)
    tasks.length: React.PropTypes.integer
}

VacancyList.defaultProps = {
    tasks: []
    tasks.length: 0
}

export default TaskList;