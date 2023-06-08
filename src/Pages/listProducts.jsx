import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { deleteApi, getApi } from "../services/api";
import {
  BtnsUsers,
  CardUsers,
  H3,
  UsersContainer,
} from "../styles/ListUsers.styled";
import Header from "../Components/Header";
import { toast } from "react-toastify";
import { Main } from "../styles/listProducts.styled";

const ListProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    getApi(`products/`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  async function deleteProducts(product) {
    deleteApi(`products/${product.id}`)
      .then((response) => {
        if (response.ok) {
          toast.success("ìtem deletado com sucesso");
        }
      })
      .then((data) => {
        // const teste = users.filter( item => item.id !== user.id)
        setProducts((prevState) =>
          prevState.filter((item) => item.id !== product.id)
        );
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(product);
  }

  return (
    <>
      <Header />
      <Main>
        <H3>Lista de Ítens do cardápio</H3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Tipo</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th>Ações</th>
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
      </Main>
    </>
  );
};

export default ListProducts;
