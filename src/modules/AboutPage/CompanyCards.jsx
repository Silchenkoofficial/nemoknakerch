import React from "react";
import styled from "styled-components";
import CompanyCard from "./CompanyCard";

function CompanyCards({ activeCard, onCardClick }) {
  return (
    <CompanyCardsWrapper>
      <CompanyCard
        name="Офис"
        type="office"
        active={activeCard === "office"}
        onClick={() => onCardClick("office")}
      />
      <CompanyCard
        name="Магазин стройматериалов и крепежа"
        type="shop"
        active={activeCard === "shop"}
        onClick={() => onCardClick("shop")}
      />
      <div style={{ paddingRight: 10 }} />
    </CompanyCardsWrapper>
  );
}

export default CompanyCards;

const CompanyCardsWrapper = styled.div`
  margin-top: -10px;
  padding: 10px 16px 16px;
  width: 100%;
  overflow-x: auto;
  display: inline-flex;
  flex-wrap: nowrap;
  scroll-snap-type: x mandatory;
  &:first-child {
    padding-left: 16px;
  }
  &:last-child {
    padding-right: 16px;
  }
  & > div {
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
