// import userEvent from "@testing-library/react";
// import { render, screen, fireEvent } from '@testing-library/react';
// import EditProduct from "../Pages/products/EditProducts";
// import { patchProducts } from "../services/api";

// jest.mock('react-router-dom');
// jest.mock('../services/api');

// describe('EditProducts />', ()=>{
//   it('should display elements', ()=>{
//     render(<EditProduct />)

//     const name = screen.getByLabelText('Nome');
// 		const img = screen.getByLabelText('Imagem');
// 		const description = screen.getByLabelText('Descrição');
//     const price = screen.getByLabelText('Preço');
//     const qntd = screen.getByLabelText('Quantidade');
//     const selectType = screen.getByText('Tipo');
//     const selectCategory = screen.getByText('Categoria');
// 		const btn = screen.getByRole('button', { 'name': 'ok' });

// 		expect(screen.getByText('Adicionar item ao cardápio')).toBeInTheDocument();
// 		expect(name).toBeInTheDocument();
// 		expect(img).toBeInTheDocument();
// 		expect(description).toBeInTheDocument();
// 		expect(price).toBeInTheDocument();
// 		expect(qntd).toBeInTheDocument();
// 		expect(selectType).toBeInTheDocument();
// 		expect(selectCategory).toBeInTheDocument();
// 		expect(btn).toBeEnabled();

//     userEvent.click(btn)
//   });
// });
