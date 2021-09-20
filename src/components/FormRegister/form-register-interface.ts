export interface FormRegisterProps{
    onSubmit: Function
    validations?: {
        [key: string]: Function;
        cpf: Function
        password: Function
        name: Function
    }
}

export interface Error{
    [key: string]: {valid: boolean, text: string};
}