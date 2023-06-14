import Register from '../Pages/Register.jsx';
import { render, screen } from "@testing-library/react";
import { createUser } from '../services/api.jsx';

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
	it('should display elements', () => {
		render(<Register />)

		const form = screen.getByRole('form');

		expect(screen.getByRole('form')).toBeVisible();
		expect(form).toBeInTheDocument()

	})
})