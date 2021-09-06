import React from "react";
import styled from "styled-components";

import vkIcon from "images/icons/social/vk.svg";
import instagramIcon from "images/icons/social/instagram.svg";

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterTitle>Немецкие окна</FooterTitle>
        <FooterCopyright>
          © Немецкие окна, {new Date().getFullYear()}
        </FooterCopyright>
        <SocialIcon src={vkIcon} alt="Вконтакте" />
        <SocialIcon src={instagramIcon} alt="Инстаграмм" />
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  background: #3c3c3c;
  color: #fff;
  padding: 16px;
`;
const FooterContainer = styled.div`
  margin: 0 auto;
  width: 60%;
  @media screen and (max-width: 1220px) {
    width: 100%;
  }
`;

const FooterTitle = styled.h1`
  font-weight: normal;
  font-size: 20px;
`;

const FooterCopyright = styled.p`
  font-weight: normal;
  font-size: 12px;
  color: #828282;
  margin-bottom: 38px;
`;

const SocialIcon = styled.img.attrs(({ src, alt }) => ({
  src,
  alt,
}))`
  width: 25px;
  height: 25px;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;
