import "./ConfirmacaoPagamento.css"
import { NavLink } from "react-router-dom";

function ConfirmacaoPagamento() {
    return (
        <>
            <section className="confimacaoContainer">
                <div className="confirmacaoEspaco">
                    <img src="./img/Pagamentos/Confirmacao_Pagamento.svg" alt="Desenho de confirmação" />
                    <h2 className="confirmacaoTitulo">Obrigado pelo pagamento!</h2>
                    <p className="confirmacaoTexto">O pagamento foi concluído com sucesso.</p>
                    <NavLink to ="/" className="confirmacaoBotao">Tela Inicial</NavLink>
                </div>
            </section>
        </>
    )
}

export default ConfirmacaoPagamento;