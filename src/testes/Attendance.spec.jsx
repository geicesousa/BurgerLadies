import Attendance from '../../src/Pages/attendance/Attendance'
import { render, screen } from "@testing-library/react";

jest.mock('react-router-dom');

describe('Attendance', () => {
	it('should display elements', () => {
		render(<Attendance />);

		const btn = screen.getByText('Novo Pedido');

		expect(btn).toBeEnabled();
		expect(btn).toBeInTheDocument();
	});
	it('should elements', () => {
		const {getByText} = render(<Attendance />)

		screen.getByText('Novo Pedido')
		expect(getByText('Novo Pedido')).toBeEnabled();
		
		expect(getByText('Novo Pedido')).toBeInTheDocument();
	});
});