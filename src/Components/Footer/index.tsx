import * as S from './style'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <S.StyledDiv>
        <S.StyledA href= 'mailto: contact@aiko.digital'>
            <AiOutlineMail/> contact@aiko.digital
        </S.StyledA>
        <S.StyledA href='https://wa.me/553135640815' target='_blank'>
            <BsWhatsapp/> Telefone: (31) 3564-0815
        </S.StyledA>

    </S.StyledDiv>
  )
}

export default Footer;