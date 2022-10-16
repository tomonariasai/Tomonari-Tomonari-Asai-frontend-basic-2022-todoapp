import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import plus from "../../../assets/svg/plus.svg";

const AddTaskButton = ({ onClick }) => {
  return (
    <StyledTaskButton onClick={onClick}>
      <TaskbtnHover />
      <TaskbtnContent>
        <PlusImg src={plus} />
        <StyledTaskText>タスクを追加</StyledTaskText>
      </TaskbtnContent>
    </StyledTaskButton>
  );
};
export default AddTaskButton;

const TaskbtnHover = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 126px;
  height: 24px;
  background-color: ${COLOR.GREEN};
  opacity: 0;
  border-radius: 12px;
`;

const StyledTaskButton = styled.button`
  position: relative;
  background: transparent;
  padding: 2px 6px;
  border: none;
  cursor: pointer;
  &:hover > ${TaskbtnHover} {
    opacity: 0.2;
  }
`;

const PlusImg = styled.img`
  width: 20px;
`;

const TaskbtnContent = styled.div`
  display: flex;
`;

const StyledTaskText = styled.div`
  color: ${COLOR.GREEN};
  ${TEXT.S}
  margin-left: 10px;
`;
