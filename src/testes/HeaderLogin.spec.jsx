import	{	render, screen}	from	'@testing-library/react';
import HeaderLogin from '../../src/Components/header/HeaderLogin';

jest.mock('react-router-dom');

describe('<HeaderLogin />', ()=>{
  it('should display element', ()=>{
    render(<HeaderLogin />)

    expect(screen.getByRole('img')).toBeInTheDocument();
  })
})