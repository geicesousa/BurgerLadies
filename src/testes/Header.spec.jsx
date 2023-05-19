import Header from "../Components/Header.jsx";
import { render } from "@testing-library/react";


describe('Header', () => {
	it('should display elements', () => {
		render (<Header></Header>)
	})
})