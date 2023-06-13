import Ordered from '../Pages/Ordered'
import { render, screen } from "@testing-library/react";
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
}]
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
	},
]

getApi.mockResolvedValue([...cafe, ...menu]) //pega só conteudo

describe('Ordered', () => {

	it('should display buttonCafé', () => {
		render(<Ordered />)
		
		const button = screen.getByText('Café da manhã')
		const button2 = screen.getByText('Menu principal')

		expect(button).toBeEnabled();
		expect(button2).toBeEnabled();

	});

	it('should display button', () => {
		render(<Ordered />)
		const onClick = jest.fn()


		const button = screen.getAllByRole('button')

		expect(button).toBeInTheDocument() // espero que os botões estejam no documento e que onclick seja chamada 2x
		expect(onClick).toBeCalledTimes(2)		
	});


	it('should display button2', () => {
		render(<Ordered />)
		
		const buttonMenu = screen.getByRole('button', {name: 'Menu principal'})
		// com getAllByRole não pega os 2 buttons
		



		expect(buttonMenu).toBeEnabled();
		expect(buttonMenu).toMatchSnapshot();
	});

	
});