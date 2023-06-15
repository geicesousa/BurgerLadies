import Register from '../Pages/Register.jsx';
import { render, screen, fireEvent, cleanup, getByText, getByLabelText } from "@testing-library/react";
import { UserEvent } from '@testing-library/user-event';
import { createUser } from '../services/api.jsx';
import { userEvent } from '@testing-library/user-event';

afterEach(cleanup)
jest.mock('../services/api.jsx');
const user =  {
	"email": "geice@gmail.com",
	"password": "$2a$10$AOgwMSHDJlfckHNYe4B4/O4WItZzocsogjkEHwbJKZnpBlLKUo0kG",
	"name": " Geice Souza",
	"role": "atendente",
	"id": 12
};

createUser.mockResolvedValue(user);
createUser.mockResolvedValue({});

describe('Register', () => {
	it('should verify a state formulary', () => {
		const { getByText, getByLabelText} = render(<Register></Register>);
		expect(getByText(/Change/i).textContent).toBe('name');

		fireEvent.change(getByLabelText('Nome do colaborador'), {target: {value: ' '}});

		expect(getByText(/Change/i).textContent).not.toBe('name')
	});

	it('should verify send formulary',()=>{
		const { getByText, getByLabelText } = render(<Register />);
		
		const cadastra = getByText('Efetuar cadastro');

		UserEvent.click(cadastra);

		expect(getByText('Nome do colaborador')).toBeInTheDocument();
		expect(getByLabelText('Nome do colaborador')).toBeInTheDocument();
		
	});

	it('should show a button', ()=>{

		const { getByText, getByLabelText } = render(<Register />);

		expect(getByText('Efetuar cadastro')).toBeTruthy();
		expect(getByLabelText('Nome do colaborador')).toBeInTheDocument()
		expect(getByLabelText('Nome do colaborador')).toBeTruthy
	});

	it('teste renderização', ()=>{
		render(<Register />);
		screen.getByText('Nome do colaborador')
		
	});
});