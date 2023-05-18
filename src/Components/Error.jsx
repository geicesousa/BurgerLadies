

function Error(message) {

	switch (message) {
		case 'Cannot find user':
			return 'Usuário não encontrado';
		case 'Incorrect password':
			return 'Senha incorreta';
		case 'Email format is invalid':
			return 'Formato do email inválido';
		case 'Email already exists':
			return 'e-mail já existe';
		case 'Email and password are required':
			return 'Email e senha são obrigatórios'
		case 'Password is too short':
			return 'A senha é muito curta'
		default:
			return'Ocorreu um erro inesperado, verifique login e senha e tente novamente';
}

}

export default Error