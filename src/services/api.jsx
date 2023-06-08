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
  const response =  await fetch(`${API}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,

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
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,

    },
    body: JSON.stringify(dataLogin),
  });
  // const dados = await resposta.json()
  // return dados
}


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

//-----------DELETE----------------------
export async function deleteApi(parametro) {  
  return await fetch(`${API}/${parametro}` , {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
}
//------------------ GET ------------------
export async function getApi(parametro) {
  return await fetch(`${API}/${parametro}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
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
 
