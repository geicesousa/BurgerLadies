import AdcProducts from '../Pages/AdcProducts.jsx'
import { render, screen } from "@testing-library/react";

describe('Adiciona produtos a api', () => {
	it('should display elements', () => {
		render(<AdcProducts />);

		const btn = screen.getByText('Adicionar item ao cardápio');
		expect(btn).toBeEnabled();
	});
});