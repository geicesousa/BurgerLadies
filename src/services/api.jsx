const API = 'https://burger-queen-api-mock-tau.vercel.app/'
const getToken = localStorage.getItem('accessToken')


export async function createUser(name, email, password, sector){
	const dataUser = {
		name,
		email,
		password,
		sector,
		}
  return await fetch(`${API}users`, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataUser),
  })
}


export async function loginUser(email, password){
	const dataLogin = {
		email,
		password,
	
		}
		return await fetch(`${API}login`, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataLogin)
  });
};

export async function getProduct() {
	return await fetch(`${API}products`, {
	  method: "GET",
	  headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${getToken}` 
	  },
	});
  };

  export async function listOfUsers(){
	return await fetch(`${API}users`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
			Authorization: `Bearer ${getToken}`,
		},
	});
  };
	
  
export async function deleteUsersId(id){
	return await fetch(`${API}users/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-type': 'application/json',
			Authorization: `Bearer ${getToken}`,
		}
	})
	
}
  

  

