import { useEffect, useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/Customer";
import CustomerRepository from "../core/CustomerRepository";
import ColectionCustomer from "../firebase/db/ColectionCustomer";

export default function Home() {

  /* CONSTANTE PARA EXIBIR SOMENTE UMA TELA (CLIENTES CADASTRADOS OU NOVO) */
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  /* CONSTANTE PARA CADASTRAR CLIENTES INICIANDO COM O ESTADO VAZIO */
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())

  const [clientes, setClientes] = useState<Cliente[]>([])

  const repo: CustomerRepository = new ColectionCustomer()

  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  /* FUNÇÕES PARA EXIBIR OS BOTÕES/AÇÕES, CRIADA COM MESMO NOME */
  function customerSelect(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  /* FUNÇÃO PARA EXCLUIR UM CLIENTE */
  async function customerExclude(cliente: Cliente) {
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
    setVisivel('form')
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-400 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro de Clientes">
        {/* EXIBIR A TABELA DE CADASTRO OU A DE CADASTRAR UM NOVO CLIENTE */}
        {visivel === 'tabela' ? (
          <div>
            <div className="flex justify-end">
              <Button cor="green" className="mb-4"
                onClick={newCustomer}>
                Novo CLiente
              </Button>
            </div>
            <Table clientes={clientes}
              customerSelect={customerSelect}
              customerExclude={customerExclude}
            />
          </div>
        ) : (
          <Form
            cliente={cliente}
            mudarCliente={saveCustomer}
            cancelar={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  )
}