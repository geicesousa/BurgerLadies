import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Check } from "phosphor-react";
import { differenceInMinutes } from "date-fns";
import {
  ButtonContainer,
  ButtonStatus,
  ProgressLink,
} from "../../styles/Button.styled";
import { deleteApi, getApi, patchOrders } from "../../services/api";
import { ContainerCards } from "../../styles/Global.styles";
import { CardOrder } from "./KitchenProgress.styled";


const KitchenProgress = () => {
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const [status, setStatus] = useState([]);

  const getOrders = async () => {
    getApi(`orders/`)
    .then((data) => {
      setOrders(data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    getOrders();
  }, []);

  const filterStatus = (status) => {
    setSelectedStatus(status);
    setShowStatus(true);
  };

  const statusFiltered = selectedStatus
    ? orders.filter((order) => order.status === selectedStatus)
    : orders;

  const changeStatus = async (item) => {
    if (item.status === "execução") {
      item.datapronto = new Date();
    }
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
    patchOrders({
      id: item["id"],
      status: item["status"],
      datapronto: item["datapronto"],
    })
      .then((data) => {
        return setStatus(data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(item.status);
  };

  async function deleteOrders(order) {
    deleteApi(`orders/${order.id}`)
      .then((response) => {
        if (response.ok) {
          toast.success("Pedido excluído com sucesso!");
        }
      })
      .then((data) => {
        setOrders((prevState) =>
          prevState.filter((item) => item.id !== order.id)
        );
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
        <ProgressLink onClick={() => filterStatus("aberto")}>
          Pedidos abertos
        </ProgressLink>
        <ProgressLink onClick={() => filterStatus("execução")}>
          Pedidos em execução
        </ProgressLink>
        <ProgressLink onClick={() => filterStatus("pronto")}>
          Pedidos prontos
        </ProgressLink>
        <ProgressLink onClick={() => filterStatus("entregue")}>
          Pedidos entregues
        </ProgressLink>
      </ButtonContainer>
      <ContainerCards>
        {showStatus &&
          statusFiltered.map((item) => (
            <CardOrder key={item.id}>                  
              <li><strong>Data: </strong> {item.realizado}</li> 
              <li><strong>Cliente: </strong> {item.name}</li> 
              <li><strong>Mesa: </strong> {item.table} </li>
              <li><strong>Status: </strong> {item.status} </li>
              <li><strong>Preço: </strong> {item.total},00 </li>
              <li><strong> Detalhes do pedido:</strong>{item.pedidos.map((item) => (
                    <li key={item.id}>
                      <li>
                         <Check size={15} color="#03300b" weight="bold" />
                        {item.name} 
                      </li>
                    </li>
                  ))}  </li>       
            <br />
              {item.status === "pronto" ? (
                <p key={item.id}>
                  <strong>
                    Este pedido ficou pronto em {differenceInMinutes(new Date(item.datapronto),new Date(item.data))} minutos
                  </strong>
                </p>
              ) : null}
              {item.status === "entregue" ? (
                <p key={item.id}>
                  <strong>
                    Este pedido ficou pronto em {differenceInMinutes(new Date(item.datapronto), new Date(item.data))} minutos às {new Date(item.datapronto).toLocaleTimeString()}
                  </strong>
                </p>
              ) : null}
              <>
                <ButtonStatus onClick={() => changeStatus(item)}>
                  Alterar status do pedido
                </ButtonStatus>

                <ButtonStatus onClick={() => deleteOrders(item)}>
                  Deletar pedido
                </ButtonStatus>
              </>
            </CardOrder>
          ))}
      </ContainerCards>
    </>
  );
};

export default KitchenProgress;
