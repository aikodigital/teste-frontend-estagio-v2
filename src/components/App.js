/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import React from "react";

import Map from "./map/Map";
import GlobalResetStyle from "../assets/css/globalReset.css";
import GlobalStyle from "../assets/css/global.css";

function App() {
	return (
		<>
			<GlobalResetStyle />
			<GlobalStyle />
			<Map />
		</>
	);
}

export default App;
