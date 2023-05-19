
import NotFound from "../Components/NotFound.jsx";
import { render } from "@testing-library/react";


describe('NotFound', () => {
	it('should display elements', () => {
		render (<NotFound></NotFound>)
	})
})