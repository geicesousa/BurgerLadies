import MyCart from '../../src/Pages/ordered/MyCart.jsx';
import { render,screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

jest.mock('../../src/Components/header/Header.jsx');
jest.mock('react-router-dom', ()=>{
	return { 
		Link: (props)=> <div data-testid="link"> {props.children} </div>,
    useNavigate: jest.fn()
	}
});

describe('<MyCart />', ()=> {
  it('renders MyCart correctly', ()=> {
    render(<MyCart size="size" setShow="setShow" />);

    const logout = screen.getByTestId('link');
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    userEvent.click(button);
    expect(logout).toBeInTheDocument();
    userEvent.click(logout);
  });
}); 
