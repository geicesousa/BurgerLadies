import React from 'react';
import { useState, useEffect } from "react";
import { MdOutlineDoNotDisturbOn, MdOutlineExpandMore, MdOutlineAddCircleOutline } from "react-icons/md";
import  { DivMenu }  from "../styles/Ordered.styles";


const Menu = () => {

  const url = "http://localhost:8080/";
  const [some, setSome] = useState('');
  const [sub, setSub] = useState('');
  const [qntd, setQntd] = useState('00');
  const [products, setProducts] = useState([]);

  const handleSome = () =>{
    // setQntd(parseInt(qntd) + 1)
    setQntd((n)=>{
      const N = Number(n);
      return (N += 1);
    })
  };

  const handleSub = ()=>{
    setQntd((n)=>{
      if(n > 0){
        return n -= 1;
      } else {
        return n = 0;
      }
    })
  };

  const createOrder = async (e)=>{
    e.preventDefault();
    // const sendOrder = await fetch('http://localhost:8080/orders', {
    //   method: 'POST', 
    //   headers: {
		// 		'Content-Type': 'application/json'
		// 	},
    //   // body: PAREI AQUI COM MATHEUS
    // });

  // se sendOrder der certo
    toast.success('Pedido enviado com sucesso!')
    
    setName('');
    setTable('');
    setObs('');

    // se não der certo catch {toast.error('Houve um erro na solicitação do pedido!')}
    
  };

  // renderiza os produtos dinamicamente
  useEffect(()=>{
    async function fetchApi(){
      const response = await fetch('https://burger-queen-api-mock-tau.vercel.app/products', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdlaWNldGVzdGVAdGVzdGUuY29tIiwiaWF0IjoxNjg1NDc3OTA5LCJleHAiOjE2ODU0ODE1MDksInN1YiI6IjQifQ._SnexYb8Zglev-GBQvPpwUmpM8sZTX7E39s1yI8zfPM' 
        } //mudar toda vez que alterar o login
      });
      const data = await response.json();
      
      setProducts(data);
    }
    fetchApi();
  }, [])

  return <>
    <DivMenu>
      <section> 
        <h4>Café da Manhã {/* <MdOutlineExpandMore onClick={handleShow}/>*/}</h4> 
        { products.map((p)=>(
          p.type === 'café da manhã' && 
          <ul key={p.id}>
            <li>
              <div>{p.name}
                <p>R${p.price},00</p>
              </div> 

              <div > 
                <span key={p.id} onClick={handleSub}><MdOutlineDoNotDisturbOn/></span>
                <span id={p.id}>{qntd}</span> 
                <span id={p.id} onClick={handleSome}><MdOutlineAddCircleOutline/></span>
              </div>
            </li>
          </ul>
          )) 
        }        
      </section>

      <section>
        <h4>A qualquer hora {/* <MdOutlineExpandMore onClick={handleShow}/>*/}</h4>
        <h5>Hambúrguers</h5>
        { products.map((p)=>(
          p.type === 'menu principal' && p.category === 'hambúrgueres' &&
          <ul key={p.id}>
            <li>
              <div>{p.name}
                <p>R${p.price},00</p>
              </div> 

              <div>
                <span onClick={()=> setQntd(qntd + 1)}><MdOutlineDoNotDisturbOn/></span>
                <span>{qntd}</span> 
                <span onClick={handleSome}><MdOutlineAddCircleOutline/></span>
              </div>
            </li>
          </ul>
          )) 
        }  

        <h5>Acompanhamentos</h5>
        { products.map((p)=>(
          p.type === 'menu principal' && p.category === 'acompanhamentos' &&
          <ul key={p.id}>
            <li>
              <div>{p.name}
                <p>R${p.price},00</p>
              </div> 

              <div>
                <span onClick={handleSub}><MdOutlineDoNotDisturbOn/></span>
                <span>{qntd}</span> 
                <span onClick={handleSome}><MdOutlineAddCircleOutline/></span>
              </div>
            </li>
          </ul>
          ))
        }  
        <h5>Bebidas</h5>
        { products.map((p)=>(
          p.type === 'menu principal' && p.category === 'bebidas' &&
          <ul key={p.id}>
            <li>
              <div>{p.name}
                <p>R${p.price},00</p>
              </div> 

              <div>
                <span onClick={handleSub}><MdOutlineDoNotDisturbOn/></span>
                <span>{qntd}</span> 
                <span onClick={handleSome}><MdOutlineAddCircleOutline/></span>
              </div>
            </li>
          </ul>
        )) 
        } 
      </section>
    </DivMenu>
  </>
}

export default Menu