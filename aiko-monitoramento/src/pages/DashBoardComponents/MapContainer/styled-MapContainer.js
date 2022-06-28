import styled from "styled-components"

import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';


import { neutralColor } from "../../../constants/colors"

export const Container = styled.div`
  background-color: ${neutralColor};
    flex-grow: 9;
    display: flex;
    flex-direction: column;    
`
export const CustomFormControlLabel = styled(FormControlLabel)`
  user-select: none;
  position: relative;
  margin: 15px;
  left: 40px;
  bottom: 20px;
`
export const CustomButton = styled(Button)`
  position: relative;
  margin: 15px;
  left: 20px;
  bottom: 20px;
`