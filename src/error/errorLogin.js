export function getErrorMessage(error) {
    switch (error) {
        case 'Incorrect password':
            return 'Senha incorreta!';
        case 'Cannot find user':
            return 'Usuário não encontrado!';
        case 'Email and password are required':
            return 'Verifique se todos os campos estão preenchidos!';
    }
}