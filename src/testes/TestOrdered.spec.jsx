import TesteOrdered from "../Pages/TesteOrdered.jsx";
import { render } from "@testing-library/react";

describe('TesteOrdered', () => {
	it('should display elements', () => {
		render(<TesteOrdered></TesteOrdered>)
	})
})