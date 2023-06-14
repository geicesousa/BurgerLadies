import ListProducts from '../Pages/ListProducts.jsx';
import { render } from "@testing-library/react";

describe('ListProducts', ()=>{
  it('should display elements',()=>{
    render(<ListProducts></ListProducts>)
  });
});