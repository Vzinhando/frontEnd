import "./ConfirmarPagamento.css";
import { NavLink } from "react-router-dom";

function ConfirmarPagamento() {
  return (
    <>
      <main className="mainConfirmarPagamento">
        <h1 className="tituloConfirmarPagamento">
          Confirme os dados do pagamento
        </h1>
        <div className="areaConteudo">
          <div className="formaPagamentoConfirmarPagamento">
            <h2>Forma de pagamento</h2>
            <div className="container01ConfirmarPagamento">
              <img src="./img/Pagamentos/pixIcone.svg" alt="forma de pagamento escolhida" />
            </div>

            <div className="cupomConfirmarPagamento">
              <h2>Cupom</h2>
              <form className="formsCupom">
                <input
                  type="text"
                  placeholder="Digite seu cupom"
                  className="digiteSeuCupomConfirmarPagamento"
                />
                <button
                  type="submit"
                  className="aplicarCupomConfirmarPagamento"
                >
                  Aplicar
                </button>
              </form>
            </div>
          </div>

          <div className="detalhesDaCompraConfirmarPagamento">
            <div className="container02ConfirmarPagamento">
              <h2>Detalhes da compra</h2>
              <div className="linhaDetalhe">
                <p>Nome da assinatura</p>
                <p>R$ 0,00</p>
              </div>
              <div className="linhaDetalhe">
                <p>Cupom</p>
                <p>R$ 0,00</p>
              </div>
              <hr />
              <div className="linhaDetalheTotal">
                <p>Total</p>
                <p>R$ 0,00</p>
              </div>
            </div>
            <div className="botoestotalDetalhesCompra">
              <form>
                <button className="voltartotalDetalhesCompra" type="submit">
                  Voltar
                </button>
                <NavLink to = "/confirmacaopagamento" className="finalizartotalDetalhesCompra" type="submit">
                  Finalizar pagamento
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ConfirmarPagamento
