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

  return (
    <Article>
      {cart?.map((item) => (
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
          </DivTest>
        </CartBox>
      ))}
      <ContainerFooterOrder>
        <FinalizeOrder>
          <p>Finalizar Pedido</p>
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
