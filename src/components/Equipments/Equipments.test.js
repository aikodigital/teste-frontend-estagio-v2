import { render, screen } from '@testing-library/react'
import Map from '../Map'
import Equipments from './index'

it('Testando o componente Equipments', () => {
	render(<Map content={<Equipments />} zoom={11} />)
	expect(screen.getByTestId('section-equipments')).toBeInTheDocument()
})

