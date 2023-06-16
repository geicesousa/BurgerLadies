import Register from '../Pages/Register.jsx';
import { render, screen, waitFor } from "@testing-library/react";
import { createUser } from '../services/api.jsx';
import { toast } from "react-toastify";
import userEvent from '@testing-library/user-event';

// afterEach(cleanup)
jest.mock('../services/api.jsx');
jest.mock('react-router-dom');
jest.mock('react-toastify');
const user =  {
	"email": "geice@gmail.com",
	"password": "$2a$10$AOgwMSHDJlfckHNYe4B4/O4WItZzocsogjkEHwbJKZnpBlLKUo0kG",
	"name": " Geice Souza",
	"role": "atendente",
	"id": 12
};

createUser.mockResolvedValue({"ok":true}); // resposta com respnse.ook
createUser.mockResolvedValue({});

describe('Register', () => {
	it('should render a form', () => {
		render(<Register />);

		const colaborador = screen.getByLabelText('Nome do colaborador');
		const btn = screen.getByText('Efetuar cadastro');

		expect(colaborador).toBeInTheDocument();
		expect(btn).toBeInTheDocument();
	});

	it('should register employee', async()=>{
		render(<Register />);

		createUser.mockResolvedValue({"ok": true}); // resposta com respnse.ook
		
		const colaborador = screen.getByLabelText('Nome do colaborador');
		const email = screen.getByLabelText('E-mail do colaborador');
		const senha = screen.getByText('Senha');
		const select = screen.getByText('Selecione o cargo');
		const cadastra = screen.getByText('Efetuar cadastro');

		userEvent.type(colaborador, 'Geice Sousa');
		userEvent.type(email, 'geice@gmail.com');
		userEvent.type(senha, '123456');
		userEvent.selectOptions(select, screen.getByText('Atendente'));
		// userEvent.selectOptions(select, screen.getByRole("listbox", {value: 'Cozinha'}));
		// fireEvent.change(select, { target: { value: "Cozinha" } })
		userEvent.click(cadastra);
		await waitFor(()=>
			
			// expect(toast).toBeCalledTimes(1),
			expect(screen.getByText('Cadastro realizado com sucesso!')).toBeInTheDocument()
		)
		expect(createUser).toBeCalledTimes(1)
		expect(createUser).toBeCalledWith(colaborador, email, senha, select)	
	});
	//substituir fire por userevent

	it('should show a button', ()=>{

		const { getByText, getByLabelText } = render(<Register />);

		expect(getByText('Efetuar cadastro')).toBeTruthy();
		expect(getByLabelText('Nome do colaborador')).toBeInTheDocument()
		expect(getByLabelText('Nome do colaborador')).toBeTruthy()
	});

	it('teste renderização', ()=>{
		render(<Register />);
		screen.getByText('Nome do colaborador')
		
	});
});