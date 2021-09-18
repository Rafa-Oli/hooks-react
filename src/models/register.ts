export function validCPF(cpf: string) {
    if (cpf.length !== 11) {
      return { valid: false, text: 'CPF must be 11 digits.' };
    } else {
      return { valid: true, text: '' };
    }
  }

export function validPassword(password: string) {
    if (password.length < 4 || password.length > 72) {
      return { valido: false, texto: 'Password must be 4 and 72 digits long' };
    } else {
      return { valido: true, texto: '' };
    }
  }