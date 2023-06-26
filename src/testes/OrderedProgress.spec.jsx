import OrderedProgress from "../Pages/ordered/OrderedProgress.jsx";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";

jest.mock('react-router-dom');
jest.mock('../Pages/ordered/MyCart',()=> 
	()=> <div data-testid = "mycart" />	
);
jest.mock('../Pages/ordered/Cart', ()=>
	()=> <div data-testid = "cart" />	
);
jest.mock('../Pages/ordered/Ordered', ()=>
	()=> <div data-testid = "ordered" />	
);

describe('OrderedProgress', () => {
	it('should display elements', async() => {
		render(<OrderedProgress />);

		const mockMyCart = screen.getByTestId('mycart')
		const mockCart = screen.getByTestId('cart')
		const mockOrdered = screen.getByTestId('ordered')

		expect(mockMyCart).toBeInTheDocument();
		
		userEvent.click(mockCart);
		expect(mockCart).toBeInTheDocument();
		await	waitFor(()=> 
			expect(mockCart).toBeInTheDocument()
		);

		userEvent.click(mockOrdered);
		await	waitFor(()=> 
			expect(mockOrdered).toBeInTheDocument()
		);
	});
});