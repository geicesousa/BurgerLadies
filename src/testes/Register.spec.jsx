import Register from '../Components/Register.jsx';
import { render } from "@testing-library/react";


describe('Register', () => {
	it('should display elements', () => {
		render (<Register></Register>)
	})
})