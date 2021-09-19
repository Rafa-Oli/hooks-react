import { SetStateAction, useState } from "react";
import{ Error } from '../components/FormRegister/form-register-interface'

export default function useDataDelivery(){
    const [errors, setErrors] = useState<Error>({
        password: { valid: true, text: '' },
        cpf: { valid: true, text: '' },
        name: { valid: true, text: '' },
      });

    return {
        errors: errors,
        setErrors: (value: SetStateAction<Error>) => setErrors(value),
    }
}