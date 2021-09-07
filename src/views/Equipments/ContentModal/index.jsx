import React from "react";

import { Container } from "./style";
import { SelectModel, SelectState } from "../../../components/Filters";

const ContentModal = ({ state, changeState, model, changeModel }) => {
  return (
    <Container>
      <SelectModel model={model} changeModel={changeModel} />
      <SelectState state={state} changeState={changeState} />
    </Container>
  );
};

export default ContentModal;
