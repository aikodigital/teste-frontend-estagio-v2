import * as S from './style';

import { Fragment } from "react";
import NavMenu from "../../NavMenu";
import Map from "../../Map";
import TabelState from "../../TabelState";
import PositionEquipment from "../../PositionEquipment";
import { Container } from "react-bootstrap";

const Home= () => {
  return (
    <Fragment>
        <NavMenu/>
        <S.StyledContainer>
            <Map>
                {/* @ts-ignore */}
                <PositionEquipment/>
            </Map>
            <TabelState/>
        </S.StyledContainer>

    </Fragment>
  )
}

export default Home;