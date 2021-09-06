import React from "react";
import styled from "styled-components";

import worksExample from "images/works.png";
import { Link } from "react-router-dom";

import promoImg from "images/promo/promo1.png";

import useStyle from "useStyle";
import ContactModal from "./ContactModal";
import MainTop from "./MainTop";
import Companies from "./Companies";

function MainPage() {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const { MainSection, Container, Button, Box, BoxTitle, BoxImage } = useStyle;

  const handleCloseModal = () => setModalOpen(false);
  return (
    <>
      <ContactModal closeModal={handleCloseModal} show={isModalOpen} />
      <MainWrapper>
        <MainTop openModal={() => setModalOpen(true)} />
        <Companies />
        <MainSection>
          <Container>
            <Box>
              <BoxTitle>После нас вы останетесь довольны</BoxTitle>
              <p>
                За время существования компании было осуществлено более сотни
                успешных проектов, нами освоены все современные технологии и
                тонкости в создании и установке оконных систем.
              </p>
              <Link to="/services">
                <Button style={{ marginTop: 10 }}>Наши услуги</Button>
              </Link>
            </Box>
          </Container>
        </MainSection>
        <MainSection>
          <Container
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Box display="inline-block" style={{ marginBottom: 16 }}>
              <BoxTitle>Наши работы</BoxTitle>
              <BoxImage src={worksExample} alt="work" />
              <ButtonWrapper>
                <Link to="/works" style={{ marginRight: 10 }}>
                  <Button>Подробнее</Button>
                </Link>
                <Link to="/">
                  <Button outline>Смотреть видео</Button>
                </Link>
              </ButtonWrapper>
            </Box>
            <Box display="inline-block" style={{ marginBottom: 16 }}>
              <BoxTitle>Калькулятор</BoxTitle>
              <p>
                Воспользуйтесь нашим калькулятор для расчета примерной
                стоимости.
              </p>
              <ButtonWrapper>
                <Link to="/works" style={{ marginRight: 10 }}>
                  <Button>Подробнее</Button>
                </Link>
              </ButtonWrapper>
            </Box>
          </Container>
        </MainSection>
      </MainWrapper>
    </>
  );
}

export default MainPage;

const MainWrapper = styled.div``;
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

const PromoImage = styled.img.attrs(({ src, alt }) => ({ src, alt }))`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.25);
  object-fit: contain;
`;
