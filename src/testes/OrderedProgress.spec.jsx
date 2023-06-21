import OrderedProgress from "../Pages/ordered/OrderedProgress.jsx";
import { render } from "@testing-library/react";

jest.mock('react-router-dom');
jest.mock('../Pages/ordered/MyCart')
jest.mock('../Pages/ordered/Ordered')
jest.mock('../Pages/ordered/Cart')

describe('OrderedProgress', () => {
	it('should display elements', () => {
		render(<OrderedProgress />)
	})
})