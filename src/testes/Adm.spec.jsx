import Adm from "../../src/Pages/adm/Adm.jsx";
import { getByText, render, screen } from "@testing-library/react";

jest.mock('react-router-dom');

describe('Adm', () => {
	it('should display elements', () => {
		render(<Adm />)

		const btnAdc = screen.getByRole("link");

		expect(btnAdc).toBeInTheDocument();
	})
})