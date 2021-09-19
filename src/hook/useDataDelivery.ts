import { useState } from "react";

export default function useDataDelivery(){
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

    return {
        cep: cep,
        address: address,
        number: number,
        state: state,
        city: city,
        setCep: (value: string) => setCep(value),
        setAddress: (value: string) => setAddress(value),
        setNumber: (value: string) => setNumber(value),
        setState: (value: string) => setState(value),
        setCity: (value: string) => setCity(value)
    }
}