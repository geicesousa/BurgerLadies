import { useState, useEffect } from "react";
import  { DivMenu, FormClient }  from "../styles/Ordered.styles";
import { toast } from 'react-toastify'; 
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineArrowRight, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineClose, AiOutlineCrown } from "react-icons/ai";
import { FcApproval, FcCancel } from "react-icons/fc";
import { MdOutlineDoNotDisturbOn, MdOutlineExpandMore, MdOutlineAddCircleOutline } from "react-icons/md";
import { VscError } from "react-icons/vsc";
import { getListProducts } from "../services/api";

// na hora de usar metodos de array usar () no lugar das {} assim: map(()=>()) por causa do jsx que é lido como obj
// na hora de deletar um pedido, mostrar todos menos o que tem o id (todosPedidos.id !== pedidoId )
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
    e.addEvent
    let add = 0;
    console.log('soma', e)
    return qntd + 1;
  };
  const handleSub = (e, id)=>{

    let sub = 0;
    console.log('diminui', e.target, e)
    return sub = qntd - 1;
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
      // pedidos colocar rota dinamica ${`/pedidos/:id"`} 
      // reload()
    }; // postar na api em orders essa order

    // const sendOrder = await fetch('http://localhost:8080/orders', {
    //   method: 'POST', 
    //   headers: {
		// 		'Content-Type': 'application/json'
		// 	},
    //   // body: PAREI AQUI COM MATHEUS
    // });

  // se sendOrder der certo
    toast.success('Pedido enviado com sucesso!')
    
    setName('');
    setTable('');
    setObs('');

    // se não der certo catch {toast.error('Houve um erro na solicitação do pedido!')}
    
  };

  const handleCanceled = (e)=>{
    e.preventDefault()
    console.log('cancelado');
    toast.error('Pedido cancelado');
    // aparece o toast com pedido cancelado
  };

  const handleObs = (e) =>{
    setObs(e.target.value);
  };

  // renderiza os produtos dinamicamente
  useEffect(()=>{
    async function fetchApi(){
      const response = await fetch('https://burger-queen-api-mock-tau.vercel.app/products', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdlaWNldGVzdGVAdGVzdGUuY29tIiwiaWF0IjoxNjg1MDY1Nzg3LCJleHAiOjE2ODUwNjkzODcsInN1YiI6IjQifQ.ZymSex6lRiiXDWSys0ngWLoQFWCncwXHQWH0Tjp2sYY' 
        } //mudar toda vez que alterar o login
      });
      const data = await response.json();
      
      setProducts(data);
    }
    fetchApi();
  }, [])
  
  return <>
    <DivMenu>
      <section> 
        <h4>Café da Manhã {/* <MdOutlineExpandMore onClick={handleShow}/>*/}</h4> 
        { products.map((p)=>(
          p.type === 'café da manhã' && 
          <ul key={p.id}>
            <li>
              <div>{p.name}
                <p>R${p.price},00</p>
              </div> 

              <div > 
                <span key={p.id} onClick={()=> setQntd(Number(qntd) - 1)}><MdOutlineDoNotDisturbOn/></span>
                <span id={p.id}>{qntd || '00'}</span> 
                <span id={p.id} onClick={()=> setQntd(parseInt(qntd) + 1)}><MdOutlineAddCircleOutline/></span>
              </div>
            </li>
          </ul>
          )) 
        }        
      </section>

      <section>
        <h4>A qualquer hora {/* <MdOutlineExpandMore onClick={handleShow}/>*/}</h4>
        <h5>Hambúrguers</h5>
        { products.map((p)=>(
          p.type === 'menu principal' && p.category === 'hambúrgueres' &&
          <ul key={p.id}>
            <li>
              <div>{p.name}
                <p>R${p.price},00</p>
              </div> 

              <div>
                <span onClick={()=> setQntd(qntd + 1)}><MdOutlineDoNotDisturbOn/></span>
                <span>{qntd ||' 00 '}</span> 
                <span onClick={handleSome}><MdOutlineAddCircleOutline/></span>
              </div>
            </li>
          </ul>
          )) 
        }  

        <h5>Acompanhamentos</h5>
        { products.map((p)=>(
          p.type === 'menu principal' && p.category === 'acompanhamentos' &&
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
        <h5>Bebidas</h5>
        { products.map((p)=>(
          p.type === 'menu principal' && p.category === 'bebidas' &&
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
      <div>
      {/* para estiliza e colocar total e obs um ao lado do outro e alinhado ao meio */}
        <label> Observações:
          <textarea name="obs" onChange={handleObs} value={obs} placeholder="detalhes do pedido"></textarea>
        </label>

        <div>
          <p>Total:{total || " R$0,00"}</p>
          <div>
            <button type="button"><AiOutlineCheckCircle onClick={createOrder}/></button>

            <button type="button"><AiOutlineCloseCircle onClick={handleCanceled}/></button>
          </div>
        </div>
      </div>
    </FormClient>

  </>
}

export default Ordered