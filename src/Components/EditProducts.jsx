import React, { useState } from "react";
import { Form, MainForm } from "../styles/Form.styled";
import Formulary from "./Formulary";
import Select from "./Select";
import { ButtonForm } from "../styles/Button.styled";
import { patcProducts } from "../services/api";
import { toast } from "react-toastify";
import { Return } from "../styles/MyCart.styled";

const EditProduct = ({ product }) => {
  const [edit, setEdit] = useState([]);
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
    console.log(edit);

    const updateProducts = {
      name: product["name"],
      img: product["img"],
      description: product["description"],
      price: product["price"],
      type: product["type"],
      category: product["category"],
      amount: product["amount"],
    };
    patcProducts({ id: product["id"]}, updateProducts)
      .then((response) => response.json())
      .then((data) => {
        setEdit ((prevState) => prevState.filter(item => item.id !== product.id));      
        console.log(data);
      })

      .catch((error) => {
        console.log(error);
      });
        
        
      console.log(product.id);
  }

  return (
    <>
      <h2>Adicionar item ao cardápio</h2>
      <tr>
        <td>
          <input
            text="Nome"
            type="text"
            value={name}
            name="name"
            placeholder="Digite o nome do colaborador"
            onChange={handleName}
          />
        </td>
        <td>
          <input
            text="Imagem"
            type="img"
            value={img}
            name="img"
            placeholder="Adicione uma imagem"
            onChange={handleImg}
          />
        </td>

        <td>
          <input
            text="Descrição"
            type="text"
            value={description}
            name="descrição"
            placeholder="Descrição do ítem"
            onChange={handleDescription}
          />
        </td>
        <td>
          <input
            text="Preço"
            type="number"
            value={price}
            name="price"
            placeholder="Digite o preço"
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
      <button onClick={() => handleUpdate(product)}>ok</button>
    </>
  );
};

export default EditProduct;
