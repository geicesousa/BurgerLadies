import AdcProducts from '../Pages/AdcProducts.jsx'
import { render } from "@testing-library/react";

describe('Adiciona produtos a api', () => {
	it('should display elements', () => {
		render(<AdcProducts></AdcProducts>)
	})
})