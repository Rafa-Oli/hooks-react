import { useState } from "react";

export default function useDataDelivery(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return {
        email: email,
        password: password,
        setEmail: (value: string) => setEmail(value),
        setPassword: (value: string) => setPassword(value),
    }
}