import React from "react";
import styled from "styled-components";
import FullscreenTile from "./FullscreenTile";

const Tile = ({ src }) => {
  const [isShow, setShow] = React.useState(false);
  const handleCloseFullcreen = () => setShow(false);
  return (
    <MansoryTile>
      <img src={src} onClick={() => setShow(true)} />
      {isShow && (
        <FullscreenTile closeFullscreen={handleCloseFullcreen} src={src} />
      )}
    </MansoryTile>
  );
};

const MasonryWrapper = ({ children, brakePoints }) => {
  const MasonryRef = React.createRef(null);
  const [columns, setColumns] = React.useState(1);

  React.useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
  }, []);

  const getColumns = (w) => {
    return (
      brakePoints.reduceRight(
        (p, c, i) => (c < w ? p : i),
        brakePoints.length
      ) + 1
    );
  };

  const onResize = () => {
    const thisColumns = getColumns(MasonryRef.current.clientWidth);
    if (thisColumns !== columns) setColumns(thisColumns);
  };

  const mapChildren = () => {
    let col = [];
    const numC = columns;
    for (let i = 0; i < numC; i++) {
      col.push([]);
    }
    return children.reduce((p, c, i) => {
      p[i % numC].push(c);
      return p;
    }, col);
  };

  return (
    <div ref={MasonryRef}>
      <MasonryMainWrapper ref={MasonryRef}>
        {mapChildren().map((col, ci) => (
          <MasonryColumn key={ci}>
            {col.map((child, i) => (
              <MansoryImage key={i}>{child}</MansoryImage>
            ))}
          </MasonryColumn>
        ))}
      </MasonryMainWrapper>
    </div>
  );
};

function Masonry({ images, brakePoints }) {
  return (
    <div className="container">
      <MasonryContainer>
        <MasonryWrapper brakePoints={brakePoints}>
          {images.map((image, id) => {
            return <Tile src={image} />;
          })}
        </MasonryWrapper>
      </MasonryContainer>
    </div>
  );
}

export default Masonry;

const MasonryMainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: stretch;
  width: 100%;
  margin: auto;
`;
const MasonryContainer = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 10px;
  p {
    text-align: center;
    padding: 4px;
    font-family: monospace;
    background: #222;
    color: #efefef;
  }
`;
const MasonryColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: stretch;
  flex-grow: 1;
`;
const MansoryTile = styled.div`
  overflow: hidden;
  margin: 4px;
  cursor: zoom-in;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  & > img {
    width: 100%;
  }
`;
const MansoryImage = styled.div``;
