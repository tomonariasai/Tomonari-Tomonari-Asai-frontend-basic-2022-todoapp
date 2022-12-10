import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Input = ({ onEditComplete, defaultValue }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.value = defaultValue;
    ref.current.focus();
    ref.current.onblur = function () {
      if (ref.current === null) {
        return;
      }
      onEditComplete(ref.current.value);
    };
    ref.current.onkeydown = function (e) {
      if (e.key === "Enter") {
        onEditComplete(ref.current.value);
      }
    };
  }, []);

  return <StyledInput ref={ref}></StyledInput>;
};
export default Input;

const StyledInput = styled.input`
  width: 100%;
  border-radius: 2px;
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S}
  padding: 0px 4px;
  outline: none;
  border: none;
  background-color: ${COLOR.BLACK};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
