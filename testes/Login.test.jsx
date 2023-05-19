/**
* @vitest-environment jsdom
*/

import Login from "../src/Components/Login.jsx";
import '@testing-library/jest-dom'
import { describe } from 'vitest'
import { render } from "@testing-library/react";

describe('<Login>', () => {
	it('renderizar o Login corretamente', () => {
		render (<Login></Login>)
	})
})