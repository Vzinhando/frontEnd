import './Banner2.css';

function Banner2() {
  
  return (
    <div className="informacoesBanner">
      <div className="bloco1Banner">
        <h2>
          É muito fácil <br />
          anunciar seu serviço no <br />
          vizinhando!
        </h2>
      </div>

      <div className="blocosBanner">
        <div className="itemBanner">
          <div className="iconeBanner">
            <img src="/img/ImagemLaura/grommet.svg" alt="Ícone de Rede" />
          </div>
          <p>
            Anuncie seu serviço de forma rápida <br />
            e em poucas etapas.
          </p>
        </div>
        <div className="itemBanner">
          <div className="iconeBanner">
            <img src="/img/ImagemLaura/message.svg" alt="Ícone de Chat" />
          </div>
          <p>
            Com nosso plano você recebe <br />
            feedback da nossa inteligência artificial.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner2;