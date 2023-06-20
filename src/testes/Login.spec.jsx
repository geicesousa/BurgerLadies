import Login from '../../src/Pages/login/Login.jsx';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

jest.mock('react-router-dom');
jest.mock('../services/api.jsx');

describe('Login', () => {
	it('should display elements', () => {
		render (<Login />);

		const title = screen.getByText('Faça seu login');
		const email = screen.getByLabelText('Email');
		const senha = screen.getByLabelText('Senha');
		const btn = screen.getByText('Login');
		
		expect(title).toBeInTheDocument();
		expect(email).toBeInTheDocument();
		expect(senha).toBeInTheDocument();
		expect(btn).toBeInTheDocument();
	});

	it('must login', ()=>{
		render (<Login />);

		const btn = screen.getByText('Login');

		expect(btn).toBeEnabled();
		userEvent.click(btn);
	});
});
