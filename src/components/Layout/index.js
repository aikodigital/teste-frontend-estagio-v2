import React from 'react';
import * as S from './styled';
import Header from '../Header';
import Map from '../Map';

function Layout({children}) {
	return(
		<>
			<Header/>
			<S.WrapperLayout>
				{children}
				<Map/>
				
			</S.WrapperLayout>
		</>
	);
}

export default Layout;