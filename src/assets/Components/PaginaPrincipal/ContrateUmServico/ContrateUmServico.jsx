import React, { useState, useEffect } from "react";
import "./ContrateUmServico.css";

const imagensCarrosselContrate = [
  "/img/ProfissaoCarrossel/profissaoCarrossel01.svg",
  "/img/ProfissaoCarrossel/profissaoCarrossel02.svg",
  "/img/ProfissaoCarrossel/profissaoCarrossel03.svg",
];

function ContrateUmServico() {
  const [imagemAgora, imagemProxima] = useState(0);

  useEffect(() => {
    const intervaloContrate = setInterval(() => { 
      imagemProxima(
        (valorAtual) => (valorAtual + 1) % imagensCarrosselContrate.length
      );
    }, 3000);
    return () => clearInterval(intervaloContrate);
  }, []);

  return (
    <div className="contrateServico">
      <div className="informacaoServicoContrate">
        <h2>Contrate um serviço</h2>
        <p>Aqui você pode encontrar o profissional que precisa</p>
        <button>Clique aqui</button>
      </div>
      <div className="carrosselServico">
        <img
          src={imagensCarrosselContrate[imagemAgora]}
          alt="Imagem de serviços de bairros"
        />
        <div className="servicoProgressoServico">
          <div
            className="servicoBarraProgresso"
            style={{
              width: `${
                ((imagemAgora + 1) / imagensCarrosselContrate.length) * 100
              }%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ContrateUmServico
