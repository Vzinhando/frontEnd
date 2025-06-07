import './Cartoes.css'

function Cartoes() {
  return (
    <>
      <div className="cartoes">
        <div className="cards">
          <div className="card1">
            <div className="imagem-fundo">
              <img src="/img/ImagemLaura/Julia.svg" alt="" />
            </div>
            <div className="texto-info">
              <div className="nome">
                <h3>Julia</h3>
              </div>
              <div className="info">
                <h4>Chefe de cozinha</h4>
                <h4>Bela Vista, SP</h4>
              </div>
            </div>
            <div className="estrelas">
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
            </div>
            <div className="servicos">
              <p>9.999 serviços prestados!</p>
            </div>
          </div>

          <div className="card2">
            <div className="imagem-fundo">
              <img src="/img/ImagemLaura/Vanessa.svg" alt="" />
            </div>
            <div className="texto-info">
              <div className="nome">
                <h3>Vanessa</h3>
              </div>
              <div className="info">
                <h4>Jardineira</h4>
                <h4>Itaquera, SP</h4>
              </div>
            </div>
            <div className="estrelas">
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
            </div>
            <div className="servicos">
              <p>9.999 serviços prestados!</p>
            </div>
          </div>

          <div className="card3">
            <div className="imagem-fundo">
              <img src="/img/ImagemLaura/Vinicius.svg" alt="" />
            </div>
            <div className="texto-info">
              <div className="nome">
                <h3>Vinicius</h3>
              </div>
              <div className="info">
                <h4>Eletrcista</h4>
                <h4>Brasilandia, SP</h4>
              </div>
            </div>
            <div className="estrelas">
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
            </div>
            <div className="servicos">
              <p>9.999 serviços prestados!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartoes