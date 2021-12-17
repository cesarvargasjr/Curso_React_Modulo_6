import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/Customer";

export default function Home() {

  const clientes = [
    new Cliente('1', 'Cesar', 26),
    new Cliente('2', 'Gabriel', 25),
    new Cliente('3', 'Ingrid', 27),
  ]

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-400 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro">
        <Table clientes={clientes}></Table>
      </Layout>
    </div>
  )
}
