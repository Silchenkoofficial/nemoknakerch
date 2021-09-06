import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import closeIcon from "images/icons/close.svg";
import homeIcon from "images/icons/drawer/home.svg";
import instrumentIcon from "images/icons/drawer/instrument.svg";
import servicesIcon from "images/icons/drawer/services.svg";
import calculatorIcon from "images/icons/drawer/calculator.svg";
import aboutIcon from "images/icons/drawer/about.svg";
import worksIcon from "images/icons/drawer/works.svg";
import loginIcon from "images/icons/drawer/login.svg";

const drawerList = [
  {
    icon: homeIcon,
    title: "Главная",
    to: "/",
  },
  {
    icon: instrumentIcon,
    title: "Стройматериалы",
    special: true,
    to: "https://montajnik-kerch.ru",
  },
  {
    icon: servicesIcon,
    title: "Услуги",
    to: "/services",
  },
  // {
  //   icon: calculatorIcon,
  //   title: "Калькулятор",
  //   to: "/calculator",
  // },
  {
    icon: aboutIcon,
    title: "О нас",
    to: "/about",
  },
  {
    icon: worksIcon,
    title: "Наши работы",
    to: "/works",
  },
  // {
  //   icon: loginIcon,
  //   title: "Вход",
  //   login: true,
  //   to: "/login",
  // },
];

const useOnClickOutside = (ref, closeMenu) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (ref.current && event.target && ref.current.contains(event.target)) {
        return;
      }
      closeMenu();
    };

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, closeMenu]);
};

function Drawer({ open, closeDrawer }) {
  const drawerRef = React.useRef(null);
  useOnClickOutside(drawerRef, closeDrawer);

  const history = useHistory();
  const handleOnLink = React.useCallback(
    (link) => {
      history.push(link);
      closeDrawer();
    },
    [history, closeDrawer]
  );

  return (
    <div
      ref={drawerRef}
      // style={{ width: "100%", height: "100%", backgroundColor: "red" }}
    >
      <div>
        <DrawerWrapper open={open}>
          <DrawerHeader>
            <CloseIcon onClick={closeDrawer} />
            Меню
          </DrawerHeader>
          <DrawerContent>
            {drawerList.map((item, i) => {
              return (
                <DrawerItem
                  key={i}
                  special={item.special}
                  login={item.login}
                  onClick={() => handleOnLink(item.to)}
                >
                  <DrawerItemIcon src={item.icon} alt="home" />
                  {item.title}
                </DrawerItem>
              );
            })}
          </DrawerContent>
        </DrawerWrapper>
      </div>
    </div>
  );
}

export default Drawer;

const DrawerWrapper = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  transition: transform 0.2s;
  transform: ${(p) => (p.open ? "translate(0)" : "translate(-101%)")};
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.25);
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.25);
`;

const DrawerContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const DrawerItem = styled.div`
  margin: ${(p) => (p.login ? "auto 0 16px" : "0")};
  padding: 10px 16px;
  font-size: 20px;
  font-weight: ${(p) => (p.special ? "bold" : "normal")};
  display: flex;
  align-items: center;
  color: ${(p) => (p.special ? "#f15045" : "#000")};
  cursor: pointer;
  transition: transform 0.2s;

  &:active {
    transform: scale(0.98);
  }
  &:first-child {
    margin-top: 16px;
  }
`;

const DrawerItemIcon = styled.img.attrs(({ src, alt }) => ({
  src,
  alt,
}))`
  width: 22px;
  height: 22px;
  margin-right: 10px;
`;

const CloseIcon = styled.img.attrs({
  src: closeIcon,
  alt: "Close Icon",
})`
  width: 25px;
  height: 36px;
  cursor: pointer;
  transition: transform 0.2s;
  margin-right: 8px;

  &:active {
    transform: scale(0.9);
  }
`;
