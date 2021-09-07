import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "styled-components";

import logo from "../../assets/img/aiko.png";

import { Container, List } from "./style";
import Switch from "../Switch";

const Header = ({ toggleTheme }) => {
  const { colors, title, iconSvg } = useContext(ThemeContext);

  return (
    <Container>
      <img src={logo} alt="Logo Aiko" />
      <List>
        <li>
          <Link to="/equipments">Equipamentos</Link>
        </li>
        <li>
          <Link to="/recent">Mais recentes</Link>
        </li>
      </List>
      <Switch
        checked={title === "dark" ? true : false}
        colors={colors}
        icon={iconSvg}
        change={() => toggleTheme}
      />
    </Container>
  );
};

export default Header;
