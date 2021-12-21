
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useCustomer from "../hooks/useCustomer";

export default function Home() {

  const {
    cliente,
    clientes,
    tabelaVisivel,
    excludeCustomer,
    selectCustomer,
    newCustomer,
    saveCustomer,
    exibirTabela
  } = useCustomer()

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-400 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro de Clientes">
        {/* EXIBIR A TABELA DE CADASTRO OU A DE CADASTRAR UM NOVO CLIENTE */}
        {tabelaVisivel ? (
          <div>
            <div className="flex justify-end">
              <Button cor="green" className="mb-4"
                onClick={newCustomer}>
                Novo CLiente
              </Button>
            </div>
            <Table clientes={clientes}
              customerSelect={selectCustomer}
              customerExclude={excludeCustomer}
            />
          </div>
        ) : (
          <Form
            cliente={cliente}
            mudarCliente={saveCustomer}
            cancelar={exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}