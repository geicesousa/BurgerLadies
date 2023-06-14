import	{	render	}	from	'@testing-library/react';
import EditUser from '../Components/EditUser';

describe('<EditUser/>', ()=>{
  it('renders a EditUser correctly', ()=>{
    render(<EditUser props="props" />)
  });
});
