import { useState, useEffect } from "react";
import {
  Button,
  FormClient,
  DivButtons,
  DivMenu,
} from "../styles/Ordered.styles";
import { getProduct } from "../services/api";
import Cards from "../Components/Cards";

const Ordered = ({ handleClick }) => {
  const [products, setProducts] = useState([]);
  const [clientName, setClientName] = useState(" ");
  const [tableNumber, setTableNumber] = useState(" ");
  const [selectedType, setSelectedType] = useState("");
  const [showTypes, setShowTypes] = useState(false);

  const handleClientName = (e) => setClientName(e.target.value);
  const handleTableNumber = (e) => setTableNumber(e.target.value);

  console.log(setClientName)
  console.log(clientName)

  // renderiza os produtos dinamicamente
  const apiGet = async () => {
    try {
      const response = await getProduct();
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    apiGet();
  }, []);

  const filterType = (type) => {
    setSelectedType(type);
    setShowTypes(true);
  };

  const filteredTypes = selectedType
    ? products.filter((product) => product.type === selectedType)
    : products;

  return (
    <main>
      <DivButtons>
        <Button onClick={() => filterType("café da manhã")}>
          Café da manhã
        </Button>
        <Button onClick={() => filterType("menu principal")}>
          Menu pricipal
        </Button>
      </DivButtons>
      <DivMenu>
        {showTypes &&
          filteredTypes.map((item) => (
            <Cards item={item} key={item.id} handleClick={handleClick}>
            </Cards>
          ))}
      </DivMenu>
    </main>
  );
};

export default Ordered;
