import { useState, useEffect } from "react";
import  { DivMenu, FormClient }  from "../styles/Ordered.styles";
import { toast } from 'react-toastify'; 
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineArrowRight, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineClose, AiOutlineCrown } from "react-icons/ai";
import { FcApproval, FcCancel } from "react-icons/fc";
import { MdOutlineDoNotDisturbOn, MdOutlineExpandMore, MdOutlineAddCircleOutline } from "react-icons/md";
import { VscError } from "react-icons/vsc";
import { getListProducts } from "../services/api";
import Menu from "../Components/Menu";

// na hora de usar metodos de array usar () no lugar das {} assim: map(()=>()) por causa do jsx que é lido como obj
// na hora de deletar um pedido, mostrar todos menos o que tem o id (todosPedidos.id !== pedidoId )
// como fazer acodeon no react?
// para remover os itens usar o previousStates e fazer um filter

const Ordered = ()=>{
  const url = "http://localhost:8080/";
  const [some, setSome] = useState('');
  const [sub, setSub] = useState('');
  const [qntd, setQntd] = useState('00');
  const [total, setTotal] = useState('');
  const [name, setName] = useState('');
  const [table, setTable] = useState('');
  const [obs, setObs] = useState('');
  const [orders, setAllOrders] = useState('');
  const [products, setProducts] = useState([]);

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
  
  };

  const handleObs = (e) =>{
    setObs(e.target.value);
  };


  return <>

    <Menu/>

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
          <textarea name="obs" onChange={(e) => setObs(e.target.value)} value={obs} placeholder="detalhes do pedido"></textarea>
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