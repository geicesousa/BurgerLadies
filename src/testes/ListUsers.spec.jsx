import ListUsers from '../Pages/ListUsers.jsx';
import { render } from "@testing-library/react";

describe('ListUsers', ()=>{
  it('should display elements', ()=>{
    render(<ListUsers></ListUsers>)
  });
});