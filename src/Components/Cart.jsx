import { useEffect, useState } from "react";
import {
  Article,
  CartBox,
  Total,
  CartImg,
  DivTest,
  DivButton,
  FinalizeOrder,
  ContainerFooterOrder,
} from "../styles/Cart.styled";
import burguer from "../assets/hamburguer.png";
import { ShoppingCart } from "phosphor-react";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let quantityProducts = 0;
    cart.map((item) => {
      quantityProducts += item.amount * item.price;
    });
    setPrice(quantityProducts);
    };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  });

  const sendKitchen = ()=> {
    const pedidoPronto = { 
      nomeCLiente,
      mesa,
      precoTotal,
      pedidos: [ {

      }]
    }
  }

  return (
    <Article>
        <FormClient>
        <label>
          <span>Nome do cliente:</span>
          <input
            type="text"
            value={clientName}
            name="text"
            placeholder="Digite o nome do cliente"
            onChange={handleClientName}
          />
        </label>
        <label>
          <span>N da mesa:</span>
          <select
            value={tableNumber}
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
      
      {cart.map((item) => (
        <CartBox key={item.id}>
          <CartImg>
            <img src={burguer} alt="Image" />
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
            <ShoppingCart size={64} />
          </DivTest>
        </CartBox>
      ))}
      <ContainerFooterOrder >
        <FinalizeOrder onClick={sendKitchen}>
          Finalizar Pedido
        </FinalizeOrder>
        <Total>
          <span>Total</span>
          <span> R${price},00</span>
        </Total>
      </ContainerFooterOrder>
    </Article>
  );
};

export default Cart;
