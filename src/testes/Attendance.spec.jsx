import Attendance from '../Pages/Attendance.jsx'
import { render } from "@testing-library/react";


describe('Attendance', () => {
	it('should display elements', () => {
		render(<Attendance></Attendance>)
	})
})