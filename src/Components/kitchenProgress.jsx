import React, { useEffect, useState } from "react";
import { ButtonContainer, ButtonProgress, ButtonStatus } from "../styles/Button.styled";
import { getOrders, patchOrders } from "../services/api";
import { UsersContainer } from "../styles/ListUsers.styled";
import { CardOrder } from "../styles/KitchenProgress.styles";

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
        <ButtonProgress onClick={() => filterStatus("aberto")}>Pedidos abertos</ButtonProgress>
        <ButtonProgress onClick={() => filterStatus("execução")}>
          Pedidos em execução
        </ButtonProgress>
        <ButtonProgress onClick={() => filterStatus("pronto")}>Pedidos prontos</ButtonProgress>
        <ButtonProgress onClick={() => filterStatus("entregue")}>
          Pedidos entregues
        </ButtonProgress>
      </ButtonContainer>
      <UsersContainer>
        {showStatus &&
          statusFiltered.map((item) => (
            <CardOrder key={item.id}>
              <p>Cliente: {item.name}</p>
              <p>Mesa:{item.table}</p>
              <p>Status:{item.status}</p>
              <ButtonStatus onClick={() => changeStatus(item)}>
                Alterar status do pedido
              </ButtonStatus>
            </CardOrder>
          ))}
      </UsersContainer>
    </>
  );
};

export default KitchenProgress;
