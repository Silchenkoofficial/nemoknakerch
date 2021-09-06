import React from "react";
import styled from "styled-components";
import useStyle from "useStyle";

function Contacts({ activeCard }) {
  const { Container, Box, BoxTitle } = useStyle;
  return (
    <Container style={{ marginBottom: 16 }}>
      <ContactsWrapper>
        <Box>
          <BoxTitle>Контакты</BoxTitle>
          <p style={{ fontSize: 14, color: "#b4b4b4" }}>
            {activeCard === "office" ? "Офис" : "Магазин"}
          </p>
          <FieldTitle>Телефон</FieldTitle>
          <FieldWrapper>
            {activeCard === "office" ? (
              <>
                <a href="tel:89782005144" style={{ flex: 1, marginRight: 10 }}>
                  <Box style={{ padding: 5 }}>
                    <small>+7 (978) 200 51 44</small>
                  </Box>
                </a>
                <a href="tel:89782005145" style={{ flex: 1 }}>
                  <Box style={{ padding: 5 }}>
                    <small>+7 (978) 200 51 45</small>
                  </Box>
                </a>
              </>
            ) : (
              <a href="tel:89780473700" style={{ flex: 1 }}>
                <Box style={{ padding: 5 }}>
                  <small>+7 (978) 047 37 00</small>
                </Box>
              </a>
            )}
          </FieldWrapper>
          <FieldTitle>Электронная почта</FieldTitle>
          <FieldWrapper>
            {activeCard === "office" ? (
              <a href="mailto:nem.okna.kerch@gmail.com" style={{ flex: 1 }}>
                <Box style={{ padding: 5 }}>
                  <small>nem.okna.kerch@gmail.com</small>
                </Box>
              </a>
            ) : (
              <a href="mailto:montajnik.kerch@gmail.com" style={{ flex: 1 }}>
                <Box style={{ padding: 5 }}>
                  <small>montajnik.kerch@gmail.com</small>
                </Box>
              </a>
            )}
          </FieldWrapper>
        </Box>
      </ContactsWrapper>
    </Container>
  );
}

export default Contacts;

const ContactsWrapper = styled.div``;
const FieldWrapper = styled.div`
  display: flex;
`;
const FieldTitle = styled.h2`
  margin: 10px 0 5px;
  font-size: 14px;
  font-weight: normal;
`;
