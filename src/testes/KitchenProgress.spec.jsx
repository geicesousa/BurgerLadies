import	{	render, fireEvent, screen, waitFor, findByText, findAllByText	}	from	'@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getApi, deleteApi, patchOrders } from '../../src/services/api';
import KitchenProgress from '../Pages/kitchen/KitchenProgress';

jest.mock('react-router-dom');
jest.mock('../../src/services/api');

const order = [
{
  "name": "Pedido Pronto ",
  "table": "4",
  "total": 25,
  "status": "pronto",
  "realizado": "28/06/2023, 15:02:46",
  "data": "2023-06-28T18:02:46.843Z",
  "pedidos": [
    {
      "name": "Tapioca Sertaneja",
      "description": "Carne de sol, queijo de coalho gratinado, cebola e manteiga da terra",
      "price": 15,
      "type": "café da manhã",
      "category": "lanches",
      "amount": 1,
      "id": 34
    },
    {
      "name": "Cuscuz simples na manteiga",
      "description": "Cuscuz (milharina hidratada com manteiga) Sem Recheio.",
      "price": 10,
      "type": "café da manhã",
      "category": "lanches",
      "amount": 1,
      "id": 35
    }
  ],
  "id": 9,
  "datapronto": "2023-06-28T18:05:18.187Z"
},
{
  "name": " Maria",
  "table": "2",
  "total": 14,
  "status": "execução",
  "pedidos": [
    {
      "name": "X-Eggbacon",
      "description": "Pão de hambúrguer, carne 120g, ovo, milho, batata palha, bacon, queijo, salada e maionese da casa",
      "price": 14,
      "type": "menu principal",
      "category": "hambúrgueres",
      "amount": 1,
      "id": 29
    }
  ],
  "id": 13
},
{
  "name": " Teste",
  "table": " ",
  "total": 16,
  "status": "aberto",
  "pedidos": [
    {
      "name": "X-tudo",
      "description": "Pão de hambúrguer, carne 120g, queijo, bacon, milho, batata palha e maionese da casa",
      "price": 16,
      "type": "menu principal",
      "category": "hambúrgueres",
      "amount": 1,
      "id": 30
    }
  ],
  "id": 14
},
{
  "name": " Geice",
  "table": "3",
  "total": 28,
  "status": "entregue",
  "pedidos": [
    {
      "name": "Cuscuz com ovo",
      "description": "Cuscuz com ovo frito",
      "price": 14,
      "type": "café da manhã",
      "category": "lanches",
      "amount": 1,
      "id": 36
    },
    {
      "name": "Bolo",
      "description": "Fatia de bolo simples(consultar sabores)",
      "price": 7,
      "type": "café da manhã",
      "category": "lanches",
      "amount": 1,
      "id": 37
    }],
    "id": 26
}]

getApi.mockResolvedValue(order)
deleteApi.mockResolvedValue(order)
patchOrders.mockResolvedValue(order)

describe('KitchenProgress', ()=>{
  // falta testes: getdelete e renderização dos cards na tela
  describe('buttons', ()=>{

    // it('should respond to click', () => {
    //   render(<KitchenProgress />)
    //   // outra forma de verificar se responde ao click do mouse
    //   fireEvent(screen.getByText('Pedidos abertos'), new MouseEvent('click'));
    //   fireEvent(screen.getByText('Pedidos em execução'), new MouseEvent('click'));
    //   fireEvent(screen.getByText('Pedidos prontos'), new MouseEvent('click'));
    //   fireEvent( screen.getByText('Pedidos entregues'), new MouseEvent('click'));
      
    //   const links = screen.getAllByRole('button');
    //   expect(links).toHaveLength(4);
    // });	

    it('should show component and buttons', ()=>{
      render(<KitchenProgress />)

      const btnAbertos = screen.getByText('Pedidos abertos');
      const btnExecucao = screen.getByText('Pedidos em execução');
      const btnProntos = screen.getByText('Pedidos prontos');
      const btnEntregues = screen.getByText('Pedidos entregues');

      expect(btnAbertos).toBeEnabled();
      expect(btnExecucao).toBeEnabled();
      expect(btnProntos).toBeEnabled();
      expect(btnEntregues).toBeEnabled();
      expect(getApi).toHaveBeenCalledTimes(1);
      expect(getApi).toHaveBeenCalledWith('orders/');
    });

    describe('cards rendered on screen after buttons are clicked', ()=>{
      it('should click open orders and render cards with open status', async ()=>{
        render(<KitchenProgress />)

        const abertos = screen.getByText('Pedidos abertos');
        await userEvent.click(abertos);
  
        // const data = screen.getByText('Data:');
        // const cliente = screen.getByText('Cliente:');
        // const mesa = screen.getByText('Mesa:');
        // const status = screen.getByText('Status:');
        // const preco = screen.getByText('Preço:');
        // const detalhes = screen.getByText('Detalhes do pedido:');
        // const alterarPedido = screen.getByRole('button', { name: 'Alterar status do pedido' });
        // const deletarPedido = screen.getByRole('button', { name: 'Deletar pedido' });

        await waitFor(()=>{
          expect(screen.getByText('Data:')).toBeInTheDocument();
          expect(screen.getByText('Cliente:')).toBeInTheDocument();
          expect(screen.getByText('Mesa:')).toBeInTheDocument();
          expect(screen.getByText('Status:')).toBeInTheDocument();
          expect(screen.getByText('Preço:')).toBeInTheDocument();
          expect(screen.getByText('Detalhes do pedido:')).toBeInTheDocument();
          expect(screen.getByRole('button', { name: 'Alterar status do pedido' })).toBeInTheDocument();
          expect(screen.getByRole('button', { name: 'Deletar pedido' })).toBeInTheDocument();
  
          userEvent.click(screen.getByText('Alterar status do pedido'));
          userEvent.click(screen.getByText('Deletar pedido'));
  
          waitFor(()=>{
            expect(patchOrders).toHaveBeenCalledTimes(0);
            expect(patchOrders).toHaveBeenCalledWith(expect.any(String)); // mock de uma string 
  
            expect(deleteApi).toHaveBeenCalledTimes(1);
            expect(deleteApi).toHaveBeenCalledWith(`orders/${order.id}`); // parametro real
            // waitForElementToBeRemoved para remover o pedido qndo clicar no botão
          });
        });
      });

      it('should click on orders in execution and render the cards with execution status', async ()=>{
        render(<KitchenProgress />)

        const execucao = screen.getByText('Pedidos em execução');
        await userEvent.click(execucao);

        await waitFor(()=>{
          expect(screen.getByText('Data:')).toBeInTheDocument();
          expect(screen.getByText('Cliente:')).toBeInTheDocument();
          expect(screen.getByText('Mesa:')).toBeInTheDocument();
          expect(screen.getByText('Status:')).toBeInTheDocument();
          expect(screen.getByText('Preço:')).toBeInTheDocument();
          expect(screen.getByText('Detalhes do pedido:')).toBeInTheDocument();
          expect(screen.getByRole('button', { name: 'Alterar status do pedido' })).toBeInTheDocument();
          expect(screen.getByRole('button', { name: 'Deletar pedido' })).toBeInTheDocument();

          userEvent.click(screen.getByText('Alterar status do pedido'));
          userEvent.click(screen.getByText('Deletar pedido'));

          waitFor(()=>{
            expect(patchOrders).toHaveBeenCalledTimes(0);
            expect(patchOrders).toHaveBeenCalledWith(expect.any(String)); 

            expect(deleteApi).toHaveBeenCalledTimes(1);
            expect(deleteApi).toHaveBeenCalledWith(`orders/${order.id}`); 
          });
        });
      });

      it('should click ready orders and render the cards with ready status', async ()=>{
        render(<KitchenProgress />)

        const prontos = screen.getByText('Pedidos prontos');
        await userEvent.click(prontos);

        await waitFor(()=>{
          expect(screen.getByText('Data:')).toBeInTheDocument();
          expect(screen.getByText('Cliente:')).toBeInTheDocument();
          expect(screen.getByText('Mesa:')).toBeInTheDocument();
          expect(screen.getByText('Status:')).toBeInTheDocument();
          expect(screen.getByText('Preço:')).toBeInTheDocument();
          expect(screen.getByText('Detalhes do pedido:')).toBeInTheDocument();
          // expect(screen.getByText('Este pedido ficou pronto em 2 minutos.')).toBeInTheDocument();
          expect(screen.getByRole('button', { name: 'Alterar status do pedido' })).toBeInTheDocument();
          expect(screen.getByRole('button', { name: 'Deletar pedido' })).toBeInTheDocument();

          userEvent.click(screen.getByText('Alterar status do pedido'));
          userEvent.click(screen.getByText('Deletar pedido'));

          waitFor(()=>{
            expect(patchOrders).toHaveBeenCalledTimes(1);
            expect(patchOrders).toHaveBeenCalledWith(expect.any(String)); 

            expect(deleteApi).toHaveBeenCalledTimes(1);
            expect(deleteApi).toHaveBeenCalledWith(`orders/${order.id}`); 
          });
        });
      });

      it('should click delivered Orders and render the cards with delivered status', async ()=>{
        render(<KitchenProgress />)

        const entregue = screen.getByText('Pedidos entregues');
        await userEvent.click(entregue);

        await waitFor(()=>{
          expect(screen.getByText('Data:')).toBeInTheDocument();
          expect(screen.getByText('Cliente:')).toBeInTheDocument();
          expect(screen.getByText('Mesa:')).toBeInTheDocument();
          expect(screen.getByText('Status:')).toBeInTheDocument();
          expect(screen.getByText('Preço:')).toBeInTheDocument();
          expect(screen.getByText('Detalhes do pedido:')).toBeInTheDocument();
          // expect(screen.getByText('Este pedido ficou pronto em NaN minutos às Invalid Date.')).toBeInTheDocument();
          expect(screen.getByRole('button', { name: 'Alterar status do pedido' })).toBeInTheDocument();
          expect(screen.getByRole('button', { name: 'Deletar pedido' })).toBeInTheDocument();

          userEvent.click(screen.getByText('Alterar status do pedido'));
          userEvent.click(screen.getByText('Deletar pedido'));

          waitFor(()=>{
            expect(patchOrders).toHaveBeenCalledTimes(1);
            expect(patchOrders).toHaveBeenCalledWith(expect.any(String));
            expect(deleteApi).toHaveBeenCalledTimes(1);
            expect(deleteApi).toHaveBeenCalledWith(`orders/${order.id}`); 
          });
        });
      });
    });
  });
});