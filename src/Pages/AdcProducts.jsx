import { useState } from "react";
import { createProducts } from "../services/api";
import { Form, MainForm } from "../styles/Form.styled";
import { ButtonForm } from "../styles/Button.styled"
import { toast } from "react-toastify";
import Input from "../Components/Input";
import Header from "../Components/Header";

function AdcProducts() {
  const [name, setName] = useState(" ");
  const [img, setImg] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [price, setPrice] = useState(" ");
  const [type, setType] = useState(" ");
  const [category, setCategory] = useState(" ");
  const [amount, setAmount] = useState(" ");
  const [cadastrado, setCadastrado] = useState(false);

  const handleName = (e) => setName(e.target.value);
  const handleImg = (e) => setImg(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleType = (e) => setType(e.target.value);
  const handleCategory= (e) => setCategory(e.target.value);
  const handleAmount = (e) => setAmount(e.target.value);

  function AddProdutos(e) {
    e.preventDefault();
  
	createProducts(name, img, description, price, type, category, amount)
      .then((response) => {
        if (response.status <= 299) {
          setCadastrado(true);
          return response.json();
        }
      })
      .catch(() =>
        toast.error("Algo deu errado, confira os dados e tente novamente!")
      );
  }
  
  return (
    <>
      <Header/>
      <MainForm>
        <Form onSubmit={AddProdutos}>
          <h2>Adicionar ítem ao cardapío</h2>
          <label>
            <span>Nome</span>
            <Input
              type="text"
              value={name}
              name="name"
              placeholder="Digite o nome do colaborador"
              onChange={handleName}
            />
          </label>

          <label>
            <span>img</span>
            <Input
              type="img"
              value={img}
              name="img"
              placeholder="Adcione uma imagem"
              onChange={handleImg}
              />
          </label>

          <label>
            <span>Descrição</span>
            <Input
              type="text"
              value={description}
              name="descrição"
              placeholder="Descrição do ítem"
              onChange={handleDescription}
            />
          </label>

		      <label>
            <span>Preço</span>
            <Input
              type="number"
              value={price}
              name="price"
              placeholder="Digite o preço"
              onChange={handlePrice}
            />
          </label>

		      <label>
            <span>Amount</span>
            <Input
              type="text"
              value={amount}
              name="amount"
              placeholder="Digite a quantidade"
              onChange={handleAmount}
            />
          </label>

          <label>
            <span>Selecione o tipo</span>
            <select value={type} placeholder="tipo" onChange={handleType}>
              <option hidden>Tipo</option>
              <option value="café da manhã">Café da manhça</option>
              <option value="menu pricipal">Menu Principal</option>
            </select>
          </label>

		      <label>
            <span>Selecione a categoria</span>
            <select value={category} placeholder="Categoria" onChange={handleCategory}>
              <option hidden>categoria</option>
              <option value="lanches">Lanches</option>
              <option value="bebidas">Bebidas</option>
              <option value="hambúrgueres">Hamburgueres</option>
              <option value="acompanhamentos">Acompanhamentos</option>
            </select>
          </label>
          
          <ButtonForm type="submit">Adicionar ìtem ao cardápio</ButtonForm>
        </Form>
        {cadastrado && toast.success("Cadastro realizado com sucesso!")}
      </MainForm>
    </>
  );
}

export default AdcProducts