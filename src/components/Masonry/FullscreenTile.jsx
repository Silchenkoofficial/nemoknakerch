import React from "react";
import styled from "styled-components";
import closeIcon from "images/icons/close.svg";

function FullscreenTile({ closeFullscreen, src }) {
  return (
    <FullscreenOverlay onClick={closeFullscreen}>
      <svg
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 999999,
          cursor: "pointer",
        }}
        onClick={closeFullscreen}
        width="25"
        height="20"
        viewBox="0 0 25 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4.36829"
          y="0.45406"
          width="25"
          height="2"
          rx="1"
          transform="rotate(45 4.36829 0.45406)"
          fill="#fff"
        />
        <rect
          x="2.95404"
          y="18.1317"
          width="25"
          height="2"
          rx="1"
          transform="rotate(-45 2.95404 18.1317)"
          fill="#fff"
        />
      </svg>

      <FullscreenImage src={src} />
    </FullscreenOverlay>
  );
}

export default FullscreenTile;

const FullscreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999999;
  cursor: zoom-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FullscreenImage = styled.img.attrs(({ src, alt }) => ({ src, alt }))`
  height: 80%;
  object-fit: contain;
  max-width: 90%;
`;
