import { useState, useEffect } from "react";
import {
  Button,
  DivButtons,
  DivMenu,
} from "../styles/Ordered.styles";
import { getProduct } from "../services/api";
import Cards from "../Components/Cards";

const Ordered = ({ handleClick }) => {
  const [products, setProducts] = useState([]);
  // const clientName = useRef();
  // const tableNumber  = useRef();
 
  const [selectedType, setSelectedType] = useState("");
  const [showTypes, setShowTypes] = useState(false);


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

    //enviar pedidos

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
            <Cards item={item} key={item.id} handleClick={handleClick} />              
            //  handleclik é uma props a função está vindo do componente testeOrdered
          ))}
      </DivMenu>
    </main>
  );
};

export default Ordered;
