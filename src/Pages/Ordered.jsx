import { useState, useEffect } from "react";
import  { DivMenu, FormClient }  from "../styles/Ordered.styles";

// colocar o café da manhã no cardapio
// baixar o icons do react para usar setas e + - 
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineArrowRight, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineClose, AiOutlineCrown } from "react-icons/ai";
import { FcApproval, FcCancel } from "react-icons/fc";
import { MdOutlineDoNotDisturbOn, MdOutlineExpandMore, MdOutlineAddCircleOutline } from "react-icons/md";
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
    console.log('soma')

    return add += 1;
  }
  // função de subtração para o - 
  const handleSub = (n)=>{
    let sub = n;
    console.log('diminui')

    return sub -= 1;
  }
  const handleShow = ()=>{
    console.log('desceu/subiu usar toggle')
  }


  return <>
    <DivMenu>
      <section> 
        <h4>Café da Manhã {/* <MdOutlineExpandMore onClick={handleShow}/>*/}</h4> 
        <ul> 
          <li> 
            <div>Café americano
              <p>R$5,00</p>
            </div>
            <div>
              <span onClick={handleSub}><MdOutlineDoNotDisturbOn/></span>
              <span>{qntd ||' 00 '}</span>
              <span onClick={handleSome}><MdOutlineAddCircleOutline/></span>
            </div>
          </li>

          <li>
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
          </li>

          <li>
            <div> Suco de fruta natural
              <p>R$7,00</p>
            </div>
            <div>
              <span onClick={handleSub}><MdOutlineDoNotDisturbOn/></span>
              <span>{qntd ||' 00 '}</span>
              <span onClick={handleSome}><MdOutlineAddCircleOutline/></span>
            </div>
          </li>
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