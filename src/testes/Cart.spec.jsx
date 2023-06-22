import Cart from '../../src/Pages/ordered/Cart.jsx';
import { render,screen } from "@testing-library/react";
import	userEvent	from	'@testing-library/user-event';

jest.mock('react-router-dom');
// falta o teste do form e da renderização dos cards
describe('Cart', ()=>{
  it('should display elements',()=>{
    const props ={
      cart: [ 
        { id: 1,
          name: "água",
          price: 2.00,
          amount: 5,
        },
        { id: 2,
          name: "cuscuz",
          price: 15.00,
          amount: 2,
        }
      ], 
      handleChange: jest.fn(),
      setCart: jest.fn()
    }
    
    render(<Cart { ...props } />)
    
    const client = screen.getByText('Nome do cliente:');
    const table = screen.getByText('Nº da mesa:');
    const total = screen.getByText('Total:')
    const endOrder = screen.getByRole('button', { "name": 'Finalizar Pedido' });

    expect(client).toBeInTheDocument();
    expect(table).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(endOrder).toBeInTheDocument();
    expect(endOrder).toBeEnabled();
  
  });
  // simular um pedido e enviar  
  // userEvent.click(endOrder);
});