import NovoPedido from "../Components/NovoPedido.jsx";
import { render } from "@testing-library/react";


describe('NovoPedido', () => {
	it('renderizar o NovoPedido corretamente', () => {
		render (<NovoPedido></NovoPedido>)
	})
})