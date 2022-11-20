import React, { useState } from "react";
import COLOR from "../../../variables/color";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton/index.jsx";
import Task from "../../Molecules/Task/index.jsx";

const TodoCard = () => {
  const [taskList, settaskList] = useState([]);

  const handleAddTask = () => {
    const newTask = {
      taskName: "",
      initializing: true,
    };
    settaskList(taskList.concat(newTask));
  };

  const onEditComplete = (name, index) => {
    const edittaskList = [...taskList];
    if (name === "") {
      edittaskList.splice(index, 1);
      settaskList(edittaskList);
      return;
    }
    edittaskList[index].taskName = name;
    settaskList(edittaskList);
  };

  const onTaskComplete = (num) => {
    const newTaskList = taskList.filter((none, index) => index != num);
    settaskList(newTaskList);
  };

  return (
    <StyledTodoCard>
      <AddTaskButton onClick={handleAddTask} />
      {taskList.map((task, index) => (
        <Task
          key={index}
          onEditComplete={(value) => onEditComplete(value, index)}
          onTaskComplete={() => onTaskComplete(index)}
          taskName={task.taskName}
          defaultIsEditing={task.initializing}
        />
      ))}
    </StyledTodoCard>
  );
};
export default TodoCard;

const StyledTodoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: ${COLOR.LIGHT_BLACK};
  border-radius: 4px;
`;
