const API = "http://localhost:8080";
const getToken = localStorage.getItem("accessToken");

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

export async function loginUser(email, password) {
  const dataLogin = {
    email,
    password,
  };
  const resposta =  await fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataLogin),
  });
  const dados = await resposta.json()
  return dados
}

export async function getProduct() {
  return await fetch(`${API}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
}

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

export async function getOrders(){
  return await fetch (`${API}/orders`,{
    method: "GET",
    headers: {
     "contet-type": "application/json",
     Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
  })
}

export async function patchOrders({id, newStatus}){
  const response = await fetch (`${API}/orders/${id}`,{
    method: "PATCH",
    headers: {
     "contet-type": "application/json",
     Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    },
    body: JSON.stringify({newStatus}),
 
 })
 const data = await response.json()
 return data
}

export async function listOfUsers() {
  return await fetch(`${API}/users`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
}



export async function deleteUsersId(id) {  
  return await fetch(`${API}/users/${id}` , {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
}
