import React from "react";
import styled from "styled-components";
import logo from "images/logo.svg";
import burgerIcon from "images/icons/burger.svg";
import { Drawer } from "components";
import { Link } from "react-router-dom";

const Header = React.forwardRef((_, ref) => {
  const [open, setOpen] = React.useState(false);
  const [topOffset, setTopOffset] = React.useState(0);
  const [scrollDirection, setScrollDirection] = React.useState(false); // true - вниз, false - вверх

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset < 0) return;
      if (window.pageYOffset > document.scrollingElement.scrollHeight) return;
      if (topOffset < window.pageYOffset) {
        // Нужно прятать header
        setScrollDirection(true);
      } else {
        // Нужно показывать header
        setScrollDirection(false);
      }
      setTopOffset(window.pageYOffset);
    });
  }, [topOffset]);

  return (
    <HeaderWrapper ref={ref} scrollDirection={scrollDirection}>
      <BurgerIcon onClick={() => setOpen(true)} />
      <Drawer open={open} closeDrawer={() => setOpen(false)} />
      <Link to="/">
        <HeaderLogo>
          <img src={logo} alt="" />
          <LogoTitle>Немецкие окна</LogoTitle>
        </HeaderLogo>
      </Link>
    </HeaderWrapper>
  );
});

export default Header;

const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: ${(p) => (p.scrollDirection ? "-10%" : "0")};
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 10px 16px;
  background-color: #fff;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.25);
  transition: top 0.5s;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const LogoTitle = styled.h1`
  font-size: 24px;
  font-weight: normal;
  margin-left: 5px;
`;

const BurgerIcon = styled.img.attrs({
  src: burgerIcon,
  alt: "Burger Icon",
})`
  width: 25px;
  height: 36px;
  cursor: pointer;
  transition: transform 0.2s;

  &:active {
    transform: scale(0.9);
  }
`;
