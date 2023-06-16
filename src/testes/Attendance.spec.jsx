import Attendance from '../Pages/Attendance.jsx'
import { render, screen } from "@testing-library/react";

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