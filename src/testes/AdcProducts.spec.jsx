import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AdcProducts from '../../src/Pages/products/AdcProducts.jsx';
import { createProducts } from '../services/api.jsx';

jest.mock('react-router-dom');
jest.mock("../services/api.jsx");
describe('<AdcProducts />', () => {
	it('should display elements', () => {
		render(<AdcProducts />);

		// const title = screen.getByText('Adicionar item ao cardápio');
		const name = screen.getByLabelText('Nome');
		const img = screen.getByLabelText('Imagem');
		const description = screen.getByLabelText('Descrição');
    const price = screen.getByLabelText('Preço');
    const qntd = screen.getByLabelText('Quantidade');
    const selectType = screen.getByText('Tipo');
    const selectCategory = screen.getByText('Categoria');
		const btn = screen.getByRole('button', { 'name': 'Adicionar item ao cardápio' });

		// expect(screen.getAllByText('Adicionar item ao cardápio')).toBe([]);
		expect(name).toBeInTheDocument();
		expect(img).toBeInTheDocument();
		expect(description).toBeInTheDocument();
		expect(price).toBeInTheDocument();
		expect(qntd).toBeInTheDocument();
		expect(selectType).toBeInTheDocument();
		expect(selectCategory).toBeInTheDocument();
		expect(btn).toBeEnabled();
	});

	it('should add products to API', ()=>{
		render(<AdcProducts />);

		createProducts.mockResolvedValue(expect.anything());

		const name = screen.getByLabelText('Nome');
		const img = screen.getByLabelText('Imagem');
		const description = screen.getByLabelText('Descrição');
    const price = screen.getByLabelText('Preço');
    const qntd = screen.getByLabelText('Quantidade');
    const selectType = screen.getByText('Tipo');
    const selectCategory = screen.getByText('Categoria');
		const btn = screen.getByRole('button');

		userEvent.type(name, 'Cuscuz Nordestino');
		userEvent.type(description, 'Cuscuz com carne de sertão e queijo coalho');
		userEvent.type(qntd, 1);
		userEvent.selectOptions(selectType, screen.getByText('Menu Principal'));
		userEvent.selectOptions(selectCategory, screen.getByText('Lanches'));
		userEvent.type(price, 15.00);
		userEvent.click(btn);

		expect(createProducts).toHaveBeenCalledTimes(1);
		expect(createProducts).toHaveBeenCalledWith(name, description, img, price, selectCategory, selectType, qntd);
	});

});