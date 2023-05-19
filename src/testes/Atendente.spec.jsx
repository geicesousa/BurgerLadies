import Atendente from '../Components/Atendente.jsx'
import { render } from "@testing-library/react";


describe('Atentende', () => {
	it('should display elements', () => {
		render(<Atendente></Atendente>)
	})
})