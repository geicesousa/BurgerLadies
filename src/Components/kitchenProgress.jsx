import React, { useEffect, useState } from "react";
import { ButtonContainer, Button } from "../styles/Button.styled";
import Header from "../Components/Header";
import { getOrders, patchOrders } from "../services/api";
import { CardUsers, UsersContainer } from "../styles/ListUsers.styled";

const KitchenProgress = () => {
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const [status, setStatus] = useState([]);
  
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
    apiOrders();
  }, []);

  const filterStatus = (status) => {
    setSelectedStatus(status);
    setShowStatus(true);
  };

  const statusFiltered = selectedStatus
    ? orders.filter((order) => order.status === selectedStatus)
    : orders;

  const changeStatus = async (item) => {
    if (item.status === "aberto") {
      return (item.status = "execução");
    }
    if (item.status === "execução") {
      return (item.status = "pronto");
    }
    if (item.status === "pronto") {
      return (item.status = "entregue");
    }

    patchOrders({ id: item["id"], status: item["status"] })
      .then((response) => response.json())
      .then((data) => {
        return setStatus(data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(item.status);
  };

  return (
    <>
      <ButtonContainer>
        <Button onClick={() => filterStatus("aberto")}>Pedidos abertos</Button>
        <Button onClick={() => filterStatus("execução")}>
          Pedidos em execução
        </Button>
        <Button onClick={() => filterStatus("pronto")}>Pedidos prontos</Button>
        <Button onClick={() => filterStatus("entregue")}>
          Pedidos entregues
        </Button>
      </ButtonContainer>
      <UsersContainer>
        {showStatus &&
          statusFiltered.map((item) => (
            <CardUsers key={item.id}>
              Cliente: {item.name} <br />
              Mesa:{item.table} <br />
              Status:{item.status}
              <button onClick={() => changeStatus(item)}>
                Alterar status do pedido
              </button>
            </CardUsers>
          ))}
      </UsersContainer>
    </>
  );
};

export default KitchenProgress;
