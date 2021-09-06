import React from "react";
import useStyle from "useStyle";
import styled from "styled-components";
import { Schedule } from "components";

function CompanyCard({ name, type = "office", active, onClick }) {
  const { Box, BoxTitle } = useStyle;
  return (
    <CompanyCardWrapper onClick={onClick}>
      <Box
        active={active}
        display="flex"
        style={{
          minWidth: 288,
          scrollSnapAlign: "center",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <BoxTitle style={{ fontSize: 16, marginBottom: 10 }}>{name}</BoxTitle>
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ marginRight: 30 }}>
            <p style={{ fontSize: 14, color: "#b4b4b4" }}>
              {type === "office" && "Немецкие окна"}
              {type === "shop" && "Магазин"}
            </p>
            <p style={{ fontSize: 14, width: "50%", whiteSpace: "pre-wrap" }}>
              {type === "office" && "Ворошилова, 4А"}
              {type === "shop" && "Таврическая площадь, 3"}
            </p>
          </div>
          <Schedule type={type} />
        </div>
      </Box>
    </CompanyCardWrapper>
  );
}

export default CompanyCard;

const CompanyCardWrapper = styled.div`
  cursor: pointer;
  transition: transform 0.2s;

  &:active {
    transform: scale(0.98);
  }
`;
