import MyCart from '../../src/Pages/ordered/Cart.jsx';
import { render,screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

jest.mock('react-router-dom', ()=>{
	return { 
		Link: (props)=> <div data-testid="link"> {props.children} </div>,
    useNavigate: jest.fn()
	}
});

describe('<MyCart />', ()=> {
  it('renders MyCart correctly', ()=> {
    render(<MyCart size="size" setShow="setShow" />);

    const back = screen.getByText('Voltar para Menu');
    const logout = screen.getByTestId('link');
    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
    expect(back).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
    userEvent.click(logout);

  });
}); 
