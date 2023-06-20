import	{	render, fireEvent, screen	}	from	'@testing-library/react';
import userEvent from '@testing-library/user-event';
import KitchenProgress from '../../src/Pages/kitchen/KitchenProgress';
import { getApi, deleteApi } from '../../src/services/api';

jest.mock('react-router-dom');
jest.mock('../services/api');
const order = [
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
  "status": "aberto",
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
    }]
}]
getApi.mockResolvedValue(...order)
deleteApi.mockResolvedValue(...order)

describe('kitchenProgress', ()=>{
  // falta testes: getdelete e renderização dos cards na tela
  describe('buttons', ()=>{

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

    it('should respond to click', () => {
      render(<KitchenProgress />)
      // responde ao click do mouse
      fireEvent(screen.getByText('Pedidos em execução'), new MouseEvent('click'));
      fireEvent(screen.getByText('Pedidos prontos'), new MouseEvent('click'));
      fireEvent( screen.getByText('Pedidos entregues'), new MouseEvent('click'));
      // substituir por userEvent ou fireevent.click(elemento)
    });	

    it('cards são renderizados na tela após o click nos botões', ()=>{
      render(<KitchenProgress />)





      // expect(deleteApi).toHaveBeenCalledTimes(1);
      // expect(deleteApi).toHaveBeenCalledWith(expect.any(String));
      // expect(deleteApi).toHaveBeenCalledWith(`orders/${order.id}`);
    })
  });
});

// waitForElementToBeRemoved para remover o pedido qndo clicar no botão