import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";

const NotFound = () => {
  return (
    <Container>
      <h1>404</h1>
      <p>Acho que você se perdeu!</p>
      <Link to="/equipments">Ir para início?</Link>
    </Container>
  );
};

export default NotFound;
