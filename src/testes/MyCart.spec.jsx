import MyCart from '../../src/Pages/ordered/Cart.jsx';
import { render,screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';


jest.mock('react-router-dom');
describe('<MyCart />', ()=> {
  it('renders MyCart correctly', ()=> {
    render(<MyCart  />);

    const back = screen.getByText('Voltar para Menu');
    const logout = screen.getByText('Sair');

    expect(back).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
    // userEvent.click(logout);

  });
}); 
// DANDO ERRO NO NAVIGATE
