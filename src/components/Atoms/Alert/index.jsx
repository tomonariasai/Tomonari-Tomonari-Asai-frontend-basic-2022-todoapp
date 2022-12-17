import styled from "styled-components";
import React from "react";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";
import BREAKPOINT from "../../../variables/breakpoint";

const Alert = ({ alertText, visible }) => {
  return (
    <StyledAlert isActive={visible}>
      <StyledalertText>{alertText}</StyledalertText>
    </StyledAlert>
  );
};
export default Alert;

const StyledAlert = styled.div`
  width: 400px;
  height: 40px;
  background-color: ${COLOR.RED};
  padding: 10px 20px;
  border-radius: 4px;
  transition: 0.5s all ease;
  transform: translateY(${(props) => (props.isActive ? 20 : 5)}px);
`;
// opacity: ${(props) => (props.isActive ? 1 : 0)};

const StyledalertText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXT.S}
`;
