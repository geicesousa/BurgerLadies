import { useState } from "react";
import { toast } from "react-toastify";
import Ordered from "./Ordered";
import Cart from "./Cart";
import { WarningMsg } from "./Ordered.styled";
import MyCart from "./MyCart";

const OrderedProgress = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);
  const [warning, setWarning] = useState(false);

  // função para adicionar itens ao carrinho
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    } else {
      toast.success("ìtem adicionado ao carrinho!");
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, value) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });

    cart[ind].amount += value;

    if (cart[ind].amount === 0) cart[ind].amount = 1;
    setCart([...cart]);
  };
  return (
  <>
    <MyCart size={cart.length} setShow={setShow} />

    {show ? (
      <Ordered handleClick={handleClick} />
    ) : (
      <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
    )}

    {warning && (
      <WarningMsg>
        ⚠ Este item já foi adicionado ao carrinho, consulte o carrinho para
        aumentar a quantia.
      </WarningMsg>
    )}
  </>
  );
};

export default OrderedProgress;
