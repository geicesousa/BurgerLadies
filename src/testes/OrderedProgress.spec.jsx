import OrderedProgress from "../Pages/ordered/OrderedProgress.jsx";
import MyCart from "../Pages/ordered/MyCart.jsx";
import Cart from "../Pages/ordered/Cart.jsx";
import Ordered from "../Pages/ordered/Ordered.jsx";
import { render } from "@testing-library/react";

jest.mock('react-router-dom');
jest.mock('../Pages/ordered/MyCart');
jest.mock('../Pages/ordered/Cart');
jest.mock('../Pages/ordered/Ordered');

describe('OrderedProgress', () => {
	it('should display elements', () => {
		const propsCart = {
      cart: [ 
        { id: 1,
          name: "água",
          price: 2.00,
          amount: 5,
        },
        { id: 2,
          name: "cuscuz",
          price: 15.00,
          amount: 2,
        }
      ], 
      handleChange: jest.fn(),
			setCart: jest.fn(),
    };

	const propsMyCart = {	
		cart: [ 
			{ id: 1,
				name: "água",
				price: 2.00,
				amount: 5,
			},
			{ id: 2,
				name: "cuscuz",
				price: 15.00,
				amount: 2,
			}
		],
		setShow: true
	};

	const propsOrdered = {
		handleClick: jest.fn(),
	}

	render(<OrderedProgress />);

	const setTrue = true;
	const setFalse = false

	expect(<MyCart {...propsMyCart} />).toBeTruthy()


	});
  // fazer mock e ver se esses estão aparecendo na tela ao click

})