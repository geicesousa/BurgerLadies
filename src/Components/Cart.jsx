import { useEffect, useState } from 'react'
import { Article, CartBox, Total, CartImg } from '../styles/Cart.styled'

const Cart = ({cart, setCart, handleChange}) => {
	const [price, setPrice] = useState(0)

	const handlePrice = () => {
		let quantityProducts = 0;
		cart.map((item) => {
			quantityProducts += item.amount * item.price
		})
		setPrice(quantityProducts);
		}

		const handleRemove = (id) => {
			const arr = cart.filter((item)=> item.id !==id);
				setCart(arr)
		}

		useEffect(() => {
			handlePrice();
		})
	
  return (
	<Article>
		{
			cart?.map((item) => (
				<CartBox key={item.id}>
					<CartImg>
						 {/* <Img src="" alt="" />  */}
						<p>{item.name}</p>
					</CartImg>		
					<div>
						<button onClick={()=>handleChange(item, -1)}> - </button>
						<button>{item.amount}</button>
						<button onClick={()=>handleChange(item, +1)}> + </button>                       
					</div>
					<div>
						<span>Preço unitário - R$:{item.price}</span>
						<button onClick={()=>handleRemove(item.id)}>Remover</button>
					</div>
				</CartBox>
			))
		}
		<Total>
			{/* <span>Valor total do pedido</span> */}
			<span>Valor total R${price},00</span>
		</Total>
	</Article>
  )
}

export default Cart


