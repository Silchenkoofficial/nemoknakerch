import React from "react";
import styled from "styled-components";

const Chip = ({ title, onClick, active }) => {
  return (
    <ChipBlock isActive={active} onClick={onClick}>
      {title}
    </ChipBlock>
  );
};

function Chips({ chipsNames, activeChip, onChipClick }) {
  return (
    <ChipsWrapper>
      <div style={{ minWidth: 16 }} />
      {chipsNames.map((chipName, i) => (
        <Chip
          key={i}
          title={chipName}
          onClick={() => onChipClick(chipName)}
          active={activeChip === chipName}
        />
      ))}
      <div style={{ minWidth: 16 }} />
    </ChipsWrapper>
  );
}

export default Chips;

const ChipsWrapper = styled.div`
  margin-left: -8px;
  display: flex;
  overflow-x: auto;
  padding-bottom: 16px;
  white-space: nowrap;
`;

const ChipBlock = styled.div`
  padding: 8px 16px;
  border: 2px solid #f15045;
  margin-left: 8px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: bold;
  color: ${(p) => (p.isActive ? "#fff" : "#f15045")};
  background-color: ${(p) => (p.isActive ? "#f15045" : "transparent")};
  transition: color 0.3s, background-color 0.2s;
  cursor: pointer;
`;
