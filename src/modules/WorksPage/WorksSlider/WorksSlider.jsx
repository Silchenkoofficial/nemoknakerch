import React from "react";
import useStyle from "useStyle";
// import styled from "styled-components";
import works from "modules/WorksPage/WorksSlider/works.js";

import Masonry from "components/Masonry/Masonry";

function WorksSlider() {
  const { Container } = useStyle;

  let brakePoints = [350, 500, 750];
  let images = [];
  const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643];
  for (let i = 0; i < imgId.length; i++) {
    const ih = 200 + Math.floor(Math.random() * 10) * 15;
    images.push("https://unsplash.it/250/" + ih + "?image=" + imgId[i]);
  }

  return (
    <Container>
      <Masonry images={works} brakePoints={brakePoints} />
    </Container>
  );
}

export default WorksSlider;
