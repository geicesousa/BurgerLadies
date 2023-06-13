import Kitchen from '../Pages/Kitchen.jsx';
import { render } from "@testing-library/react";

describe('Kitchen', () => {
	it('should display elements', () => {
		render(<Kitchen></Kitchen>)
	});
});