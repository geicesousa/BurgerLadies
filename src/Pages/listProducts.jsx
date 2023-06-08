import { useState, useEffect } from "react";
import { deleteProductId, getProduct } from "../services/api";
import {
  BtnsUsers,
  CardUsers,
  H3,
  UsersContainer,
} from "../styles/ListUsers.styled";
import Header from "../Components/Header";
import { toast } from "react-toastify";
import { Table } from "react-bootstrap";


const ListProducts = () => {
  const [products, setProducts] = useState([]);

  const apiProducts = async () => {
    getProduct()
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    apiProducts();
  }, []);

  async function deleteProducts(product) {
    deleteProductId(product.id)
      .then((response) => {
        if (response.ok) {
          toast.success("colaborador Excluido com sucesso");
        }
      })
      .then((data) => {
        // const teste = users.filter( item => item.id !== user.id)
        setUsers((prevState) =>
          prevState.filter((item) => item.id !== product.id)
        );
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(user);
  }

  return (
    <>
      <Header />
      <H3>Lista de Ítens do cardápio</H3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Tipo</th>
            <th>Categoria</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name} </td>
              <td>{product.description}</td>
              <td>{product.type}</td>
              <td>{product.category} </td>
              <td>{product.price},00 </td>
              <BtnsUsers>
                <button onClick={() => deleteProducts(product)}>
                  Deletar ítem
                </button>
                <button>Editar ítem</button>
              </BtnsUsers>
            </tr>
		  ))}
        </tbody>
      </Table>
    </>
  );
};

export default ListProducts;
