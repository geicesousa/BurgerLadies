import {useState, useRef } from "react";
import Select from "../../Components/select/Select";
import { patchProducts } from "../../services/api";
import { ButtonUpdate } from "../../styles/Button.styled";
import {
  ContainerEdit,
  Input,
  InputDescription,
  InputNumber,
  MainEdit,
  SectionButton,
} from "./Products.styled";
import { useEffect } from "react";

const EditProduct = ({ product }) => {
  const [edit, setEdit] = useState([]);
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
    <MainEdit>
    <ContainerEdit>  
              <Input
                text="Nome"
                type="text"
                value={name}
                name="name"
                onChange={handleName}
                ref={inputRef}
              />
           

              <InputDescription
                text="Descrição"
                type="text"
                value={description}
                name="descrição"
                onChange={handleDescription}
              />
         
              <InputNumber
                text="Preço"
                type="text"
                value={price}
                name="price"
                onChange={handlePrice}
              />
           
              <Select
                name={type}
                value={type}
                value1="Café da manhã"
                value2="Menu Principal"
                onChange={handleType}
              />
           
              <Select
                value={category}
                value1="Lanches"
                value2="Bebidas"
                value3="Hambúrgueres"
                value4="Acompanhamentos"
                name={category}
                onChange={handleCategory}
              />
          </ContainerEdit>
              <SectionButton>
              <ButtonUpdate onClick={() => handleUpdate({ id: product["id"] })}>
                Salvar
              </ButtonUpdate>
              </SectionButton>
      </MainEdit>
    
  );
};

export default EditProduct;
