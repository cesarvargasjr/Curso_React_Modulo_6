/* HOOK EXIBIÇÃO DA TABELA E FORMULÁRIO */

import { useState } from "react";

export default function useTableForm() {
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const exibirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel('form')

    return {
        formVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela', 
        exibirTabela,
        exibirFormulario, 
    }
}