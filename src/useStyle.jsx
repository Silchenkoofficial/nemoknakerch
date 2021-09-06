import styled from "styled-components";

const MainSection = styled.section`
  padding-bottom: 32px;
`;
const Container = styled.div`
  padding: 0 16px;
`;
const Button = styled.button`
  min-width: 128px;
  flex: 1;
  padding: 12px 0;
  ${(p) =>
    p.outline
      ? `
  border: 1px solid #f15045;
  color: #f15045;
  `
      : `
      background: #f15045;
      color: #fff;`}
  border-radius: 5px;
  font-weight: normal;
  font-size: 16px;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
`;
const Box = styled.div`
  display: ${(p) => p.display ?? "block"};
  padding: 10px 16px;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.25);
  ${(p) =>
    p.active ? "border: 2px solid #F15045;" : "border: 2px solid transparent;"}
  border-radius: 5px;
  background: ${(p) => (p.highlight ? "#F15045" : "#fff")};
  color: ${(p) => (p.highlight ? "#fff" : "#000")};
  transition: border 0.2s;
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
const BoxsWrapper = styled.div`
  margin-top: -16px;
  padding: 16px;
  display: ${(p) => p.display ?? "block"};
  scroll-snap-type: mandatory;
  overflow-x: scroll;
  white-space: nowrap;
`;
const BoxTitle = styled.h1`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height, or 122% */

  letter-spacing: 0.8px;
`;
const BoxImage = styled.img.attrs(({ src, alt }) => ({
  src,
  alt,
}))`
  width: 100%;
  max-width: 323px;
`;

const useStyle = {
  MainSection,
  Container,
  Button,
  Box,
  BoxTitle,
  BoxImage,
  BoxsWrapper,
};

export default useStyle;
