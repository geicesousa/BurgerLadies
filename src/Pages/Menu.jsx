import { useEffect, useState } from 'react'
import { ContainerMenu } from '../styles/Menu.styles';
import { getListProducts } from '../services/api'


function Menu() {
	const [table, setTable] = useState("");
	const [client, setClient] = useState("");
  const [products, setProducts] = useState([]);
  const [initalRepos, setInitalRepos] = useState(""); 

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await getListProducts();
        const data = await response.json();
        setInitalRepos(data);
        setProducts(data);
      } catch (err) {
        console.error(`Erro: ${err}`);
      }
    }
    fetchRepos();
  },[]);

 return (
	<ContainerMenu>
      <nav>
          <label >Mesa</label>
          <input
            type="number"
            max="10"
            min="0"
            placeholder="Mesa"
            onChange={(e) => setTable(e.target.value)}
            value={table}
            required />
          <label>Cliente</label>
          <input
            type="text"
            placeholder="Cliente"
            onChange={(e) => setClient(e.target.value)}
            value={client}
            required />          
        </nav>

        {products.map(item => {
          return (
            <section  key={item.id}>
              <section>
                <p>{item.name}</p>
              </section>
              <section>
               </section>
            </section>
          );
        })}

	
    
		</ContainerMenu>
  )
}

export default Menu