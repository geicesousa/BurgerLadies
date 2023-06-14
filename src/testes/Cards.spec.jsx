import	{	render	}	from	'@testing-library/react';
import Cards from '../Components/Cards';

describe('<Cards/>', ()=>{
  it('renders snack cards correctly', ()=>{
    render(<Cards item="item" handleClick="handleclick" />)
  });
});
