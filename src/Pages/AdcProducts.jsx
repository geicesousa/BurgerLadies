import { useState } from "react";
import { createProducts } from "../services/api";
import { ButtonForm } from "../styles/Button.styled"
import { toast } from "react-toastify";
import Header from "../Components/Header";
import Formulary from "../Components/Formulary";
import { MainForm, Form } from "../styles/Form.styled";
import Select from "../Components/Select";



function AdcProducts() {
  const [name, setName] = useState(" ");
  const [img, setImg] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [price, setPrice] = useState(" ");
  const [type, setType] = useState(" ");
  const [category, setCategory] = useState(" ");
  const [amount, setAmount] = useState(" ");
  const [cadastrado, setCadastrado] = useState(false);

  const handleName = (e) => {
    setName(e.target.value); console.log(name)};
  const handleImg = (e) => setImg(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleType = (e) => setType(e.target.value);
  const handleCategory= (e) => setCategory(e.target.value);
  const handleAmount = (e) => setAmount(e.target.value);

  function addProdutos(e) {
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
      <Form onSubmit={addProdutos}>
        <h2>Adicionar item ao cardápio</h2>
        <Formulary 
          text="Nome"
          type="text"
          value={name}
          name="name"
          placeholder="Digite o nome do colaborador"
          onChange={handleName}
        ></Formulary>

        <Formulary
          text="Imagem"
          type="img"
          value={img}
          name="img"
          placeholder="Adicione uma imagem"
          onChange={handleImg}
        ></Formulary>
        
        <Formulary
          text="Descrição"
          type="text"
          value={description}
          name="descrição"
          placeholder="Descrição do ítem"
          onChange={handleDescription}
        ></Formulary>
        <Formulary
          text="Preço"
          type="number"
          value={price}
          name="price"
          placeholder="Digite o preço"
          onChange={handlePrice}
        ></Formulary>
        <Formulary
          type="text"
          value={amount}
          name="amount"
          placeholder="Digite a quantidade"
          onChange={handleAmount}
        ></Formulary>

        <Select
          
          text="Tipo"     
          value={type} placeholder="tipo" onChange={handleType}>
                    
<option hidden>Tipo</option>
              <option value="café da manhã">Café da manhça</option>
              <option value="menu pricipal">Menu Principal</option> 
        </Select>

        <Select
          text="Categoria"            

          value={category} 
          placeholder="Categoria" 
          onChange={handleCategory}>
          <option hidden>categoria</option>
          <option value="lanches">Lanches</option>
          <option value="bebidas">Bebidas</option>
          <option value="hambúrgueres">Hamburgueres</option>
          <option value="acompanhamentos">Acompanhamentos
          </option></Select>
      </Form>
      
      <ButtonForm type="submit">Adicionar item ao cardápio</ButtonForm>
        
        {cadastrado && toast.success("Cadastro realizado com sucesso!")}
    </MainForm>
      {/* <MainForm>
      

          <label>
            <span>Selecione o tipo</span>
            <select 
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
          
       */}
    </>
  );
}

export default AdcProducts