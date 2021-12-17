import Customer from "../core/Customer";
import { IconEdition, IconTrash } from "./Icons";

interface TableProps {
    clientes: Customer[]
    customerSelect?: (cliente: Customer) => void
    customerExclude?: (cliente: Customer) => void
}

export default function Table(props: TableProps) {

    const exibirAcoes = props.customerExclude || props.customerSelect

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-3">Id</th>
                <th className="text-left p-3">Nome</th>
                <th className="text-left p-3">Idade</th>
                {exibirAcoes ? <th className="p-3">Action</th> : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}`}>
                    <td className="text-left p-2">{cliente.id}</td>
                    <td className="text-left p-2">{cliente.nome}</td>
                    <td className="text-left p-2">{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Customer) {
        return (
            <td className="flex justify-center">
                {props.customerSelect ? (
                    <button onClick={() => props.customerSelect?.(cliente)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-blue-50
                    `}>
                        {IconEdition}
                    </button>
                ) : false}
                {props.customerExclude ? (
                    <button onClick={() => props.customerExclude?.(cliente)} className={`
                        flex justify-center items-center
                        text-red-600 rounded-full p-2 m-1
                        hover:bg-blue-50
                        `}>
                        {IconTrash}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-50
                bg-gradient-to-r from-blue-400 to-blue-600
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}