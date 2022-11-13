import React, { useState } from "react";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import styled from "styled-components";
import Checkbox from "../../Atoms/Checkbox/index.jsx";
import EditButton from "../../Atoms/EditButton/index.jsx";
import Input from "../../Atoms/Input/index.jsx";

const Task = ({
  onEditComplete,
  onTaskComplete,
  taskName,
  defaultIsEditing,
}) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);

  const handleEditState = () => {
    setIsEditing(true);
  };

  return (
    <StyledTask>
      <Checkbox onClick={onTaskComplete} />
      <>
        {isEditing && (
          <Input
            defaultValue={taskName}
            onEditComplete={(name) => {
              onEditComplete(name);
              setIsEditing(false);
            }}
          />
        )}
        {!isEditing && (
          <>
            <StyledTaskText>{taskName}</StyledTaskText>
            <EditButton onClick={handleEditState} />
          </>
        )}
      </>
    </StyledTask>
  );
};
export default Task;

const StyledTask = styled.div`
  display: flex;
  padding: 2px 6px;
`;

const StyledTaskText = styled.div`
  flex: 1 1 auto;
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S}
  margin:0px 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
