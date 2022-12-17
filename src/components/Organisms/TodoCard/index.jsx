import React, { useState, useEffect } from "react";
import COLOR from "../../../variables/color";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton/index.jsx";
import Task from "../../Molecules/Task/index.jsx";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";

const TodoCard = () => {
  const AlertHandlerContext = useAlertHandlerContext();

  const [taskList, settaskList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("taskList");
    if (data === null) {
      return;
    } else {
      const storageData = JSON.parse(data);
      settaskList(storageData);
      return;
    }
  }, []);

  useEffect(() => {
    const savetaskList = JSON.stringify(taskList);
    localStorage.setItem("taskList", savetaskList);
  }, [taskList]);

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
      AlertHandlerContext.setAlert("タスクの名前が設定されていません。");
      return;
    }
    edittaskList[index].taskName = name;
    edittaskList[index].initializing = false;
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
