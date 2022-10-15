import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import pencil from "../../../assets/svg/pencil.svg";

const SampleButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <CircleHover />
      <Img src={pencil} />
    </StyledButton>
  );
};
export default SampleButton;

const CircleHover = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${COLOR.LIGHT_GRAY};
  opacity: 0;
  transition: 0.2s;
`;

const StyledButton = styled.button`
  position: relative;
  padding: 0px;
  border: none;
  background: transparent;
  cursor: pointer;
  &:hover > ${CircleHover} {
    opacity: 0.2;
  }
`;

const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15px;
`;
