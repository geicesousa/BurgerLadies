import { useEffect, useState } from "react";
import {
  ButtonContainer,
  ButtonProgress,
  ButtonStatus,
} from "../styles/Button.styled";
import { deleteOrdersId, getOrders, patchOrders } from "../services/api";
import { UsersContainer } from "../styles/ListUsers.styled";
import { CardOrder} from "../styles/KitchenProgress.styled";
import { toast } from "react-toastify";
import { Check } from "phosphor-react";

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
    switch (item.status) {
      case "aberto":
        item.status = "execução";
        break;
      case "execução":
        item.status = "pronto";
        break;
      case "pronto":
        item.status = "entregue";
        break;
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

  async function deleteOrders(order) {
    deleteOrdersId(order.id)
      .then((response) => {
        if (response.ok) {
          toast.success("Pedido excluído com sucesso!");
        }
      })
      .then((data) => {
        setOrders ((prevState) => prevState.filter(item => item.id !== order.id));      
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(orders);
  }

  return (
    <>
      <ButtonContainer>
        <ButtonProgress onClick={() => filterStatus("aberto")}>
          Pedidos abertos
        </ButtonProgress>
        <ButtonProgress onClick={() => filterStatus("execução")}>
          Pedidos em execução
        </ButtonProgress>
        <ButtonProgress onClick={() => filterStatus("pronto")}>
          Pedidos prontos
        </ButtonProgress>
        <ButtonProgress onClick={() => filterStatus("entregue")}>
          Pedidos entregues
        </ButtonProgress>
      </ButtonContainer>
      <UsersContainer>
        {showStatus &&
          statusFiltered.map((item) => (
            <CardOrder key={item.id}>
              <>
                <p><strong>Cliente:</strong> {item.name}</p>
                <p><strong>Mesa:</strong> {item.table}</p>
                <p><strong>Status:</strong> {item.status}</p>
                <p><strong>Preço:</strong> {item.total},00</p>
                <p>
                 <strong> Detalhes do pedido:</strong>
                  {item.pedidos.map((item) => (
                    <span key={item.id}>
                      <span><br/><Check size={15} color="#03300b" weight="bold" />{item.name}</span>
                    </span>
                  ))}
                </p>
              </>
              <>
                <ButtonStatus onClick={() => changeStatus(item)}>
                  Alterar status do pedido
                </ButtonStatus>
              </>
              <>
                <ButtonStatus onClick={() => deleteOrders(item)}>
                 Deletar pedido
                </ButtonStatus>
              </>
            </CardOrder>
          ))}
      </UsersContainer>
    </>
  );
};

export default KitchenProgress;
