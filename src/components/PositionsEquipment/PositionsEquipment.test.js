import { render, screen } from '@testing-library/react'
import Map from '../Map'
import PositionsEquipment from './index'

it('Testando o componente PositionsEquipment', () => {
	const id = 'a7c53eb1-4f5e-4eba-9764-ad205d0891f9'
	const iconId = 'a3540227-2f0e-4362-9517-92f41dabbfdf'
	render(<Map content={<PositionsEquipment id={id} iconId={iconId} />} zoom={11} />)
	expect(screen.getByTestId('section-positions')).toBeInTheDocument()
})