import styled from "styled-components";
import React from "react";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";

const Alert = ({ alertText, visible }) => {
  return (
    <ALertContainer>
      <StyledAlert isActive={visible}>
        <StyledalertText>{alertText}</StyledalertText>
      </StyledAlert>
    </ALertContainer>
  );
};
export default Alert;

const ALertContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledAlert = styled.div`
  width: 400px;
  height: 40px;
  background-color: ${COLOR.RED};
  padding: 10px 20px;
  border-radius: 4px;
  transition: 0.5s all ease;
  transform: translateY(${(props) => (props.isActive ? 80 : 60)}px);
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    transform: translateY(${(props) => (props.isActive ? 40 : 20)}px);
    pading: 0px 20px;
    width: 100%;
  }
`;

const StyledalertText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXT.S}
`;
