import Ordered from '../Pages/Ordered'
import { render, screen } from "@testing-library/react";

describe('Ordered', () => {
	it('should display elements', () => {
		render(<Ordered></Ordered>)
	});

	it('should display elements', () => {
		render(<Ordered></Ordered>)

		const button = screen.getByRole('button')

		expect(button).toBeInTheDocument()

		screen.debug()
		
	});
});