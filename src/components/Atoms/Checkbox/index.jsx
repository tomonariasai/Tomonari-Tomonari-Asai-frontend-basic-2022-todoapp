import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import check from "../../../assets/svg/check.svg";

const Checkbox = ({ onClick }) => {
  return (
    <StyledCheckbtn onClick={onClick}>
      <Img src={check} />
    </StyledCheckbtn>
  );
};
export default Checkbox;

const Img = styled.img`
  width: 100%;
  height: 100%;
  display: none;
`;

const StyledCheckbtn = styled.button`
  padding: 0px;
  width: 20px;
  height: 20px;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  background: transparent;
  cursor: pointer;
  &:hover > ${Img} {
    display: flex;
  }
`;
