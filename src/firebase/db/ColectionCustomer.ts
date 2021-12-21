/* IMPLEMENTAÇÃO PARA O FIREBASE */

import firebase from "../config";
import Customer from "../../core/Customer";
import CustomerRepository from "../../core/CustomerRepository";

export default class ColectionCustomer implements CustomerRepository {

    #conversor = {
        toFirestore(cliente: Customer) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Customer {
            const dados = snapshot.data(options)
            return new Customer(snapshot.id, dados.nome, dados.idade)
        }
    }

    async salvar(cliente: Customer): Promise<Customer> {
        if (cliente?.id) {
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        } else {
            const docRef = await this.colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(cliente: Customer): Promise<Customer> {
        return this.colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Customer[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return firebase
            .firestore().collection('clientes')
            .withConverter(this.#conversor)
    }
}