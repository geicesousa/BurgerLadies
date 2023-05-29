import React, { useState, useEffect } from 'react'
import { getProduct } from '../services/api'

function Menu() {

	const [products, setProducts] = useState([])

	const apiGet = async () => {
		      try {
		        const response = await getProduct();		  
		        if (response.ok) {
		          const data = await response.json();
		          setProducts(data)	
				  console.log(data)	        
		        }
		      } catch (error) {
		        console.error(error);
		      }
	};

	  useEffect(() => {
		apiGet();
	  }, []);


  return (
	<div>
		Menu 	
			
		<div>
			<ul>
				{products.map((item) => {
					return(
					<li key={item.id}>{item.name}{item.price}{item.type}{item.category}</li>
					)
				})}
			</ul>
		</div>
	</div>
  )
}

export default Menu

// import React, { useEffect, useState } from 'react';
// import Card from '../Components/Card';
// import { getProduct } from '../services/api';


// const Menu = () => {
//   const [produtos, setProdutos] = useState([]);
//   const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
//   const [mostrarProdutos, setMostrarProdutos] = useState(false); // Estado para controlar a visibilidade dos produtos

//   useEffect(() => {
//     const fetchProdutos = async () => {
//       try {
//         const response = await getProduct();
  
//         if (response.ok) {
//           const data = await response.json();
//           setProdutos(data);
//         } else {
//           console.error('Erro ao obter os produtos da API');
//         }
//       } catch (error) {
//         console.error('Erro ao obter os produtos da API', error);
//       }
//     };
  
//     fetchProdutos();
//   }, []);
  
//   const filtrarPorCategoria = (categoria) => {
//     setCategoriaSelecionada(categoria);
//     setMostrarProdutos(true); // Mostrar os produtos quando uma categoria for selecionada
//   };

//   const produtosFiltrados = categoriaSelecionada
//     ? produtos.filter(produto => produto.category === categoriaSelecionada)
//     : produtos;

//   return (
//     <div>
//       <div className="cardapio-filtro">
//         <button className="filtro-cardapio" onClick={() => filtrarPorCategoria('Café da manhã')}>Café da manhã</button>
//         <button className="filtro-cardapio" onClick={() => filtrarPorCategoria('Hambúrgueres')}>Hambúrgueres</button>
//         <button className="filtro-cardapio" onClick={() => filtrarPorCategoria('Acompanhamentos')}>Acompanhamentos</button>
//         <button className="filtro-cardapio" onClick={() => filtrarPorCategoria('Bebidas')}>Bebidas</button>
//       </div>
//       <div className="cardapio-produtos">
//       {mostrarProdutos &&  // Renderizar os produtos apenas se a variável mostrarProdutos for verdadeira
//           produtosFiltrados.map((produto) => (
//             <Card
//               key={produto.id}
//               imagem={produto.image}
//               cardsClassName="cards-produto"
//               texto1={produto.name}
//               texto2={`R$ ${produto.price.toFixed(2)}`}
//               textoClassName="texto-card-produtos"
//             />
//           ))}
//         </div>
//     </div>
//   );
// };

// export default Menu;