import	{	render	}	from	'@testing-library/react';
import Select from '../Components/Select';

describe('<Select />', ()=>{
  it('renders a select correctly', ()=>{
    render(<Select 
      text="text" type="type" value="value" value1="value1" value2="value2" value3="value3" value4="value4" name="name"
      placeholder="placeholder" onChange="onchange" />)
  });
});
