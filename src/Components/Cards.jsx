import React from 'react'
import { Button, CardsItens } from '../styles/Cards.styled'

const Cards = ({item, handleClick}) => {

	const {name, price} = item;
  return (
	<CardsItens>
	{/* <div>
		<img src={img} alt="Image" />

	</div> */}
	<div>
		<p>{name}</p>
		<p>Preço - R$:{price}</p>
		<Button onClick={()=>handleClick(item)}>Adicionar no pedido</Button>		
	</div>
	</CardsItens>
  )
}

export default Cards