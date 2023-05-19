import Atentende from "../Components/Atentende.jsx";
import { render } from "@testing-library/react";


describe('Atentende', () => {
	it('renderizar o Header corretamente', () => {
		render (<Atentende></Atentende>)
	})
})