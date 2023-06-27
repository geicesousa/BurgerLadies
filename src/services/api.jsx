import { toast } from "react-toastify";

const API = "http://localhost:8080";
//-------------POST-------------------------

//REGISTRO DE COLABORADOR
export async function createUser(name, email, password, role) {
  const dataUser = {
    name,
    email,
    password,
    role,
  };
  // const response =  
  return await fetch(`${API}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
      // Authorization: `Bearer ${localStorage.getItem("accessToken")}`,

    },
    body: JSON.stringify(dataUser),
  });
  // const data = await response.json();
  // return data
}

//LOGIN DE COLABORADOR
export async function loginUser(email, password) {
  const dataLogin = {
    email,
    password,
  };
  // const response = 
  return await fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
      // Authorization: `Bearer ${localStorage.getItem("accessToken")}`

    },
    body: JSON.stringify(dataLogin),
  });
  // const data = await response.json();
  // return data
}

//CADASTRAR UM NOVO ÍTEM  PARA O CARDAPIO
export async function createProducts(name, img, description, price, type, category, amount) {
  const dataProducts = {
    name,
    img,
    description,
    price,
    type,
    category,
    amount,
  };
  // const response =  
  return await fetch(`${API}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(dataProducts),
  });
  // const data = await response.json();
  // return data
}

//ENVIAR PEDIDOS PARA A API
export async function postOrder(parametro) {
  const response = await fetch(`${API}/orders`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  body: JSON.stringify(parametro),
});
  const data = await response.json();
  if(response.status === 401){
    return toast.error("Por favor, faça login novamente!")  
  }
  return data
}


//-----------DELETE----------------------
export async function deleteApi(parametro) {  
  // const response = 
  return await fetch(`${API}/${parametro}` , {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  // const data = await response.json();
  // return data
}
//------------------ GET ------------------
export async function getApi(parametro) {
  const response = await fetch(`${API}/${parametro}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  // colocar parametro para metodo e colocar
  const data = await response.json();
  if(response.status === 401){
    return toast.error("Por favor, faça login novamente!")  
  }
  return data
}

//EDITAR COLABORADOR
export async function pathUsers(item) {  
  const response = await fetch(`${API}/users/${item.id}` , {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(item),
  })
  const data = await response.json();
  if(response.status === 401){
    return toast.error("Por favor, faça login novamente!")  
  }
  return data
}

//EDITAR PEDIDOS
export async function patchOrders(item){

  const response = await fetch (`${API}/orders/${item.id}`,{
    method: "PATCH",
    headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    },
    body: JSON.stringify(item),
  });
  const data = await response.json();
  if(response.status === 401){
    return toast.error("Por favor, faça login novamente!")  
  }
  return data
}

export async function patchProducts(product){
  console.log((`${API}/products/${product.id}`))
  const response = await fetch (`${API}/products/${product.id}`, {
  
    method: "PATCH",
    headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  if(response.status === 401){
    return toast.error("Por favor, faça login novamente!")  
  }
  return data
}

// FUNÇÃO GERAL PARA USAR EM TODAS AS REQUISIÇÕES, as que tem body devem ser diferentes

export async function requestApi(caminho, metodo = 'GET'){
  const response = await fetch(`${API}/${caminho}`, {
    method: metodo,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  // colocar parametro para metodo e colocar
  const data = await response.json();
  if(response.status === 401){
    return toast.error("Por favor, faça login novamente!")  
  }
  return data
}
