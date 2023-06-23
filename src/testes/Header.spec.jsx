import Header from "../Components/header/Header.jsx";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
// import { logout } from "../../Pages/login/Login";
// import Login from "../../Pages/login/Login";

jest.mock('react-router-dom');
jest.mock('../Pages/login/Login');
jest.mock('react-router-dom', ()=>{
	return { 
    useNavigate: jest.fn()
	}
});
describe('<Header />', () => {
	it('should display elements', () => {
		render(<Header />)

		const buttons = screen.getAllByRole('button');
		const img = screen.getByRole('img');

		expect(buttons).toHaveLength(2);
		expect(buttons[0]).toHaveTextContent('Voltar');
		expect(buttons[0]).toBeInTheDocument();
		expect(buttons[0]).toBeEnabled();
		expect(buttons[1]).toHaveTextContent('Sair');
		expect(buttons[1]).toBeInTheDocument();
		expect(buttons[1]).toBeEnabled();
		expect(img).toBeInTheDocument();
	});

	it('should click on the buttons', async ()=>{
		// logout.mockResolvedValue()
		
		const btnLogout = screen.getByText('Sair');
		
		// expect(btnLogout).toBeEnabled()
		userEvent.click(btnLogout);
		// expect(logout).toHaveBeenCalledTimes(1);
		// await waitFor(()=>{
		// 	render(<Login />)
		// });

	});

});