
import NotFound from "../Components/NotFound.jsx";
import { render } from "@testing-library/react";


describe('NotFound', () => {
	it('renderizar o NotFound corretamente', () => {
		render (<NotFound></NotFound>)
	})
})