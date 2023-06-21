import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import { deleteApi, getApi } from "../../services/api";
import Header from "../../Components/header/Header";
import EditProduct from "./EditProducts";
import { Cards, ContainerCards, H3, SectionCards } from "../../styles/Global.styles";
import { ButtonDelete, ButtonToEdit } from "../../styles/Button.styled";


const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)

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

  async function deleteProducts(product) {
    deleteApi(`products/${product.id}`)
      .then((response) => {
        if (response.ok) {
          toast.success("ìtem excluído com sucesso");
        }
      })
      .then((data) => {
        // const teste = products.filter( item => item.id !== product.id)
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

  const handleUpdateProduct = (id, updatedProduct) => {
    const updatedProducts = products.map(product => {
      if(product.id === id) {
        return {...product, product: updatedProduct}
      }
      return product
    })
    setProducts(updatedProducts);
    closeModal();
  }

  const openModal = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  }

  const closeModal = () => {
    setEditingProduct(null)
    setShowModal(false)
  }

  return (
    <>
      <Header />     
        <H3>Lista de ítens do menu</H3>       
        {showModal && (
          <EditProduct product={editingProduct} onUpdate={handleUpdateProduct}/>
        )}
       <ContainerCards>
            {products.map((product) => (
              <Cards key={product.id}>
              <strong>Nome: </strong>
              {product.name} <br />
              <strong>Descrição: </strong>
              {product.description} <br />
              <strong>Tipo: </strong>
              {product.type} <br />
              <strong>Preço: </strong>
              {product.price} <br />
              <strong>categoria: </strong>
              {product.category} <br />
              <SectionCards>
                  <ButtonDelete onClick={() => deleteProducts(product)}>
                  Excluir
                </ButtonDelete>                
                  <ButtonToEdit onClick={()=> openModal(product)}> Editar</ButtonToEdit>
              </ SectionCards>
              </Cards>   
            ))}
       
       </ContainerCards>
    </>
  );
};

export default ListProducts;
