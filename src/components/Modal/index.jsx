import React from "react";
import { Container, Content } from "./style";

import close from "../../assets/img/close.png";

const Modal = ({ children, isVisible, closeModal }) => {
  const handleOutsideClick = (e) => {
    const id = e.target.id;
    if (id === "close-icon" || id === "modal" || id === "close") {
      closeModal();
    }
  };

  return (
    <Container
      id="modal"
      className={isVisible && "show"}
      onClick={handleOutsideClick}
    >
      <Content>
        <i id="close">
          <img id="close-icon" src={close} alt="close-ico" />
        </i>
        {children}
      </Content>
    </Container>
  );
};

export default Modal;
