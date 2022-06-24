import * as S from './style';

import { Fragment } from "react";
import NavMenu from "../../NavMenu";
import Map from "../../Map";
import TabelState from "../../TabelState";
import PositionEquipment from "../../PositionEquipment";
import { Container } from "react-bootstrap";
import PositionHistory from '../../PositionHistory';
import InformationEquipment from '../../InformationEquipment';

const Home = () => {
  return (
    <Fragment>
        <NavMenu/>
        <S.StyledContainer>
            <Map>
                <PositionEquipment/>
            </Map>
            <TabelState/>
        </S.StyledContainer>
        <InformationEquipment/>
        <S.StyledContainer>
            <Map>
                <PositionHistory/>
            </Map>
        </S.StyledContainer>

    </Fragment>
  )
}

export default Home;