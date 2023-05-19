/**
* @vitest-environment jsdom
*/

import NotFound from "../src/Components/NotFound.jsx";
import '@testing-library/jest-dom'
import { describe } from 'vitest'
import { render } from "@testing-library/react";


describe('<NotFound>', () => {
	it('renderizar o NotFound corretamente', () => {
		render (<NotFound></NotFound>)
	})
})