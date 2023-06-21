import	{	render	}	from	'@testing-library/react';
import EditUser from '../Pages/users/EditUser';

jest.mock('../../src/Components/header/Header.jsx');
jest.mock('react-router-dom');

describe('<EditUser/>', ()=>{
  it('renders a EditUser correctly', ()=>{
    render(<EditUser props="props" />)
  });
});
