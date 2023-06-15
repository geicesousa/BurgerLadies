import Cart from '../Pages/Cart.jsx';
import { render,screen } from "@testing-library/react";

// falta o teste do form e da renderização dos cards
describe('Cart', ()=>{
  it('should display elements',()=>{
    render(<Cart cart="cart" setCart="setcart" handleChange="handlechange" />)

    const endOrder = screen.getByText('Finalizar Pedido');

    expect(endOrder).toBeInTheDocument();
    expect(endOrder).toBeEnabled();
  });
});