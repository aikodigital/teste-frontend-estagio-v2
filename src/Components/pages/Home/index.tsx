import { Fragment } from "react";
import NavMenu from "../../NavMenu";
import Map from "../../Map";
import TabelState from "../../TabelState";
import Footer from "../../Footer";
import PositionEquipment from "../../PositionEquipment";
import PositionHistory from '../../PositionHistory';
import InformationEquipment from '../../InformationEquipment';
import FilterData from '../../FilterData';
import * as S from './style';

const Home = () => {
  return (
    <Fragment>
        <NavMenu/>
        <S.StyledContainer>
            <S.StyledContainerMap 
                marginTop= {6} 
                marginBottom= {0} 
                marginRight= {2}
            >
            <FilterData/>
            <Map height='70vh'>
                <PositionEquipment/>
            </Map>
            </S.StyledContainerMap>
        </S.StyledContainer>
        <InformationEquipment/>
        <S.StyledContainer>
            <S.StyledContainerMap
                marginTop= {0} 
                marginBottom= {2}
                marginRight= {2}
            >
                <Map height='80vh'>
                    <PositionHistory/>
                </Map>
            </S.StyledContainerMap>
            <TabelState/>

        </S.StyledContainer>
        <Footer/>

    </Fragment>
  )
}

export default Home;