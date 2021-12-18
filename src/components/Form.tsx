/* FORM PARA CADASTRAR UM NOVO CLIENTE */

import { useState } from "react";
import Input from "./Input";
import Customer from "../core/Customer"
import Button from "./Button";

interface FormProps {
    cliente: Customer
}

export default function Form(props: FormProps) {
    const id = props.cliente.id ?? null
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {id ? (
                <Input
                    somenteLeitura
                    texto="Id"
                    valor={id}
                    className="mb-4" />
            ) : false}
            <Input
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
                className="mb-4" />
            <Input
                texto="Idade"
                tipo="number"
                valor={idade}
                valorMudou={setIdade} />
            <div className="flex justify-end mt-7">
                <Button cor="blue" className="mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}