import "./PagamentoBoleto.css"

function PagamentoBoleto() {
    return (
        <>
            <section className="pagamentoBoletoContainer">
                <img src="./img/Pagamentos/boleto.svg" alt="comprovante do boleto" />
                <h2 className="pagamentoBoletoTitulo">Pagamento do boleto</h2>
                <p className="pagamentoBoletoTexto">O boleto foi gerado, afetue o pagamento até dia 20 de maio de 2025.</p>
                <section className="pagamentoBoletoBotoes">
                    <button className="pagamentoBoletoVisualizar">Visualizar boleto</button>
                    <button className="pagamentoBoletoFinalizar">Finalizar</button>
                </section>
            </section>
        </>
    )
}

export default PagamentoBoleto