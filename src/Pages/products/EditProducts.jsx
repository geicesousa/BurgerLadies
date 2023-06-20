import {useState, useRef } from "react";
// import { toast } from "react-toastify";
// import { Form, MainForm } from "../styles/Form.styled";
// import Formulary from "./Formulary";
import Select from "../../Components/select/Select";
// import { ButtonForm } from "../styles/Button.styled";
import { patchProducts } from "../../services/api";
import { ButtonUpdate } from "../../styles/Button.styled";
import {
  ContainerEdit,
  Input,
  InputDescription,
  InputNumber,
} from "./Products.styled";
import { Table } from "react-bootstrap";
import { useEffect } from "react";

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
  const inputRef = useRef(null);

  const handleName = (e) => setName(e.target.value);
  const handleImg = (e) => setImg(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleType = (e) => setType(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleAmount = (e) => setAmount(e.target.value);

  useEffect(()=>{
    inputRef.current.focus();
  }, [])

  async function handleUpdate(product) {
    patchProducts({
      id: id,
      name: name,
      description: description,
      price: price,
      type: type,
      category: category,
      amount: amount,
    })
      .then((data) => {
        setEdit(data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(product);
  }

  return (
    <ContainerEdit>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Tipo</th>
            <th>Categoria</th>
            <th>Salvar</th>
         
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <Input
                text="Nome"
                type="text"
                value={name}
                name="name"
                onChange={handleName}
                ref={inputRef}
              />
            </td>         

            <td>
              <InputDescription
                text="Descrição"
                type="text"
                value={description}
                name="descrição"
                onChange={handleDescription}
              />
            </td>

            <td>
              <InputNumber
                text="Preço"
                type="text"
                value={price}
                name="price"
                onChange={handlePrice}
              />
            </td>

            <td>
              <Select
                name={type}
                value={type}
                value1="Café da manhã"
                value2="Menu Principal"
                onChange={handleType}
              />
            </td>

            <td>
              <Select
                value={category}
                value1="Lanches"
                value2="Bebidas"
                value3="Hambúrgueres"
                value4="Acompanhamentos"
                name={category}
                onChange={handleCategory}
              />
            </td>     
            <td>
              <ButtonUpdate onClick={() => handleUpdate({ id: product["id"] })}>
                Salvar
              </ButtonUpdate>
            </td>
            
          </tr>
        </tbody>
      </Table>
    </ContainerEdit>
  );
};

export default EditProduct;
