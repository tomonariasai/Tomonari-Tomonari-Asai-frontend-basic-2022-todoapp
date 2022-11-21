import React, { useState } from "react";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";
import styled from "styled-components";
import Title from "../../Atoms/Title/index.jsx";
import TodoCard from "../../Organisms/TodoCard/index.jsx";

const MainPage = () => {
  return (
    <StyledMainPage>
      <Title />
      <TodoCardContainer>
        <TodoCard />
      </TodoCardContainer>
    </StyledMainPage>
  );
};
export default MainPage;

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px 20px;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    padding-top: 20px;
  }
`;

const TodoCardContainer = styled.div`
  margin-top: 20px;
  width: 500px;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 280px;
  }
`;
