import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import { deleteApi, getApi } from "../../services/api";
import Header from "../../Components/header/Header";
import EditProduct from "./EditProducts";
import {
  Cards,
  ContainerCards,
  H3,
  SectionCards,
  Text,
} from "../../styles/Global.styles";
import {
  ButtonDelete,
  ButtonToEdit,
  ButtonsModal,
  ModalDelete,
} from "../../styles/Button.styled";

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showModalEdit, setShowModalEdit] = useState(false); 
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [idDelete, setIdDelete] = useState(null);

  const getProducts = async () => {
    getApi(`products/`)
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

  const openModalDelete = (product) => {
    setIdDelete(product);
    setShowModalDelete(true);
  };

  const closeModalDelete = () => {
    setIdDelete(null);
    setShowModalDelete(false);
  };

  const openModalEdit = (product) => {
    setEditingProduct(product);
    setShowModalEdit(true);
  };

  const closeModalEdit = () => {
    setEditingProduct(null);
    setShowModalEdit(false);
  };

  async function deleteProducts() {
    deleteApi(`products/${idDelete.id}`)
      .then((response) => {
        if (response.ok) {
          toast.success("ìtem excluído com sucesso");
        }
      })
      .then((data) => {
        // const teste = products.filter( item => item.id !== product.id)
        setProducts((prevState) =>
          prevState.filter((item) => item.id !== idDelete.id)
        );
        closeModalDelete();
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Header />
      <H3>Lista de itens do menu</H3>
      {showModalEdit && (
        <EditProduct product={editingProduct} fechar={closeModalEdit} />
      )}

      {showModalDelete && idDelete && (
        <ModalDelete>
          <Text>Tem certeza que deseja excluir este produto?</Text>
          <ButtonsModal>
            <ButtonToEdit onClick={deleteProducts}>Sim</ButtonToEdit>
            <ButtonDelete onClick={closeModalDelete}>Cancela</ButtonDelete>
          </ButtonsModal>
        </ModalDelete>
      )}

      <ContainerCards>
        {products.map((product) => (
          <Cards key={product.id}>
            <li>         
              <strong>Nome: </strong>
              {product.name}
            </li>
            <li>         
              <strong>Descrição: </strong>
              {product.description}
            </li>
            <li>         
              <strong>Tipo: </strong>
              {product.type}
            </li>
            <li>         
              <strong>categoria: </strong>
              {product.category}
            </li>
            <li>         
              <strong>Preço: </strong>
              {product.price},00
            </li>
            <SectionCards>
              <ButtonDelete onClick={() => openModalDelete(product)}>
                Excluir
              </ButtonDelete>

              <ButtonToEdit onClick={() => openModalEdit(product)}>
                Editar
              </ButtonToEdit>
            </SectionCards>
          </Cards>
        ))}
      </ContainerCards>
    </>
  );
};

export default ListProducts;
