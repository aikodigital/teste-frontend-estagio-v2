import logo from "../imgs/aiko.png";
import EquipmentList from "./EquipmentList";

function Header({ filterConfigs, setFilterConfigs }: any) {
	return (
		<header 
			className="flex flex-col min-h-screen min-w-[200px] max-w-[280px] overflow-auto border-r border-gray-500"
		>
			<a href="#">
				<img
					className="flex-1 px-10 bg-gray-400 bg-center bg-no-repeat bg-cover bg-blend-multiply py-14 bg-backgroundLogo"
					src={logo}
					alt="Aiko" 
				/>
			</a>

			<EquipmentList filterConfigs={filterConfigs} setFilterConfigs={setFilterConfigs} />
		</header>
	);
}

export default Header;
