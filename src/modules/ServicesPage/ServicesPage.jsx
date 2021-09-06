import React from "react";
import styled from "styled-components";
import useStyle from "useStyle";
import servicesExampleImg from "images/services/example.png";

function ServicesPage() {
  const { Container, Box } = useStyle;
  return (
    <Container>
      <h2>Услуги</h2>
      <ServicesWrapper>
        {Array(7)
          .fill(0)
          .map((_, i) => (
            <ServicesCard key={i}>
              <Box style={{ flex: 1 }}>
                <ServicesImage src={servicesExampleImg} />
              </Box>
              <ServicesLabel>Установка окон</ServicesLabel>
            </ServicesCard>
          ))}
      </ServicesWrapper>
    </Container>
  );
}

export default ServicesPage;

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 16px -7px;
`;
const ServicesCard = styled.div`
  flex: 1;
  margin: 0 7px;
  margin-bottom: 32px;
  max-width: 168px;
  min-width: 150px;
  height: 160px;
  display: flex;
  flex-direction: column;
`;
const ServicesLabel = styled.p``;
const ServicesImage = styled.img.attrs(({ src, alt }) => ({ src, alt }))`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;
