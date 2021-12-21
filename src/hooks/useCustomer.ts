import { useEffect, useState } from "react"
import CustomerRepository from "../core/CustomerRepository"
import ColectionCustomer from "../firebase/db/ColectionCustomer"
import Cliente from "../core/Customer";
import useTableForm from "./useTableForm";

export default function useCustomer() {
    
    const repo: CustomerRepository = new ColectionCustomer()

    /* HOOK EXIBIÇÃO DA TABELA E FORMULÁRIO */
    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTableForm()
    
    /* CONSTANTE PARA CADASTRAR CLIENTES INICIANDO COM O ESTADO VAZIO */
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())

    const [clientes, setClientes] = useState<Cliente[]>([])


    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela
        })
    }

    /* FUNÇÕES PARA EXIBIR OS BOTÕES/AÇÕES, CRIADA COM MESMO NOME */
    function selectCustomer(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario
    }

    /* FUNÇÃO PARA EXCLUIR UM CLIENTE */
    async function excludeCustomer(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    /* FUNÇÃO PARA SALVAR/EDITAR OS DADOS DE UM CLIENTE */
    async function saveCustomer(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    /* FUNÇÃO CRIAR UM NOVO CLIENTE */
    function newCustomer() {
        setCliente(Cliente.vazio())
        exibirFormulario
    }

    return {
        newCustomer,
        saveCustomer,
        excludeCustomer,
        selectCustomer,
        obterTodos,
        exibirTabela,
        cliente,
        clientes,
        tabelaVisivel,
    }
}