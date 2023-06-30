import { useState, useEffect } from "react";
import { Button, DivButtons, DivMenu } from "./Ordered.styled";
import { getApi } from "../../services/api";
import Cards from "../../Components/cards/Cards";

const Ordered = ({ handleClick }) => {
  const [products, setProducts] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [showTypes, setShowTypes] = useState(false);

  const getOrdered = async () => {
    getApi(`products/`)
    .then((data) => {
      setProducts(data);
    })
    .catch((error) => {
      console.log(error);
    });
  };
  useEffect(() => {
    getOrdered();
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
          Menu principal
        </Button>
      </DivButtons>
      <DivMenu>
        {showTypes &&
          filteredTypes.map((item) => (
            <Cards item={item} key={item.id} handleClick={handleClick} />
         ))}
      </DivMenu>
    </main>
  );
};

export default Ordered;
