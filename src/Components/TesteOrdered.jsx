import React from 'react'
import Ordered from '../Pages/Ordered'
import {useState} from 'react';
import Cart from './Cart';
import { WarningMsg } from '../styles/Ordered.styles';
import { toast } from 'react-toastify';
import MyCart from './MyCart';

const TesteOrdered = () => {

	const [cart, setCart] = useState([])
	const [show, setShow ] = useState(true)
	const [warning, setWarning] = useState(false)

	const handleClick = (item ) => {
		let isPresent = false;
		cart.forEach((product) => {
			if (item.id === product.id)
			isPresent = true
					
		})
		if (isPresent){
			setWarning(true)
			setTimeout(()=>{
				setWarning(false)
			}, 2000)
			return;

		}else{
			toast.success('ìtem adicionado ao carrinho!')
		}
	
		setCart([...cart, item])	
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArray = cart;
		tempArray[ind].amount += d;
		
		if (tempArray[ind].amount === 0)
			tempArray[ind].amount = 1;
		setCart([...tempArray])
	}

  return (
	<>
	<MyCart size={cart.length} setShow={setShow} />
	
	{
			show ? <Ordered handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
	}
	
	{
		warning && <WarningMsg>⚠ Este ítem já foi adicionado ao carrinho, consulte carrinho para aumentar a quantidade</WarningMsg>
	}
	

	</>
  )
}

export default TesteOrdered
