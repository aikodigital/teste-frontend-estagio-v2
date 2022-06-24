import logo from "../imgs/aiko.png";
import EquipmentList from "./EquipmentList";

function Header() {
	return (
		<header className="border-r border-gray-500">
			<a href="#">
				<img className="px-10 bg-gray-400 bg-center bg-no-repeat bg-cover bg-blend-multiply w-60 py-14 bg-backgroundlogo" src={logo} alt="Aiko" />
			</a>

			<EquipmentList />
		</header>
	);
}

export default Header;
