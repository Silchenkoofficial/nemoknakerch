import React from "react";
import styled from "styled-components";
import useStyle from "useStyle";

import rehauLogo from "images/companies/rehau.png";
import elexLogo from "images/companies/elex.png";
import alutechLogo from "images/companies/alutech.png";
import doorhanLogo from "images/companies/doorhan.png";

function Companies() {
  const { MainSection } = useStyle;
  return (
    <MainSection>
      <MainCompanies>
        <CompanyLogo src={rehauLogo} alt="Rehau" />
        <CompanyLogo src={elexLogo} alt="Elex" />
        <CompanyLogo src={alutechLogo} alt="Alutech" />
        <CompanyLogo src={doorhanLogo} alt="Doorhan" />
      </MainCompanies>
    </MainSection>
  );
}

export default Companies;

const MainCompanies = styled.div`
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: scroll;
`;
const CompanyLogo = styled.img.attrs(({ src, alt }) => ({
  src,
  alt,
}))`
  padding-right: 25px;
  min-height: 25px;
  max-height: 25px;
  &:first-child {
    padding-left: 16px;
  }
  &:last-child {
    padding-right: 16px;
  }
`;
