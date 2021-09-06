import React from "react";
import reactDom from "react-dom";
import styled from "styled-components";
import useStyle from "useStyle";

function ContactModal({ show, closeModal }) {
  const { Button } = useStyle;
  if (!show) return null;
  const modal = (
    <ModalWrapper onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          Заявка на бесплатный замер
          <svg
            onClick={closeModal}
            width="20"
            height="15"
            viewBox="0 0 25 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: "pointer" }}
          >
            <rect
              x="4.36829"
              y="0.45406"
              width="25"
              height="2"
              rx="1"
              transform="rotate(45 4.36829 0.45406)"
              fill="#ffffff"
            />
            <rect
              x="2.95404"
              y="18.1317"
              width="25"
              height="2"
              rx="1"
              transform="rotate(-45 2.95404 18.1317)"
              fill="#ffffff"
            />
          </svg>
        </ModalHeader>
        <ModalBody>
          <ContactLabel htmlFor="">Ваше имя</ContactLabel>
          <ContactInput type="text" placeholder="Сергей" />
          <ContactLabel htmlFor="">Ваш E-mail</ContactLabel>
          <ContactInput type="text" placeholder="example@example.ru" />
          <ContactLabel htmlFor="">Ваш телефон</ContactLabel>
          <ContactInput type="text" placeholder="+7 (978) 123 45 67" />
          <div style={{ display: "flex" }}>
            <Button outline style={{ marginRight: 10 }}>
              Отмена
            </Button>
            <Button>Отправить</Button>
          </div>
        </ModalBody>
      </ModalContent>
    </ModalWrapper>
  );

  return reactDom.createPortal(modal, document.getElementById("modal-root"));
}

export default ContactModal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
`;
const ModalContent = styled.div`
  width: 300px;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
`;
const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: #f15045;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  svg {
    path {
      fill: #fff;
    }
  }
`;
const ModalBody = styled.div`
  padding: 10px 16px;
`;

const ContactLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
`;
const ContactInput = styled.input.attrs(() => ({}))`
  display: block;
  width: 100%;
  height: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0;
  margin-bottom: 25px;
`;
