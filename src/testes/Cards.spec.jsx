import	{	render, screen	}	from	'@testing-library/react';
import Cards from '../Components/cards/Cards';
import userEvent from '@testing-library/user-event';

jest.mock('react-router-dom');

describe('<Cards/>', ()=>{
  it('renders snack cards correctly', ()=>{
    render(<Cards item="item" handleClick="handleclick" />)

    const img = screen.getByRole('img');
    const btn = screen.getByRole('button');

    expect(img).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(btn).toBeEnabled();
    userEvent.click(btn);
  });
});
