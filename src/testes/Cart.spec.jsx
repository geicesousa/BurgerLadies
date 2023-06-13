import Cart from '../Pages/Cart.jsx';
import { render } from "@testing-library/react";

describe('Cart', ()=>{
  it('should display elements',()=>{
    render(<Cart cart="cart" setCart="setcart" handleChange="handlechange" />)
  });
});