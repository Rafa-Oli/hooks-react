export interface FormRegisterProps{
    onSubmit: Function
    validations?: {
        [key: string]: Function;
        'cpf': Function
        'password': Function
    }
}

export interface Error{
    [key: string]: Object;
    cpf: { valid: boolean, text: string } 
}