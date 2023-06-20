import Cart from '../../src/Pages/ordered/Cart.jsx';
import { render,screen } from "@testing-library/react";

jest.mock('react-router-dom');
// falta o teste do form e da renderização dos cards
describe('Cart', ()=>{
  it('should display elements',()=>{
    render(<Cart cart="cart" setCart="setcart" handleChange="handlechange" />)

    const endOrder = screen.getByText('Finalizar Pedido');
    // getByRole('img')
    expect(endOrder).toBeInTheDocument();
    expect(endOrder).toBeEnabled();
  });
});