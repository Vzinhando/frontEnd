import './Cartoes.css'

function Cartoes() {
  return (
    <>
      <div className="cartoes">
        <div className="cards">
          <div className="card">
            <div className="imagemFundo">
              <img src="/img/ImagemLaura/Julia.svg" alt="" />
            </div>
            <div className="textoInfo">
              <div className="nomeCartoes">
                <h3>Julia</h3>
              </div>
              <div className="infoCartoes">
                <h4>Chefe de cozinha</h4>
                <h4>Bela Vista, SP</h4>
              </div>
            </div>
            <div className="estrelasCartoes">
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
            </div>
            <div className="servicosCartoes">
              <p>2.250 serviços prestados!</p>
            </div>
          </div>

          <div className="card">
            <div className="imagemFundo">
              <img src="/img/ImagemLaura/Vanessa.svg" alt="" />
            </div>
            <div className="textoInfo">
              <div className="nomeCartoes">
                <h3>Vanessa</h3>
              </div>
              <div className="infoCartoes">
                <h4>Jardineira</h4>
                <h4>Itaquera, SP</h4>
              </div>
            </div>
            <div className="estrelasCartoes">
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
            </div>
            <div className="servicosCartoes">
              <p>1.300 serviços prestados!</p>
            </div>
          </div>

          <div className="card">
            <div className="imagemFundo">
              <img src="/img/ImagemLaura/Vinicius.svg" alt="" />
            </div>
            <div className="textoInfo">
              <div className="nomeCartoes">
                <h3>Vinicius</h3>
              </div>
              <div className="infoCartoes">
                <h4>Eletrcista</h4>
                <h4>Brasilandia, SP</h4>
              </div>
            </div>
            <div className="estrelasCartoes">
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
              <img src="/img/estrela_clara.svg" alt="" />
            </div>
            <div className="servicosCartoes">
              <p>1.000 serviços prestados!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartoes