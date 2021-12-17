import Customer from "../core/Customer";

interface TableProps {
    clientes: Customer[]
}

export default function Table(props: TableProps) {

    function renderizarCabecalho() {
        return (
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.idade}</td>
                </tr>
            )
        })
    }

    return (
        <table>
            <thead>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}