const API = 'http://localhost:8080'
export { getToken }from './localStorage'

export const createUser = (email, password, role) => {
	const dataUser = {
		email,
		password,
		role,
		}
  return fetch(`${API}/users`, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataUser),
  });
};

export const loginUser = (email, password) => {
	const dataLogin = {
		email,
		password,
	
		}
		return fetch(`${API}/login`, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataLogin)
  });
};


export const getListProducts = () => {
	return fetch(`${API}/products`, {
	  method: 'GET',
	  headers: {
		'Content-Type': 'application/json',
		'Authorization': getToken()
	  },
	})
	.then(res => res.json())
  };
  
