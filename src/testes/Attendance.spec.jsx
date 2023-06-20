import Attendance from '../../src/Pages/attendance/Attendance'
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

jest.mock('react-router-dom', ()=>{
	return { 
		Link: (props)=> <div data-testid="link">{props.children}</div>
	}
});

jest.mock('../../src/Components/header/Header.jsx');
jest.mock('../../src/Pages/kitchen/KitchenProgress.jsx'); // mock para que os links que estáo nesse componente náo sejam detectados

describe('Attendance', () => {
	it('should display elements and if the click works', () => {
		render(<Attendance />);

		const btn = screen.getByTestId('link');

		expect(btn).toBeInTheDocument();
		expect(btn).toBeEnabled();
		expect(btn).toHaveTextContent('Novo pedido');
		userEvent.click(btn);
	});
});