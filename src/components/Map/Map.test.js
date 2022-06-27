import { render, screen } from '@testing-library/react'
import Map from './index'

it('Testando o componente Map', () => {
	render(<Map />)
	expect(screen.getByTestId('section-map')).toBeInTheDocument()
})