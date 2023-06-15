import Adm from "../Pages/Adm.jsx";
import { getByText, render, screen } from "@testing-library/react";

describe('Adm', () => {
	it('should display elements', () => {
		render(<Adm />)

		const btn = screen.getByRole('link')

		expect(getByText('Adicionar novo colaborador')).toBeInTheDocument();
		expect(btn).toBeInTheDocument();
		expect(btn).toBeValid();
	})
})