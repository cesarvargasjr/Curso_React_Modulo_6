import Customer from "./Customer";

export default interface CustomerRepository {
    salvar(cliente: Customer): Promise<Customer>
    excluir(cliente: Customer): Promise<Customer>
    obterTodos(): Promise<Customer[]>
}