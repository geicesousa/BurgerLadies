import React, { useEffect, useState } from "react";
import { ButtonContainer, Button } from "../styles/Button.styled";
import Header from "../Components/Header";
import { getOrders, patchOrders } from "../services/api";
import { CardUsers, UsersContainer } from "../styles/ListUsers.styled";

const Kitchen = () => {
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const [status, setStatus ] = useState([])

  const apiOrders = async () => {
    getOrders()
      .then((response) => response.json()
      )
      .then((data) => {
        console.log(data);

        setOrders(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    apiOrders()
}, [])


  // const filterStatus = (status) => {
  //   setSelectedStatus(status);
  //   setShowStatus(true);
  // };

  // const statusFiltered = selectedStatus
  //   ? orders.filter((order) => order.status === selectedStatus)
  //   : orders;

  const apiOrderspatch = async (item) => {  
  console.log(item.status);
  item.status = "execução"
  patchOrders({id:item["id"], status:item["status"]})
      .then((response) => response.json())
      .then((data) => {
        setStatus(data)
      
      });
  console.log(item.status);
  }

return (
    <>
      <Header />
      {/* <ButtonContainer>
        <Button onClick={() => filterStatus("abertos")}>Pedidos abertos</Button>
        <Button onClick={() => filterStatus("execução")}>
          Pedidos em execução
        </Button>
        <Button onClick={() => filterStatus("prontos")}>Pedidos prontos</Button>
        <Button onClick={() => filterStatus("entregues")}>
          Pedidos entregues
        </Button>
      </ButtonContainer> */}
      <UsersContainer>
      {// showStatus &&
      orders.map((item) => ( 
          item.status === "aberto" &&
          
          <CardUsers key={item.id}>
            <p>Cliente: {item.name}</p>
            <p> Mesa:{item.table}</p>
            <p>Status:{item.status}</p>
            <p>Pedidos:{item.pedidos.length}</p>

            {/* {item.pedidos.map((opcao)=>(
              console.log(opcao)           
            ))} */}
            <button onClick={() => apiOrderspatch(item)}>
              {item.status}
            </button>
          </CardUsers>
      ))}

        {orders.map((item) => ( 
          item.status === "pending" &&
          <CardUsers key={item.id}>
            <p>Cliente: {item.client}</p>
            <p>Mesa:{item.table}</p>
            <p>Status:{item.status}</p>
            <p>Pedido realizado: {item.products[1].product.dateEntry}</p>
              
            <button onClick={() => apiOrderspatch(item)}>
              {item.status}
            </button>
          </CardUsers>
        ))}

        <h5>Entregues</h5>
        {orders.map((item) => ( 
          item.status === "delivered" &&
          <CardUsers key={item.id}>
          <p>Cliente: {item.client}</p>
          <p>Mesa:{item.table}</p>
          <p>Status:{item.status}</p>

          <button onClick={() => apiOrderspatch(item)}>
            {item.status}
          </button>
        </CardUsers>
        ))} 
      </UsersContainer>
    </>
  );
};

export default Kitchen;
