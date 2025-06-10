import { useEffect, useState } from "react";
import { NavLink, useNavigate, } from "react-router-dom";
import "./FormaPagamento.css";

function FormaPagamento() {
    const [plano, setPlano] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const planoSalvo = localStorage.getItem("planoSelecionado");
        if (planoSalvo) {
            setPlano(JSON.parse(planoSalvo));
        } else {
            //REDIRECIONA PARA A HOME CASO DE ALGUM TIPO DE ERRO NA ROTA
            navigate("/");
        }
    }, [navigate]);
    if (!plano) return;
    return (
        <section className="pagamentoContainer">
            <section className="menuMetodosPagamento">
                <h2 className="formaPagamento">Como você prefere pagar?</h2>

                <NavLink to = "/pagina-debito" className="formaPagamentoDebito">
                <div className="formaPagamentoDebito">
                    <img src="./img/Pagamentos/cartao.svg" alt="Desenho de um cartão" />
                    <h3>Cartão de débito</h3>
                </div>
                </NavLink>

                <NavLink to = "/pagina-credito" className="formaPagamentoCredito">
                <div className="formaPagamentoCredito">
                    <img src="./img/Pagamentos/cartao.svg" alt="Desenho de um cartão" />
                    <h3>Cartão de Crédito</h3>
                </div>
                </NavLink>

                <NavLink to = "/confirmar-pagamento" className="formaPagamentoPix">
                <div className="formaPagamentoPix">
                    <img src="./img/Pagamentos/pix.svg" alt="Desenho do pix" />
                    <h3>Pix</h3>
                </div>
                </NavLink>

                 <NavLink to="/pagina-boleto" className="formaPagamentoBoleto">
                    <div className="formaPagamentoBoleto">
                        <img src="./img/Pagamentos/boleto.svg" alt="Desenho de um boleto" />
                       <h3>Boleto</h3>
                    </div>
                </NavLink>
            </section>

            <section className="detalhesDoPagamento">
                <h4>Detalhes da sua assinatura</h4>
                <p>{plano.titulo} <br />{plano.Plano} = {plano.valor}</p>
                <h4>Valor: {plano.valor}</h4>
            </section>
        </section>
    );
}

export default FormaPagamento;