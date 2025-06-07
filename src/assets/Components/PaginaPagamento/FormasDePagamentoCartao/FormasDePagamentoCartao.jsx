import "./FormasDePagamentoCartao.css";
import interrogacao from "../../../../../public/img/Pagamentos/interrogacao.svg";
import { NavLink } from "react-router-dom";
// import { FaRegCreditCard } from "react-icons/fa";

function FormasDePagamentoCartao() {
  return (
    <>
      <main className="formasDePagamento">
        <h1 className="tituloFormasDePagamento">
          Preencha os dados do seu cartão
        </h1>
        <div className="formularioPagamento">
          <div className="containerEsquerdaFormasDePagamento">
            <form className="dadosFormasDePagamento">
              <label>Número do Cartão</label>
              <div className="inputComIcone">
                <input
                  type="number"
                  className="numeroCartaoFormasDePagamento"
                  placeholder="1234 1234 1234 1234"
                />
                {/* <FaRegCreditCard className="iconeCartao" /> */}
              </div>
              <label>Nome do titular</label>
              <input
                type="text"
                className="nomeTitularFormasDePagamento"
                placeholder="Ex.: Maria Lopes"
              />
              <p className="legenda">Conforme aparece no cartão</p>
              <div className="linhaInputs">
                <div>
                  <label>Vencimento</label>
                  <input
                    type="text"
                    className="vencimentoFormasDePagamento"
                    placeholder="MM/AA"
                  />
                </div>
                <div>
                  <label>CVV</label>
                  <div className="codigoPrincialFormasDePagamento">
                    <input
                      type="number"
                      className="codigoFormasDePagamento"
                      placeholder="Ex.: 123"
                    />
                    <img src={interrogacao} alt="Ajuda" />
                  </div>
                </div>
              </div>
            </form>
            <label className="documentoTitularFormasDePagamento">
              Documento do titular
            </label>
            <div className="linhaDocumento">
              <select className="documentoFormasDePagamento">
                <option value="cpf">CPF</option>
                <option value="cnpj">CNPJ</option>
                <option value="rg">RG</option>
              </select>
              <input
                type="text"
                className="cpfFormasDePagamento"
                placeholder="999.999.999-99"
              />
            </div>
          </div>

          {/* parte não responviva */}
          <div className="containerDireitaFormasDePagamento">
            <h2>Detalhe da sua assinatura</h2>
            <div className="totalFormaDePagamento">
              <p>(Nome da assinatura)</p>
              <p>R$ 00,00</p>
            </div>
          </div>
        </div>
        <div className="botoesFormasDePagamento">
          <button className="voltarFormasDePagamento">Voltar</button>
          <NavLink to = "/confirmar-pagamento" className="continuarFormasDePagamento">Continuar</NavLink>
        </div>
      </main>
    </>
  );
}

export default FormasDePagamentoCartao
