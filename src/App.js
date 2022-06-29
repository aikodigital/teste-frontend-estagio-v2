import { useState } from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { dateFormater } from './utils/dateFormat'
import { ImMenu } from 'react-icons/im'

import "./index.css"

function App() {
	const date = new Date()
	const [viewMenu, setViewMenu] = useState(true)

	return (
		<div className="flex w-full min-h-[100vh] text-white">
			<div className={`${ viewMenu ? "max-w-[80vw]" : "max-w-0" } md:max-w-full overflow-hidden md:relative duration-200`}>
				<Header />
			</div>
			<div className="flex flex-col flex-1 min-w-[50vw] gap-10 text-black bg-white px-4 py-2">
				<section>
					<div className="flex items-center mt-3 gap-2 text-2xl">
						<button className="md:hidden" onClick={() => setViewMenu(!viewMenu)}><ImMenu /></button>
						<h1 className="">Equipamentos</h1>
					</div>
					<hr />
					<span className="text-slate-600 text-sm">{dateFormater(date, "weekDay")}</span>
				</section>
				<Main />
			</div>
		</div>
	)
}

export default App
