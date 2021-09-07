import React from "react";

import { Container } from "./style";

const Switch = ({ checked, change, colors, icon }) => {
  return (
    <Container colors={colors} icon={icon}>
      <input
        type="checkbox"
        checked={checked}
        name="switch"
        onChange={change()}
      />
      <div>
          <img src={icon} alt="switchIcon" />
      </div>
    </Container>
  );
};

export default Switch;
