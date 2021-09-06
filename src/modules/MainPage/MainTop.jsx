import React from "react";
import { Link } from "react-router-dom";
import useStyle from "useStyle";
import styled from "styled-components";

function MainTop({ openModal }) {
  const { MainSection, Container, Button } = useStyle;
  return (
    <MainSection>
      <Container>
        <h1>Оконные системы только известных торговых марок</h1>
        <MainSubtitle>
          Более семи лет работаем на территории г. Керчь
        </MainSubtitle>
        <ButtonWrapper>
          <Button style={{ marginRight: 10 }} onClick={openModal}>
            Бесплатный замер
          </Button>
          <Link to="/services">
            <Button outline>Наши услуги</Button>
          </Link>
        </ButtonWrapper>
      </Container>
    </MainSection>
  );
}

export default MainTop;

const MainSubtitle = styled.p`
  margin-top: 5px;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 1.15px;
  color: #323232;
`;

const ButtonWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  width: 40%;
  @media screen and (max-width: 1220px) {
    width: 70%;
  }
  @media screen and (max-width: 670px) {
    width: 100%;
  }
`;
