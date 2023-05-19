import React, { useEffect, useState } from 'react'

function NovoPedido() {
	
	const [produtos, setProdutos] = useState([])
	const[name, setName] = useState()
	const[price, setPrice] = useState()
	const[Type, setType] = useState()
	const urlProduct = "http://localhost:8080/products"

	// useEffect(() => {
	// 	async function fetchData() {
	// 		const response = await fetch(urlProdutos)
	// 		const data = await response.json()
	// 		setProdutos(data)
	// 	}

	// 	fetchData()
	// }, [])

	// console.log(produtos);


	const createProduct = async (name, price, type) => {
		const dataLogin = {
			name, 
			price,
			type,

		}
		const response = await fetch(urlProduct, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dataLogin)
		});
		return response.json();
	} 



  return (
	<div>
		<h1>lista de produtos</h1>
		<ul>
			{produtos.map((produtos) => (
				<li key={produtos.id}>
				{produtos.name} -R$: {produtos.price}
				</li>
			))}
		</ul>
	</div>
  )
}

export default NovoPedido