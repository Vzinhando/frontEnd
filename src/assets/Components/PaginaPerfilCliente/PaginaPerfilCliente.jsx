import "./PaginaPerfilCliente.css";

function PaginaPerfilCliente() {
  return (
    <>
      <div className="quadroGeralCliente">
        <div className="quadroPerfilCliente">
          <div className="imagemPerfilCliente">
            <img src="/img/ImagemLaura/Vanessa1.svg" alt="Foto de perfil de Vanessa" />
          </div>
          <div className="infosCliente">
            <div className="nomePerfilCliente">
              <h2>Vanessa</h2>
            </div>

            <div className="estrelasPerfilCliente">
              <img src="/img/estrela_clara.svg" className="estrelaCliente" alt="Estrela de avaliação" />
              <img src="/img/estrela_clara.svg" className="estrelaCliente" alt="Estrela de avaliação" />
              <img src="/img/estrela_clara.svg" className="estrelaCliente" alt="Estrela de avaliação" />
              <img src="/img/estrela_clara.svg" className="estrelaCliente" alt="Estrela de avaliação" />
              <img src="/img/estrela_clara.svg" className="estrelaCliente" alt="Estrela de avaliação" />
            </div>
            
            <div className="iconesRedesCliente">
              <img src="/img/ImagemLaura/instagram.svg" className="icon" alt="Ícone do Instagram" />
              <img src="/img/ImagemLaura/facebook.svg" className="icon" alt="Ícone do Facebook" />
              <img src="/img/SocialMedia/icon_tiktok.svg" className="icon" alt="Ícone do TikTok" />
            </div>
          </div>
        </div>

        <div className="conteudoPerfilCliente">
          <h1 className="TituloPerfilCliente">Preferências</h1>
          <div className="avaliacoesCliente">
            <div className="avaliacaoBoxCliente">
              <h2>Beleza</h2>
            </div>
            <div className="avaliacaoBoxCliente">
              <h2>Manutenção</h2>
            </div>
            <div className="avaliacaoBoxCliente">
              <h2>Limpeza</h2>
            </div>
          </div>
        </div>

        <div className="quadroCartoesCliente">

          <div className="cardsCliente">
            <div className="cardCliente">

              <h3 className="cardCliente-numero">8</h3>
              <h4 className="cardCliente-info">Comentários <br/> feitos</h4>
            </div>

            <div className="cardCliente">

              <h3 className="cardCliente-numero">12</h3>
              <h4 className="cardCliente-info">Serviços <br/> contratados</h4>
            </div>
          </div>
        </div>
        
        <div className="todasAvaliacoesCliente">
          <p>Ver o histórico de avaliações!</p>
        </div>

        <div className="containerAvaliacoesCliente">
          <div className="quadroAvaliacoesCliente">
            <div className="quadradoCliente"></div>
            <p>
              Serviço excelente!
              <br /> Contrataria novamente!
            </p>
            <div>
              <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
              <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
              <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
              <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
              <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
            </div>
          </div>
          <div className="quadroAvaliacoesCliente">
            <div className="quadradoCliente"></div>
            <p>
              Trabalho impecável!
              <br />
              Super recomendo.
            </p>
             <div>
              <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
              <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
              <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
              <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
              <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
            </div>
          </div>
          <div className="quadroAvaliacoesCliente">
            <div className="quadradoCliente"></div>
            <p>
              Ótima profissional!
              <br />
              Muito atenciosa.
            </p>
             <div>
              <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
              <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
              <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
              <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
              <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
            </div>
          </div>
          <div className="quadroAvaliacoesCliente">
            <div className="quadradoCliente"></div>
            <p>
              Recomendo fortemente.
              <br />
              Resultado incrível.
            </p>
             <div>
              <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
              <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
              <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
              <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
              <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
            </div>
          </div>
        </div>
        
        <div className="botoesCliente">
          <button className="voltarCliente">Voltar</button>
        </div>
        <div className="criacaoContaCliente">
          <h2>Conta criada desde Fev - 2025</h2>
        </div>
      </div>
    </>
  );
}

export default PaginaPerfilCliente;