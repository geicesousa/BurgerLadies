import Register from "../Components/Register.jsx";
import { render } from "@testing-library/react";


describe('Register', () => {
	it('renderizar o Register corretamente', () => {
		render (<Register></Register>)
	})
})