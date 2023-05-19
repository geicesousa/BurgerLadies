import { useState, useEffect } from "react";
import  { DivMenu, FormClient }  from "../styles/Ordered.styles";

// colocar o café da manhã no cardapio
// baixar o icons do react para usar setas e + - 
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineArrowRight, AiOutlineCheck, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineClose, AiOutlineCrown } from "react-icons/ai";
import { FcApproval, FcCheckmark } from "react-icons/fc";
import { MdDeleteForever, MdOutlineDoNotDisturbOn, MdOutlineExpandMore } from "react-icons/md";
import { VscError } from "react-icons/vsc";

// na hora de usar metodos de array usar () no lugar das {} assim: map(()=>()) por causa do jsx que é lido como obj
// como fazer acodeon no react?
// para remover os itens usar o previousStates e fazer um filter

const Ordered = ()=>{
  const [some, getSome] = useState('');
  const [sub, getSub] = useState('');
  const [qntd, getQntd] = useState('');
  const [total, getTotal] = useState('');
  // função de soma para o + com onclick
  const handleSome = () =>{
    let add = 0;
    return add += 1;
  }
  // função de subtração para o - 
  const handleSub = (n)=>{
    let sub = n;
    return sub -= 1;
  }
  const handleShow = ()=>{
    console.log('desceu/subiu usar toggle')
  }


  return <>
  <div>
    <DivMenu>
      <span onClick={handleShow}><AiOutlineArrowDown/></span>
      <section> 
        <h4>Café da Manhã</h4>
        <ul> 
          <li> Café americano
            <p>R$5,00</p>
            <div>
              <span onClick={handleSome}></span>
              <span value={qntd ||'00'}></span>
              <span onClick={handleSub}></span>
            </div>
          </li>

          <li> Café com leite
            <p>R$7,00</p>
            <span></span>
          </li>

          <li> Sanduíche de queijo e presunto
            <p>R$10,00</p>
            <span></span>
          </li>

          <li> Suco de fruta natural
            <p>R$7,00</p>
            <span></span>
          </li>
        </ul>
      </section>

      <section>
        <h4>A qualquer hora</h4>
        <ul> 
          <h5>Hambúrguers</h5>
          <li> Hambúrguer simples
            <p>R$10,00</p>
            <span></span>
          </li>

          <li> Hambúrguer duplo 
            <p>R$15,00</p>
            <span></span>
          </li>
        </ul>

        <ul>
          <h5>Acompanhamentos</h5>
          <li> Batata frita
            <p>R$5,00</p>
            <span></span>
          </li>

          <li>
            <p>R$5,00</p>
            <span></span>
          </li>
        </ul>

        <ul> 
          <h5>Bebidas</h5>
          <li> Água 500ml
            <p>R$5</p>
            <span></span>
          </li>

          <li> Água 750ml
            <p>R$7,00</p>
            <span></span>
          </li>

          <li> Bebida gaseificada 500ml
            <p>R$7,00</p>
            <span></span>
          </li>

          <li> Bebida gaseificada 750ml
            <p>R$10,00</p>
            <span></span>
          </li>
        </ul>
      </section>
    </DivMenu>

      <AiOutlineCrown/>
    <FormClient> 
      <label htmlFor="client">Cliente: 
        <input type="text" name="client" />
      </label>

      <label htmlFor="table">Mesa: 
        <input type="number" name="table" />
      </label>

      <div>
        <p>Total:{total || " R$0,00"}</p>
        <div>
          <button type="button"><AiOutlineCheckCircle/></button>

          <button type="button"><AiOutlineCloseCircle/></button>
        </div>
      </div>
    </FormClient>

    <span>
      Pedido enviado com sucesso! <br/>
      <AiOutlineCheck/>
    </span>
  
  </div>
  </>
}

export default Ordered