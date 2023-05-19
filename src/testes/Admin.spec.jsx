import Admin from "../Components/Admin.jsx";
import { render } from "@testing-library/react";


describe('Admin', () => {
	it('should display elements', () => {
		render (<Admin></Admin>)
	})
})