import { useEffect, useState } from "react";
import {
  CartBox,
  Total,
  CartImg,
  DivTest,
  DivButton,
  FinalizeOrder,
  ContainerFooterOrder,
  Main,
} from "../styles/Cart.styled";
import burguer from "../assets/hamburguer.png";
import  { FormClient } from '../styles/Cart.styled'
import { postOrder } from '../services/api'
import { toast } from "react-toastify";

const Cart = ({ cart, setCart, handleChange}) => {
  const [price, setPrice] = useState(0);
  const [clientName, setClientName] = useState(" ");
  const [tableNumber, setTableNumber] = useState(" ");
  const [status, setStatus ] = useState ("aberto")
  
  const handleClientName = (e) => setClientName(e.target.value);
  const handleTableNumber = (e) => setTableNumber(e.target.value);

   // função para remover o item do carrinho
   const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
   
  };

  // função para atualizar o preço
  const handlePrice = () => {
    let quantityProducts = 0;
    cart.map((item) => {
      quantityProducts += item.amount * item.price;
    });
    setPrice(quantityProducts);
    };

    // aqui atualiza o preço quando o produto é removido do carrinho
  useEffect(()=>{
    handlePrice()
  })



  //a partir daqui tentativas de enviar pedido para a cozinha

  const sendKitchen = (e)=> {  
    const orderCheck = {
    name:clientName,
    table:tableNumber,
    total: price,
    status,
    pedidos:cart
    }
    postOrder(orderCheck)
    toast.success("pedido enviado com sucesso")  
  //aqui cria uma regra para limpar o carrinho

  }


  // const sendKitchen = ()=> {
  //   const pedidoPronto = { 
  //     nomeCLiente,
  //     mesa,
  //     precoTotal,
  //     pedidos: [ {

  //     }]
  //   }
  // }

  return (
  
    <Main>
      <FormClient>
        <label>
          <span>Nome do cliente:</span>
          <input
            type="text"
            value={clientName}
            name="text"
            placeholder="Digite o nome do cliente"           
            // ref={clientName}
            onChange={handleClientName}
          />
        </label>
        <label>
          <span>N da mesa:</span>
          <select
            value={tableNumber}
            // ref={tableNumber}          
            placeholder="Número da mesa"
            onChange={handleTableNumber}
          >
            <option hidden>Numero da mesa</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
      </FormClient>
      { 
      cart.map((item) => (
        <CartBox key={item.id}>
          <CartImg>
            <p>{item.name}</p>
            <p>R$:{item.price},00</p>
          </CartImg>
          <DivTest>
            <DivButton>
              <button onClick={() => handleChange(item, -1)}> - </button>
              <span>{item.amount}</span>
              <button onClick={() => handleChange(item, +1)}> + </button>
            </DivButton>
            <span> R$:{item.amount * item.price},00</span>
            <button onClick={() => handleRemove(item.id)}>Remover</button>
          </DivTest>
        </CartBox>
      ))}
      <ContainerFooterOrder>
        <FinalizeOrder onClick={()=> sendKitchen()}>
          Finalizar Pedido
        </FinalizeOrder>
        <Total>
          <span>Total</span>
          <span> R${price},00</span>
        </Total>
      </ContainerFooterOrder>
      
    </Main>
  );
};

export default Cart