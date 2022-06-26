import * as React from "react";
import { Nav } from "react-bootstrap";

function NavElements({ id, popupContent }: any) {
  return (
    <Nav.Item>
      <Nav.Link eventKey={id}>{popupContent}</Nav.Link>
    </Nav.Item>
  );
}

export default NavElements;
