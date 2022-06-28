import React, { useState } from 'react'

import Checkbox from '@mui/material/Checkbox';

import {
  Container,
  CustomFormControlLabel,
  CustomButton
} from "./styled-MapContainer"

import MapBoxContainer from './MapBox/MapBoxContainer';

const MappingContainer = ({ selected, getId, clear }) => {

  const [viewTrajetory, setViewTrajetory] = useState(true)

  const viewTrajetoryToggle = (value) => {
    setViewTrajetory(!value)
  }

  return (
    <Container>
      <MapBoxContainer 
        selected={selected}
        getId={getId}
        viewTrajetory={viewTrajetory}
      />
      <div>
        <CustomButton 
          variant="outlined"
          onClick={clear}
        >
          Posições Atuais
        </CustomButton>
        <CustomFormControlLabel
          disabled={selected === "" ? true : false}
          value={viewTrajetory}
          onChange={() => viewTrajetoryToggle(viewTrajetory)}
          control={<Checkbox />}
          label="Visualizar Trajetória"
          labelPlacement="end"
        />
      </div>
    </Container>
  )
}

export default MappingContainer