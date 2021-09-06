import React from "react";
import useStyle from "useStyle";
import Chips from "./Chips";
import WorksSlider from "./WorksSlider/WorksSlider";

const chips = [
  "Все",
  "Видео",
  "Окна",
  "Балконы",
  "Двери ",
  "Жалюзи",
  "Роллеты",
  "Доп. услуги",
];

function WorksPage() {
  const { Container } = useStyle;
  const [activeChip, setActiveChip] = React.useState("Все");

  const handleChipClick = (chipName) => setActiveChip(chipName);
  return (
    <>
      <Container>
        <h2 style={{ marginBottom: 8 }}>Наши работы</h2>
      </Container>
      <Chips
        chipsNames={chips}
        activeChip={activeChip}
        onChipClick={handleChipClick}
      />
      <WorksSlider />
    </>
  );
}

export default WorksPage;
