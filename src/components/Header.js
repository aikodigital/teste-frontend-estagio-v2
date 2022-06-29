import { AiOutlineHome } from 'react-icons/ai'
import { BsBagFill,  BsPersonCircle } from 'react-icons/bs'
import { IoMdHelpCircleOutline } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'

export function Header() {

	return (
		<header className="md:relative md:flex flex-col min-h-[100vh] justify-between bg-teal-900">
			<aside className="flex flex-col">
				<h1 className="self-center py-4 font-bold text-3xl">
					AIKO
				</h1>
				<nav className="flex flex-col ml-5">
					<ul>
						<li className="flex items-center px-4 py-2 gap-2">
							<AiOutlineHome /><span className="translate-y-[-2px]">Dashboard</span>
						</li>
						<li className="flex items-center bg-white text-black font-semibold px-4 py-2 gap-2 rounded-l-xl">
							<BsBagFill /><span className="translate-y-[-2px]">Equipamentos</span>
						</li>
						<li className="flex items-center px-4 py-2 gap-2">
							<IoSettingsOutline /><span className="translate-y-[-2px]">Configurações</span>
						</li>
						<li className="flex items-center px-4 py-2 gap-2">
							<IoMdHelpCircleOutline /><span className="translate-y-[-2px]">Ajuda</span>
						</li>
					</ul>
				</nav>
			</aside>
			<button className="flex items-center gap-2 px-6 py-2">
				<BsPersonCircle /><span className="translate-y-[-2px]">User123</span>
			</button>
		</header>
	)
}
