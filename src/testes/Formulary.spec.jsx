import	{	render	}	from	'@testing-library/react';
import Formulary from '../Components/formulary/Formulary';

describe('<Formulary />', ()=>{
  it('renders a form correctly', ()=>{
    render(<Formulary 
      text="text" type="type" value="value" name="name"
      placeholder="placeholder" onChange="onchange" 
    />)
  });
});
