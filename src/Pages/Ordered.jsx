import { useState, useEffect } from "react";
import  { Button, CategoryMenu, DivMenu, FormClient, SectionItens, DivButtons }  from "../styles/Ordered.styles";
import { getProduct } from "../services/api";
import ButtonContador from "../Components/ButtonContador";


const Ordered = ()=>{
  const [products, setProducts] = useState([]);
  const [clientName , setClientName] = useState (' ')
  const [tableNumber, setTableNumber] = useState (' ')
  const [selectedType, setSelectedType] = useState('');
  const [showTypes, setShowTypes] = useState(false);

  const handleClientName = (e) => setClientName(e.target.value)
  const handleTableNumber = (e) => setTableNumber(e.target.value)  

  // renderiza os produtos dinamicamente
  const apiGet = async () => {
    try {
      const response = await getProduct();		  
      if (response.ok) {
        const data = await response.json();
        setProducts(data)	
        
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
  ? products.filter(product => product.type === selectedType)
  : products;


  return( 
  <>    
    <DivMenu>
    <DivButtons>
        <Button onClick={() => filterType('café da manhã')}>Café da manhã</Button>
        <Button onClick={() => filterType('menu principal')}>Menu pricipal</Button>
        </DivButtons>
    <CategoryMenu> 
    {showTypes && 
      filteredTypes.map((item)=>(
      
            <SectionItens>
              <ul key = {item.id}>        
              <li> {item.name} </li> 
              <li>R${item.price},00</li>   
              </ul>           
              <ButtonContador></ButtonContador>           
              </SectionItens>     
        ))}
            
    </CategoryMenu> 


    
      <FormClient>
      <label>
        <span>Nome do cliente:</span>
        <input 
          type="text" 
            value={clientName}
            name="text"
            placeholder="Digite o nome do cliente" 
            onChange={handleClientName} 
        />
      </label>
      <label>
        <span>N da mesa:</span>
          <select value={tableNumber} placeholder='Número da mesa' onChange={handleTableNumber}>
            <option hidden>Numero da mesa</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
      </label>
      </FormClient>  
    </DivMenu>
  </>
  )
}

export default Ordered