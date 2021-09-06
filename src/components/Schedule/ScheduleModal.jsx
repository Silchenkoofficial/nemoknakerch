import React from "react";
import reactDom from "react-dom";
import styled from "styled-components";
import closeIcon from "images/icons/close.svg";

const ScheduleItem = ({ day, today, isOpen }) => {
  return (
    <ScheduleItemBlock
      style={{
        color: today ? (isOpen ? "#1dcc00" : "#f15045") : "rgba(0, 0, 0, 0.3)",
        fontWeight: today ? "bold" : "normal",
      }}
    >
      <p>{day.day}</p>
      <p>{day.time}</p>
    </ScheduleItemBlock>
  );
};

const ScheduleItemBlock = styled.div`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18;
`;

const ScheduleModal = ({ closeModal, show, type, isOpen, schedules }) => {
  const today = new Date().getDay() !== 0 ? new Date().getDay() - 1 : 6;
  if (!show) return null;
  const modal = (
    <ModalWrapper onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <div>
            <p>График работы</p>
            <small
              style={{ fontWeight: "normal", fontSize: 14, color: "#b4b4b4" }}
            >
              {type === "office" ? "Немецкие окна" : "Магазин"}
            </small>
          </div>
          <ModalClose onClick={closeModal} src={closeIcon} alt="Закрыть" />
        </ModalHeader>
        <ModalBody>
          {schedules[type].map((item, i) => (
            <ScheduleItem
              key={i}
              day={item}
              today={i === today}
              isOpen={isOpen}
            />
          ))}
        </ModalBody>
      </ModalContent>
    </ModalWrapper>
  );

  return reactDom.createPortal(modal, document.getElementById("modal-root"));
};

export default ScheduleModal;

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
`;
const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 20px;
  font-weight: bold;
`;
const ModalBody = styled.div`
  padding: 10px 16px;
`;
const ModalClose = styled.img.attrs(({ src, alt }) => ({ src, alt }))`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
