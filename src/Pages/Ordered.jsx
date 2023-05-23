import { useState, useEffect } from "react";
import  { DivMenu, FormClient }  from "../styles/Ordered.styles";
import { toast } from 'react-toastify'; 
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineArrowRight, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineClose, AiOutlineCrown } from "react-icons/ai";
import { FcApproval, FcCancel } from "react-icons/fc";
import { MdOutlineDoNotDisturbOn, MdOutlineExpandMore, MdOutlineAddCircleOutline } from "react-icons/md";
import { VscError } from "react-icons/vsc";

// na hora de usar metodos de array usar () no lugar das {} assim: map(()=>()) por causa do jsx que é lido como obj
// como fazer acodeon no react?
// para remover os itens usar o previousStates e fazer um filter

const Ordered = ()=>{
  const url = "http://localhost:8080/";
  const [some, setSome] = useState('');
  const [sub, setSub] = useState('');
  const [qntd, setQntd] = useState('');
  const [total, setTotal] = useState('');
  const [name, setName] = useState('');
  const [table, setTable] = useState('');
  const [obs, setObs] = useState('');
  const [orders, setAllOrders] = useState('');
  const [products, setProducts] = useState([]);
  const handleSome = (e) =>{
    let add = 0;
    console.log('soma', e)
    return add += 1;
  };
  const handleSub = (e)=>{

    let sub = 0;
    console.log('diminui', e.target)
    return sub -= 1;
  };
  const handleShow = ()=>{
    console.log('desceu/subiu usar toggle');
    // coloco um acordeon ?
  };

  const handleNameClient = (e)=>{
    setName(e.target.value);
  };
  
  const handleTable = (e)=>{
    setTable(e.target.value);
  };

  const createOrder = async (e)=>{
    e.preventDefault();
     const order = { // aqui terá um array ou ob com id e os itens pedidos e quantidades
      name, 
      table,
      obs,
      // itens do pedidos
      // reload()
    }; // postar na api em orders essa order

    // const sendOrder = await fetch('http://localhost:8080/orders', {
    //   method: 'POST', 
    //   headers: {
		// 		'Content-Type': 'application/json'
		// 	},
    //   // body: PAREI AQUI COM MATHEUS
    // });

    // setAllOrders((prevState) => [...prevState, orders]) // vai pegar todas os pedidos anteriores, tenh
    
    setName('');
    setTable('');
    setObs('');
  };

  const handleCanceled = ()=>{
    console.log('cancelado')
    // aparece o modal com pedido cancelado
  };

  const handleObs = (e) =>{
    setObs(e.target.value);
  }

  // renderiza os produtos dinamicamente
  useEffect(()=>{
    async function fetchApi(){
      const response = await fetch('http://localhost:8080/products', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdlaWNldGVzdGVAdGVzdGUuY29tIiwiaWF0IjoxNjg0ODYwODU4LCJleHAiOjE2ODQ4NjQ0NTgsInN1YiI6IjQifQ.qw7a_0Ezp5iTLWNNuBONtwR-I19xmy3Os0sixOVMWUg' 
        } //mudar toda vez que alterar o login
      });
      const data = await response.json();
      
      setProducts(data);
    }
    fetchApi();
  }, [])

  // const productos = products.map((product)=>{ console.log(product)})

  console.log(products);
  console.log(products[0].name);
  if(type=== 'café da manhã'){

  }

  return <>
    <DivMenu>
      <section> 
        <h4>Café da Manhã {/* <MdOutlineExpandMore onClick={handleShow}/>*/}</h4> 
        { products.map((p)=>(
            <ul key={p.id}>
              <li>
              <div>{p.name}
              <p>R${p.price},00</p>
            </div>
            <div>
              <span onClick={handleSub}><MdOutlineDoNotDisturbOn/></span>
              <span>{qntd ||' 00 '}</span> 
              <span onClick={handleSome}><MdOutlineAddCircleOutline/></span>
            </div>
          </li>
            </ul>
          )) 
        }        

        <ul> 
          {/* <li> 
            <div>Café americano
              <p>R$5,00</p>
            </div>
            <div>
              <span onClick={handleSub}><MdOutlineDoNotDisturbOn/></span>
              <span>{qntd ||' 00 '}</span> {/* colocar key ou id em algum lugar
              <span onClick={handleSome}><MdOutlineAddCircleOutline/></span>
            </div>
          </li> */}

          {/* <li>
            <div> Café com leite
              <p>R$7,00</p>
            </div>
            <div>
              <span onClick={handleSub}><MdOutlineDoNotDisturbOn/></span>
              <span>{qntd ||' 00 '}</span>
              <span onClick={handleSome}><MdOutlineAddCircleOutline/></span>
            </div>
          </li>

          <li>
            <div> Sanduíche de queijo e presunto
              <p>R$10,00</p>
            </div>
            <div>
              <span onClick={handleSub}><MdOutlineDoNotDisturbOn/></span>
              <span>{qntd ||' 00 '}</span>
              <span onClick={handleSome}><MdOutlineAddCircleOutline/></span>
            </div>
          </li> */}

          {/* <li>
            <div> Suco de fruta natural
              <p>R$7,00</p>
            </div>
            <div>
              <span onClick={handleSub}><MdOutlineDoNotDisturbOn/></span>
              <span>{qntd ||' 00 '}</span>
              <span onClick={handleSome}><MdOutlineAddCircleOutline/></span>
            </div>
          </li> */}
        </ul>
      </section>

      <section>
        <h4>A qualquer hora {/* <MdOutlineExpandMore onClick={handleShow}/>*/}</h4>
        <ul> 
          <h5>Hambúrguers</h5>
          <li>
            <div> Hambúrguer simples
              <p>R$10,00</p>
            </div>
            <div>
              <span onClick={handleSub}><MdOutlineDoNotDisturbOn/></span>
              <span>{qntd ||' 00 '}</span>
              <span onClick={handleSome}><MdOutlineAddCircleOutline/></span>
            </div>
          </li>

          <li>
            <div> Hambúrguer duplo 
              <p>R$15,00</p>
            </div>
            <div>
              <span onClick={handleSub}><MdOutlineDoNotDisturbOn/></span>
              <span>{qntd ||' 00 '}</span>
              <span onClick={handleSome}><MdOutlineAddCircleOutline/></span>
            </div>
          </li>
        </ul>

        <ul>
          <h5>Acompanhamentos</h5>
          <li> 
            <div> Batata frita
              <p>R$5,00</p>
            </div>
            <div>
              <span onClick={handleSub}><MdOutlineDoNotDisturbOn/></span>
              <span>{qntd ||' 00 '}</span>
              <span onClick={handleSome}><MdOutlineAddCircleOutline/></span>
            </div>
          </li>

          <li> 
            <div> Anéis de cebola
              <p>R$5,00</p>
            </div>
            <div>
              <span onClick={handleSub}><MdOutlineDoNotDisturbOn/></span>
              <span>{qntd ||' 00 '}</span>
              <span onClick={handleSome}><MdOutlineAddCircleOutline/></span>
            </div>
          </li>
        </ul>

        <ul> 
          <h5>Bebidas</h5>
          <li>
            <div> Água 500ml
              <p>R$5,00</p>
            </div>
            <div>
              <span onClick={handleSub}><MdOutlineDoNotDisturbOn/></span>
              <span>{qntd ||' 00 '}</span>
              <span onClick={handleSome}><MdOutlineAddCircleOutline/></span>
            </div>
          </li>

          <li>
            <div> Água 750ml
            <p>R$7,00</p>
              </div>
            <div>
              <span onClick={handleSub}><MdOutlineDoNotDisturbOn/></span>
              <span>{qntd ||' 00 '}</span>
              <span onClick={handleSome}><MdOutlineAddCircleOutline/></span>
            </div>
          </li>

          <li>
            <div> Bebida gaseificada 500ml
            <p>R$7,00</p>
              </div>
            <div>
              <span onClick={handleSub}><MdOutlineDoNotDisturbOn/></span>
              <span>{qntd ||' 00 '}</span>
              <span onClick={handleSome}><MdOutlineAddCircleOutline/></span>
            </div>
          </li>

          <li>
            <div> Bebida gaseificada 750ml
            <p>R$10,00</p>
              </div>
            <div>
              <span onClick={handleSub}><MdOutlineDoNotDisturbOn/></span>
              <span>{qntd ||' 00 '}</span>
              <span onClick={handleSome}><MdOutlineAddCircleOutline/></span>
            </div>
          </li>
        </ul>
      </section>
    </DivMenu>

    <AiOutlineCrown/>
    <FormClient>  {/* posso colocar onSubmit={createOrder} aqui ou deixar como esta no button e mudar para type submit */}
      <label htmlFor="client">Cliente: 
        <input type="text" name="client" value={name} placeholder="nome da cliente" onChange={handleNameClient}/>
      </label>

      <label htmlFor="table">Mesa: 
        <select name="table" placeholder="nº da mesa"  value={table} onChange={handleTable}>
          <option hidden>00</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>

        </select>
      </label>

      <label> Observações:
        <textarea name="obs" onChange={handleObs} value={obs}></textarea>
      </label>

      <div>
        <p>Total:{total || " R$0,00"}</p>
        <div>
          <button type="button" ><AiOutlineCheckCircle onClick={createOrder} /></button>

          <button type="button"><AiOutlineCloseCircle onSubmit={handleCanceled}/></button>
        </div>
      </div>
    </FormClient>

    <span>
      Pedido enviado com sucesso! <br/>
      <FcApproval/>
    </span>
    <br/>
    <span>
      Pedido cancelado. <br/>
      <FcCancel/>
    </span>
  </>
}

export default Ordered