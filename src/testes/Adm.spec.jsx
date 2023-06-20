import Adm from '../../src/Pages/adm/Adm.jsx';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('react-router-dom', ()=>{
	return { 
		Link: (props)=> <div data-testid="link"> {props.children} </div>
	}
});

jest.mock('../../src/Components/header/Header.jsx');

describe('Adm', () => {
	it('should display elements', () => {
		render(<Adm />)

		const link = screen.getAllByTestId('link');

		expect(link).toHaveLength(4);
		expect(link[0]).toHaveTextContent('Adicionar novo colaborador');
		expect(link[1]).toHaveTextContent('Lista de colaboradores');
		expect(link[2]).toHaveTextContent('Adicionar item ao cardápio');
		expect(link[3]).toHaveTextContent('Lista de produtos');
		userEvent.click(link[0]);
	});
});