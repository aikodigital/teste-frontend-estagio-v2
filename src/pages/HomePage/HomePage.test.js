
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import HomePage from './HomePage'

describe('HomePage', () => {
    const { container } = render(<Router><HomePage /></Router>)
    test("Deve conter o componente Nav com o botão Home", () => {

        const navbar = container.querySelector("nav")
        expect(navbar)
    })

    test("Deve conter o componente Card", () => {
        const card = container.querySelector("#card")
        expect(card)
    })

})