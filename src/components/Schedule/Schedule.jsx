import React from "react";
import styled from "styled-components";
import schedules from "./schedules";
import ScheduleModal from "./ScheduleModal";

const checkIsOpen = (time) => {
  function toms(mmss) {
    if (typeof mmss !== "string") {
      if (mmss.toString) mmss = mmss.toString();
    }

    var parts = mmss.split(":"),
      n = parts.length,
      ms = 0,
      i;

    for (i = 0; i < parts.length; i++) {
      let part = parseInt(parts[n - 1 - i]);
      if (i === 0) {
        ms += part * 1000;
      } else if (i === 1) {
        ms += part * 6e4;
      } else if (i === 2) {
        ms += part * 36e5;
      }
    }

    return ms;
  }
  const timeBegin = time.split(" - ")[0];
  const timeEnd = time.split(" - ")[1];
  return (
    toms(timeBegin) <=
      toms(new Date().getHours() + ":" + new Date().getMinutes()) &&
    toms(new Date().getHours() + ":" + new Date().getMinutes()) < toms(timeEnd)
  );
};

function Schedule({ type }) {
  const today = new Date().getDay() !== 0 ? new Date().getDay() - 1 : 6;
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isOpen, setOpen] = React.useState(
    checkIsOpen(schedules[type][today].time)
  );
  const handleCloseModal = () => setModalOpen(false);

  React.useEffect(() => {
    setOpen(checkIsOpen(schedules[type][today].time));
  }, [type, today]);
  return (
    <>
      <ScheduleModal
        closeModal={handleCloseModal}
        show={isModalOpen}
        isOpen={isOpen}
        type={type}
        schedules={schedules}
      />
      <ScheduleWrapper onClick={() => setModalOpen(true)}>
        <OpenText isOpen={isOpen}>{isOpen ? "Открыто" : "Закрыто"}</OpenText>
        <ScheduleText isOpen={isOpen}>
          {schedules[type][today].time}
          <svg
            style={{ marginLeft: 3 }}
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.61138 6.37337L0.160979 1.92295C-0.0536598 1.70831 -0.0536598 1.36033 0.160979 1.14571L0.680047 0.626642C0.89432 0.412369 1.24159 0.411957 1.45637 0.625726L5.00001 4.15276L8.54363 0.625726C8.75841 0.411957 9.10568 0.412369 9.31995 0.626642L9.83902 1.14571C10.0537 1.36035 10.0537 1.70833 9.83902 1.92295L5.38864 6.37337C5.174 6.58799 4.82602 6.58799 4.61138 6.37337Z"
              fill={isOpen ? "#1dcc00" : "#f15045"}
            />
          </svg>
        </ScheduleText>
      </ScheduleWrapper>
    </>
  );
}

export default Schedule;

const ScheduleWrapper = styled.div`
  text-align: right;
`;
const OpenText = styled.p`
  font-size: 14px;
  color: ${(p) => (p.isOpen ? "#1dcc00" : "#f15045")};
  font-weight: 500;
`;
const ScheduleText = styled.p`
  font-weight: bold;
  color: ${(p) => (p.isOpen ? "#1dcc00" : "#f15045")};
`;
