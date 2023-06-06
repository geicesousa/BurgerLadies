import React, { useEffect, useState } from "react";
import { ButtonContainer, Button } from "../styles/Button.styled";
import Header from "../Components/Header";
import { getOrders, patchOrders } from "../services/api";
import { CardUsers, UsersContainer } from "../styles/ListUsers.styled";

const Kitchen = () => {
  const [orders, setOrders] = useState([]);
  // const [selectedStatus, setSelectedStatus] = useState("");
  // const [showStatus, setShowStatus] = useState(false);
  const [status, setStatus ] = useState([])

  const apiOrders = async () => {
    getOrders()
      .then((response) => response.json())
      .then((data) => {
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

  // const filteredStatus = selectedStatus
  //   ? orders.filter((order) => order.status === selectedStatus)
  //   : orders;

  const apiOrderspatch = async (item) => {  
  console.log(item.status);
  item.status = "execução"
  patchOrders({id:item["id"], status:item["status"]})
      .then((response) => {
        console.log(response  );
      })
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
        {orders.map((item) => (
          <CardUsers key={item.id}>
            Cliente: {item.name} <br />
            Mesa:{item.table} <br />
            Status:{item.status}
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
