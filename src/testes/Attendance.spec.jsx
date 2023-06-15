import Attendance from '../Pages/Attendance.jsx'
import { render, screen } from "@testing-library/react";


describe('Attendance', () => {
	it('should display elements', () => {
		// const {getByText} = render(<Attendance />)
		render(<Attendance />);

		const btn = screen.getByRole('button', {"name": "Novo Pedido"});

		// expect(btn).toBeEnabled();
		expect(btn).toBeInTheDocument();
		// expect(getByText('Novo Pedido')).toBeInTheDocument();
	})
})