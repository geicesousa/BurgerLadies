import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { deleteApi, getApi } from "../services/api";
import { BtnsUsers, H3 } from "../styles/ListUsers.styled";
import Header from "../Components/Header";
import { toast } from "react-toastify";
import { Main } from "../styles/ListProducts.styled";
import EditProduct from "../Components/EditProducts";


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

const handleUpdateProduct = (id, updatedProduct) => {
  const updatedProducts = products.map(product => {
    if(product.id === id) {
      return {...product, product: updatedProduct}
    }
    return product
  })
  setProducts(updatedProducts)
  closeModal()
}


  const openModal = (product) => {
    setEditingProduct(product)
    setShowModal(true)
  }

  const closeModal = () => {
    setEditingProduct(null)
    setShowModal(false)
  }


  return (
    <>
      <Header />
      <Main>
        <H3>Lista de itens do cardápio</H3>
        {showModal && (
                  <EditProduct product={editingProduct} onUpdate={handleUpdateProduct}/>
                )}
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
             
                  <td><button onClick={() => deleteProducts(product)}>
                    Deletar ítem
                  </button></td>
                  <td><button onClick={()=> openModal(product)}> Editar item</button>
                         
                         </td>
                         </tr>
                  
            ))}
              </tbody>
            
              
        
        </Table>
      </Main>
    </>
  );
};

export default ListProducts;
