import Ordered from '../Pages/Ordered'
import { render, screen, fireEvent } from "@testing-library/react";
import	userEvent	from	'@testing-library/user-event';
import	{getApi}	from	'../services/api';

jest.mock('../services/api')
const menu =  [{
	"name": "Hambúrguer Simples",
	"description": "Pão de hambúrguer, carne 120g, queijo, salada e maionese da casa",
	"price": 10,
	"type": "menu principal",
	"category": "hambúrgueres",
	"amount": 1,
	"id": 27
},
{
	"name": "X-Eggbacon",
	"description": "Pão de hambúrguer, carne 120g, ovo, milho, batata palha, bacon, queijo, salada e maionese da casa",
	"price": 14,
	"type": "menu principal",
	"category": "hambúrgueres",
	"amount": 1,
	"id": 29
},
{
	"name": "X-tudo",
	"description": "Pão de hambúrguer, carne 120g, queijo, bacon, milho, batata palha e maionese da casa",
	"price": 16,
	"type": "menu principal",
	"category": "hambúrgueres",
	"amount": 1,
	"id": 30
}];
const cafe = [
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
	},
	{
		"name": "Cuscuz com ovo",
		"description": "Cuscuz com ovo frito",
		"price": 14,
		"type": "café da manhã",
		"category": "lanches",
		"amount": 1,
		"id": 36
	}
]

getApi.mockResolvedValue([...cafe, ...menu]) // o spread operator pega só conteudo
const handleClick = jest.fn() // mock do onclick
// falta teste: renderização de cards na tela

describe('Ordered', () => {
	describe('buttons', () => {
		it('should show button behavior', () => {
			render(<Ordered />)
			
			const button = screen.getByText('Café da manhã');
			const button2 = screen.getByText('Menu principal');

			expect(button).toBeEnabled();
			expect(button2).toBeEnabled();
			expect(getApi).toHaveBeenCalledTimes(1);
			expect(getApi).toBeCalledWith('products/');
			// expect(getApi).toHaveBeenCalledWith('products/');
		});
		
		it('should respond to click', () => {
			render(<Ordered />)
			// responde ao click do mouse
			fireEvent(screen.getByText('Café da manhã'), new MouseEvent('click'))
			fireEvent(screen.getByText('Menu principal'), new MouseEvent('click'))
		});	
	});

	// describe('display cards', () => {
	// });
});

	// toHaveBeenCalledWith(expect.anything())
