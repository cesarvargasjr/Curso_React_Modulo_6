import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/Customer";

export default function Home() {

  /* CONSTANTE PARA EXIBIR SOMENTE UMA TELA (CLIENTES CADASTRADOS OU NOVO) */
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  /* CONSTANTE PARA CADASTRAR CLIENTES INICIANDO COM O ESTADO VAZIO */
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())

  const clientes = [
    new Cliente('1', 'Cesar', 26),
    new Cliente('2', 'Gabriel', 25),
    new Cliente('3', 'Ingrid', 27),
    new Cliente('4', 'Camila', 24),
    new Cliente('5', 'Teresa', 60),
  ]

  /* FUNÇÕES PARA EXIBIR OS BOTÕES/AÇÕES, CRIADA COM MESMO NOME */
  function customerSelect(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  /* FUNÇÃO PARA EXCLUIR UM CLIENTE */
  function customerExclude(cliente: Cliente) {
    console.log(`Excluindo... ${cliente.nome}`)
  }

  /* FUNÇÃO PARA SALVAR/EDITAR OS DADOS DE UM CLIENTE */
  function saveCustomer (cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }

  /* FUNÇÃO CRIAR UM NOVO CLIENTE */
  function newCustomer () {
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
            mudarCliente = {saveCustomer} 
            cancelar={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  )
}