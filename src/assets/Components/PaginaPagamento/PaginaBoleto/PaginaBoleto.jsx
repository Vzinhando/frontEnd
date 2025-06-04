import { NavLink } from "react-router-dom"
import "./PaginaBoleto.css"

function PaginaBoleto() {
    return (
        <>
            <section className="dadosBoletoContainer">
                <h2 className="dadosBoletoTitulo">Preencha os dados para gerar o boleto</h2>

                <section className="dadosBoletoTopo">
                    <div className="formGroup">
                        <h3 className="dadosBoletoCpf">CPF</h3>
                        <input className="dadosBoletoCampoCpf" type="text" placeholder="000.000.000-00" />
                        <h3 className="dadosBoletoNome">Nome Completo</h3>
                        <input className="dadosBoletoCampoNome" type="text" placeholder="Seu nome Completo" />
                    </div>
                    <div className="dadosBoletoInfo">
                        <img src="./img/Pagamentos/boleto.svg" alt="código de barras boleto" />
                        <p className="dadosBoletoTexto">Detalhe da sua assinatura</p>
                        <h2 className="dadosValor">R$00,00</h2>
                    </div>
                </section>

                <section className="dadosBoletoBotoes">
                    <button className="dadosBoletoBotaoVoltar">Voltar</button>
                    <NavLink to = "/pagamentoboleto" className="dadosBoletoBotaoFinalizar">Finalizar pagamento</NavLink>
                </section>
            </section>

        </>
    )
}

export default PaginaBoleto