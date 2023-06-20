import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { Form, MainForm } from "../styles/Form.styled";
// import Formulary from "./Formulary";
import Select from "../../Components/select/Select";
// import { ButtonForm } from "../styles/Button.styled";
import { patchProducts } from "../../services/api";
// import { Return } from "../styles/MyCart.styled";

const EditProduct = ({ product }) => {
  // const [edit, setEdit] = useState([]);
  const [id, setId] = useState(product.id);
  const [name, setName] = useState(product.name);
  const [img, setImg] = useState(product.img);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [type, setType] = useState(product.type);
  const [category, setCategory] = useState(product.category);
  const [amount, setAmount] = useState(product.amount);

  const handleName = (e) => setName(e.target.value);  
  const handleImg = (e) => setImg(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleType = (e) => setType(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleAmount = (e) => setAmount(e.target.value);

  async function handleUpdate(product) {
    patchProducts({
      id: id,
      name: name,
      img: img,
      description: description,
      price: price,
      type: type,
      category: category,
      amount: amount
    })
      .then((data) => {
        setEdit(data)    
        window.location.reload()   
      }) 
      .catch((error) => {
        console.log(error);
      });
    console.log(product);
  }

  return (
    <>
      <h2>Adicionar item ao cardápio</h2>
      <tr key={key.id}>
        <td>
          <input
            text="Nome"
            type="text"
            value={name}
            name="name"
            onChange={handleName}
          />
        </td>
        <td>
          <input
            text="Imagem"
            type="img"
            value={img}
            name="img"
            onChange={handleImg}
          />
        </td>

        <td>
          <input
            text="Descrição"
            type="text"
            value={description}
            name="descrição"
            onChange={handleDescription}
          />
        </td>
        <td>
          <input
            text="Preço"
            type="number"
            value={price}
            name="price"
            onChange={handlePrice}
          />
        </td>

        <td>
          <input
            text="Quantidade"
            type="number"
            value={amount}
            name="amount"
            placeholder="Digite a quantidade"
            onChange={handleAmount}
          />
        </td>

        <td>
          <Select
            text="Tipo"
            name={type}
            value={type}
            placeholder="Selecione o tipo"
            value1="Café da manhã"
            value2="Menu Principal"
            onChange={handleType}
          />
        </td>

        <td>
          <Select
            text="Categoria"
            value={category}
            value1="Lanches"
            value2="Bebidas"
            value3="Hambúrgueres"
            value4="Acompanhamentos"
            name={category}
            placeholder="Selecione a categoria do produto"
            onChange={handleCategory}
          />
        </td>
      </tr>
      <button onClick={() => handleUpdate({ id: product["id"] })}>ok</button>
    </>
  );
};

export default EditProduct;
