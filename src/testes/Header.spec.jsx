import Header from "../Components/Header.jsx";
import { render } from "@testing-library/react";


describe('Header', () => {
	it('renderizar o Header corretamente', () => {
		render (<Header></Header>)
	})
})