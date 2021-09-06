import React from "react";
import styled from "styled-components";
import useStyle from "useStyle";
import CompanyCards from "./CompanyCards";
import Contacts from "./Contacts";
import Map from "./Map";

function AboutPage() {
  const { Container, Box, BoxTitle } = useStyle;

  const [activeCard, setActiveCard] = React.useState("office");
  const handleClickCard = (type) => setActiveCard(type);

  return (
    <div>
      <Container style={{ marginBottom: 16 }}>
        <Box highlight>
          <BoxTitle>Компания №1 по пластиковым окнам</BoxTitle>
          <p>на рынке с 2014 года</p>
          <LabelBlock>
            Более <b>1000</b> довольных клиентов
          </LabelBlock>
          <br />
          <LabelBlock>
            Более <b>500</b> положительных отзывов
          </LabelBlock>
        </Box>
      </Container>
      <CompanyCards activeCard={activeCard} onCardClick={handleClickCard} />
      <Map activeCard={activeCard} />
      <Contacts activeCard={activeCard} />
      <Container style={{ marginBottom: 16 }}>
        <Box>
          <BoxTitle>О компании</BoxTitle>
          <p style={{ marginBottom: 8, fontSize: 14 }}>
            Компания «Немецкие окна» уже более шести лет работает на территории
            города Керчь. Основная наша направленность – окна. Мы поставляем
            только качественные оконные системы известных торговых марок таких,
            как ELEX, KBE, REHAU, BRUSBOX; рольставни, секционные ворота DORHAN,
            алюминиевые профильные системы ALUTECH.{" "}
          </p>
          <p style={{ fontSize: 14 }}>
            За время существования компании было осуществлено более сотни
            успешных проектов, нами освоены все современные технологии и
            тонкости в создании и установке оконных систем.
          </p>
        </Box>
      </Container>
    </div>
  );
}

export default AboutPage;

const LabelBlock = styled.div`
  display: inline-block;
  margin-top: 5px;
  background: #fff;
  padding: 5px 5px 5px 10px;
  color: #000;
  font-size: 14px;
  border-radius: 5px;
`;
