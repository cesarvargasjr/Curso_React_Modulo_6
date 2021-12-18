import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/Customer";

export default function Home() {

  const clientes = [
    new Cliente('1', 'Cesar', 26),
    new Cliente('2', 'Gabriel', 25),
    new Cliente('3', 'Ingrid', 27),
    new Cliente('4', 'Camila', 24),
    new Cliente('5', 'Teresa', 60),
  ]

  /* FUNÇÕES PARA EXIBIR OS BOTÕES/AÇÕES, CRIADA COM MESMO NOME */
  function customerSelect(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function customerExclude(cliente: Cliente) {
    console.log(`Excluindo... ${cliente.nome}`)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-400 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro de Clientes">
        <div className="flex justify-end">
          <Button className="mb-4">Novo CLiente</Button>
        </div>
        <Table clientes={clientes}
          customerSelect={customerSelect}
          customerExclude={customerExclude}
        />
        <Form cliente={clientes[0]}></Form>
      </Layout>
    </div>
  )
}