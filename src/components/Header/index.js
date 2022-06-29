import * as S from './styled';
import aiko from '../../assets/img/aiko.png';

function Header () {
	
	return (
		<S.Wrapper>
			<img src={aiko} alt='logo'/>
		</S.Wrapper>
	);
}

export default Header;
