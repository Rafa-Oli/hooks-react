import { useState } from "react";

export default function useDataPersonal(){
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [cpf, setCpf] = useState('');
    const [promotions, setPromotions] = useState(true);
    const [news, setNews] = useState(false);

    return {
        name: name,
        surname: surname,
        cpf: cpf,
        promotions: promotions,
        news: news,
        setName: (value: string) => setName(value),
        setSurname: (value: string) => setSurname(value),
        setCpf: (value: string) => setCpf(value),
        setPromotions: (value: boolean) => setPromotions(value),
        setNews: (value: boolean) => setNews(value)

    }
}