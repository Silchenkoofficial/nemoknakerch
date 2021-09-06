import React from "react";
import useStyle from "useStyle";

import { YMaps, Map as YMap, Placemark, ZoomControl } from "react-yandex-maps";

function Map({ activeCard }) {
  const { Container, Box } = useStyle;
  return (
    <Container style={{ marginBottom: 16 }}>
      <Box
        style={{
          minHeight: 227,
          width: "100%",
          padding: 0,
          overflow: "hidden",
        }}
      >
        <YMaps style={{ borderRadius: 5 }}>
          <YMap
            defaultState={{
              center: [45.33767428450555, 36.44543974545704],
              zoom: 16,
            }}
            width="100%"
          >
            {activeCard === "office" && (
              <Placemark geometry={[45.33767428450555, 36.44543974545704]} />
            )}
            {activeCard === "shop" && (
              <Placemark geometry={[45.33809423471884, 36.44489257481832]} />
            )}
            <ZoomControl options={{ float: "right" }} />
          </YMap>
        </YMaps>
      </Box>
    </Container>
  );
}

export default Map;
