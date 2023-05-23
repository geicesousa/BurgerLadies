export const login = (accessToken, role) => {
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('role', role)
   

    // O método setItem() da interface Storage, quando passado 'chave' e 'valor', irá adicionar esta chave ao storage, ou atualizar o valor caso a chave já exista.
//     "token"
// Um DOMString contendo o nome da chave que você deseja criar ou alterar.

// token
// Um DOMString contendo o valor da chave que você está criando ou atualizando.
}

export const removeLogin = (accessToken, role) => {
    localStorage.removeItem('accessToken', accessToken)
    localStorage.removeItem('role', role)
}

export const getToken = () => localStorage.getItem('accessToken');
export const getRole = () => localStorage.getItem("role");


// Passar o nome da chave para o método getItem() da interface Storage retornará o seu valor.

