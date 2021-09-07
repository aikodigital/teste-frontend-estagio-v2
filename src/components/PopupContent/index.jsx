import React from "react";
import { Link } from "react-router-dom";

import { formatString } from "../../utils/FormatDate";

import { Container, Status } from "./style";

const PopupContent = ({ equipment, details, date, link }) => {

  return (
    <Container>
      <h2>{equipment.name}</h2>
      <h3>{equipment.model.name}</h3>
      <p>{formatString(date)}</p>
      {details && (
        <Status color={details.color}>
          <span>Estado mais recente: {details.name}</span>
          <div></div>
        </Status>
      )}
      {link && <Link to={`/equipment/${equipment.id}`}>Detalhes</Link>}
    </Container>
  );
};

export default PopupContent;
