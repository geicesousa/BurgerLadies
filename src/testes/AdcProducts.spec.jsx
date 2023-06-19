import AdcProducts from '../../src/Pages/products/AdcProducts.jsx'
import { render, screen } from "@testing-library/react";

jest.mock('react-router-dom');

describe('Adiciona produtos a api', () => {
	it('should display elements', () => {
		render(<AdcProducts />);

		const btn = screen.getByText('Adicionar item ao cardápio');
		expect(btn).toBeEnabled();
	});
});