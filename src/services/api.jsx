const API = "http://localhost:8080";
const getToken = localStorage.getItem("accessToken");

//---------------USUARIOS-----------------------

//REGISTRO DE COLABORADOR
export async function createUser(name, email, password, role) {
  const dataUser = {
    name,
    email,
    password,
    role,
  };
  const response =  await fetch(`${API}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataUser),
  });
  const data = await response.json()
  return data
}

//LOGIN DE COLABORADOR
export async function loginUser(email, password) {
  const dataLogin = {
    email,
    password,
  };
  return await fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataLogin),
  });
  // const dados = await resposta.json()
  // return dados
}

//LISTA DE COLABORADORES
export async function listUsers() {
  return await fetch(`${API}/users`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
}

//DELETAR COLABORADOR
export async function deleteUsersId(id) {  
  return await fetch(`${API}/users/${id}` , {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
}

//EDITAR COLABORADOR
export async function pathUsers(id, editar) {  
  return await fetch(`${API}/users/${id}` , {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(editar),
  })
}

//---------------CARDÁPIO-----------------------

//CADASTRAR UM NOVO ÍTEM  PARA O CARDAPIO
export async function createProducts(name, img, description, price, type, category, amount ) {
  const dataProducts = {
    name,
    img,
    description,
    price,
    type,
    category,
    amount,

  };
  const response =  await fetch(`${API}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(dataProducts),
  });
  const data = await response.json()
  return data
}

//LISTAR PRODUTOS - CARDÁPIO
export async function getProduct() {
  return await fetch(`${API}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
}

export async function deleteProductId(id){
  return await fetch (`${API}/products/${id}`,{
    method: "DELETE",
    headers: {
     "content-type": "application/json",
     Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }, 
 })

}

//---------------PEDIDOS-----------------------

//ENVIAR PEDIDOS PARA A API
export async function postOrder(parametro) {
    return await fetch(`${API}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(parametro),
  });
}

// RENDERIZAR NA TELA OS PEDIDOS DA API
export async function getOrders(){
  return await fetch (`${API}/orders`,{
    method: "GET",
    headers: {
     "content-type": "application/json",
     Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
  })
}


//EDITAR PEDIDOS
export async function patchOrders(item){
  console.log(item);
  console.log(JSON.stringify({status:item["status"]}));
   return await fetch (`${API}/orders/${item.id}`,{
     method: "PATCH",
     headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
     },
     body: JSON.stringify({status:item["status"]}),
 
  
  })
 
 }

 //DELETAR PEDIDOS
 export async function deleteOrdersId(id){
   return await fetch (`${API}/orders/${id}`,{
     method: "DELETE",
     headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
     }, 
  })
 
 }


 

