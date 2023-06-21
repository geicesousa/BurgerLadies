import Cart from '../../src/Pages/ordered/Cart.jsx';
import { render,screen } from "@testing-library/react";
import	userEvent	from	'@testing-library/user-event';

jest.mock('react-router-dom');
// falta o teste do form e da renderização dos cards
describe('Cart', ()=>{
  it('should display elements',()=>{
    render(<Cart cart="cart" setCart="setcart" handleChange="handlechange" />)
    
    const client = screen.getByText('Nome do cliente:');
    const table = screen.getByText('Nº da mesa:');
    const total = screen.getByText('Total:')
    const endOrder = screen.getByRole('button', { "name": 'Finalizar Pedido' });

    expect(client).toBeInTheDocument();
    expect(table).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(endOrder).toBeInTheDocument();
    expect(endOrder).toBeEnabled();
    userEvent.click(endOrder);
  });
});