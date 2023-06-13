import	{	render	}	from	'@testing-library/react';
import Formulary from '../Components/Formulary';
import Select from '../Components/Select';
import MyCart from '../Components/MyCart';
import Cards from '../Components/Cards';
import EditUser from '../Components/EditUser';
import Header from '../Components/Header';

describe('<Formulary />', ()=>{
  it('renders a form correctly', ()=>{
    render(<Formulary 
      text="text" type="type" value="value" name="name"
      placeholder="placeholder" onChange="onchange" />)
  });
});

describe('<Select />', ()=>{
  it('renders a select correctly', ()=>{
    render(<Select 
      text="text" type="type" value="value" value1="value1" value2="value2" value3="value3" value4="value4" name="name"
      placeholder="placeholder" onChange="onchange" />)
  });
});

describe('<Cards/>', ()=>{
  it('renders snack cards correctly', ()=>{
    render(<Cards item="item" handleClick="handleclick" />)
  });
});

describe('<EditUser/>', ()=>{
  it('renders a EditUser correctly', ()=>{
    render(<EditUser props="props" />)
  });
});


// describe('<Header/>', ()=>{
//   it('renders a Header correctly', ()=>{
//     render(<Header />)
//   });
// });

// describe('<MyCart />', ()=> {
//   it('renders MyCart correctly', ()=> {
//     render(<MyCart size="size" setShow="setshow" />)
//   });
// }); DANDO ERRO NO NAVIGATE



// import AdcProducts from '../Pages/AdcProducts.jsx'
// import Adm from "../Pages/Adm.jsx";
// import Login from '../Pages/Login.jsx';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NotFound from "../Pages/NotFound.jsx";
// import Register from '../Pages/Register.jsx';
// import Ordered from '../Pages/Ordered'
// import Kitchen from '../Pages/Kitchen'
// import TestOrdered from '../Pages/TestOrdered'
// import ListUsers from '../Pages/ListUsers.jsx';
// import ListProducts from '../Pages/ListProducts.jsx';
// import Cart from '../Pages/Cart.jsx';
// import { render } from "@testing-library/react";


// describe('AdcProducts', () => {
// 	it('should display elements', () => {
// 		render(<AdcProducts></AdcProducts>)
// 	});
// });

// describe('Adm', () => {
// 	it('should display elements', () => {
// 		render (<Adm></Adm>)
// 	});
// });

// describe('Attendance', () => {
// 	it('should display elements', () => {
// 		render(<Attendance></Attendance>)
// 	});
// });

// describe('Login', () => {
// 	it('should display elements', () => {
// 		render (<BrowserRouter>
// 			<Routes>   
// 				<Route path="*" element= {<Login policyTypes={false} />}/>
// 			</Routes>
// 		</BrowserRouter>)
// 	});
// });

// describe('NotFound', () => {
// 	it('should display elements', () => {
// 		render (<NotFound></NotFound>)
// 	});
// });

// describe('Register', () => {
// 	it('should display elements', () => {
// 		render (<Register></Register>)
// 	});
// });

// describe('Ordered', () => {
// 	it('should display elements', () => {
// 		render(<Ordered></Ordered>)
// 	});
// });

// describe('TestOrdered', () => {
// 	it('should display elements', () => {
// 		render(<TestOrdered></TestOrdered>)
// 	});
// });

// describe('Kitchen', () => {
// 	it('should display elements', () => {
// 		render(<Kitchen></Kitchen>)
// 	});
// });

// describe('ListUsers', ()=>{
//   it('should display elements', ()=>{
//     render(<ListUsers></ListUsers>)
//   });
// });

// describe('ListProducts', ()=>{
//   it('should display elements',()=>{
//     render(<ListProducts></ListProducts>)
//   });
// });

// describe('Cart', ()=>{
//   it('should display elements',()=>{
//     render(<Cart></Cart>)
//   });
// });
