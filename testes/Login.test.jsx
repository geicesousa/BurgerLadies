/**
* @vitest-environment jsdom
*/

import Login from "../src/Components/Login.jsx";
import '@testing-library/jest-dom'
import { describe } from 'vitest'
import { render, jest } from "@testing-library/react";
import { useNavigate } from "react-router-dom";


jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe('<Login>', () => {
	it('renderizar o Login corretamente', () => {
		render (<Login></Login>)
	})
})