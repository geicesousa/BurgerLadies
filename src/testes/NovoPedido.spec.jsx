import NovoPedido from '../Components/NovoPedido.jsx';
import { render } from "@testing-library/react";

describe('NovoPedido', () => {
	it('should display elements', () => {
		render(<NovoPedido></NovoPedido>)
	})
})