import NotFound from "../../src/Pages/notfound/NotFound.jsx";
import { render, screen } from "@testing-library/react";

jest.mock('react-router-dom');
describe('NotFound', () => {
	it('should display elements', () => {
		render (<NotFound />);

		const title1 = screen.getByText('Ops!');
		const title2 = screen.getByText('404');
		const text = screen.getByText('Page Not Found');

		expect(title1).toBeInTheDocument();
		expect(title2).toBeInTheDocument();
		expect(text).toBeInTheDocument();
	});
});