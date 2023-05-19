import Admin from "../Components/Admin.jsx";
import { render } from "@testing-library/react";


describe('Admin', () => {
	it('renderizar o Admin corretamente', () => {
		render (<Admin></Admin>)
	})
})