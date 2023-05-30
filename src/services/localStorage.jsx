//Armazenando com localstorage
export const setToken = (token) => localStorage.setItem("token", token);
export const setRole = (role) => localStorage.setItem("role", role);
//Obtendo com localstorage
export const getToken = () => localStorage.getItem("token");
export const getRole = () => localStorage.getItem("role");

// export const removeToken = () => localStorage.removeItem("token");
// export const removeRole = () => localStorage.removeItem("role");




