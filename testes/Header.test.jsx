/**
* @vitest-environment jsdom
*/

import Header from "../src/Components/Header.jsx";
import '@testing-library/jest-dom'
import { describe } from 'vitest'
import { render } from "@testing-library/react";


describe('<Header>', () => {
	it('renderizar o Header corretamente', () => {
		render (<Header></Header>)
	})
})