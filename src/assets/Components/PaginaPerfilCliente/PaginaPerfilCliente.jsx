import "./PaginaPerfilCliente.css";

function PaginaPerfilCliente() {
  return (
    <>
      <div className="quadroGeralCliente">
        <div className="quadroPerfilCliente">
          <div className="imagemPerfilCliente">
            <img src="/img/ImagemLaura/Vanessa1.svg" alt="" />
          </div>
          <div className="infosCliente">
            <div className="nomePerfilCliente">
              <h2>Vanessa</h2>
              
            </div>

            <div className="estrelasPerfilCliente">
              <img src = "/img/estrela_clara.svg" className="estrelaCliente" />
              <img src = "/img/estrela_clara.svg" className="estrelaCliente" />
              <img src = "/img/estrela_clara.svg" className="estrelaCliente" />
              <img src = "/img/estrela_clara.svg" className="estrelaCliente" />
              <img src = "/img/estrela_clara.svg" className="estrelaCliente" />
            </div>
            
            <div className="iconesRedesCliente">
              <img src="/img/ImagemLaura/instagram.svg" className="icon" />
              <img src="/img/ImagemLaura/facebook.svg" alt="" className="icon" />
              <img src="/img/SocialMedia/icon_tiktok.svg" className="icon" />
            </div>
          </div>
        </div>
        <div className="informacoesPerfilCliente">
           <div className="conteudoPerfilCliente">
            <h1 className="TituloPerfilCliente">Preferencias</h1>
            <div className="avaliacoesCliente">
              <div className="avaliacao1Cliente">
               <h2>Beleza</h2>
                </div>
              <div className="avaliacao2Cliente">
                <h2>Manutenção</h2>
              </div>
              <div className="avaliacao3Cliente">
                <h2>Limpeza</h2>
              </div>
            </div>
          </div>
          <div className="quadroCartoesCliente">
            <div class="cartoesCliente">
    <div class="cardsCliente">
      <div class="cardCliente">
        <div class="texto-infoCliente">
          <div class="numeroCliente">
            <h3>8</h3>
          </div>
          <div class="infoCliente">
            <h4>Comentarios <br/> feitos</h4>
          </div>
        </div>
      </div>

      <div class="cardCliente">
        <div class="texto-infoCliente2">
          <div class="numeroCliente2">
            <h3>12</h3>
          </div>
          <div class="infoCliente2">
            <h4>Serviços <br/> contratados</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
          </div>
        </div>
        <div className="todasAvaliacoesCliente">
          <p>Ver o historico de avaliações!</p>
        </div>
        <div className="containerAvaliacoesCliente">
          <div className="quadroAvaliacoesCliente avaliacao1">
            <div className="quadradoCliente"></div>
            <p>
              Serviço excelente!
              <br /> Contrataria novamente!
            </p>
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
          </div>
          <div className="quadroAvaliacoesCliente avaliacao2">
            <div className="quadradoCliente"></div>
            <p>
              Trabalho impecável!
              <br />
              Super recomendo.
            </p>
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
          </div>
          <div className="quadroAvaliacoesCliente avaliacao3">
            <div className="quadradoCliente"></div>
            <p>
              Trabalho impecável!
              <br />
              Super recomendo.
            </p>
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
          </div>
          <div className="quadroAvaliacoesCliente avaliacao4">
            <div className="quadradoCliente"></div>
            <p>
              Trabalho impecável!
              <br />
              Super recomendo.
            </p>
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
          </div>
          <div className="quadroAvaliacoesCliente avaliacao5">
            <div className="quadradoCliente"></div>
            <p>
              Trabalho impecável!
              <br />
              Super recomendo.
            </p>
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
            <img src = "/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" />
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
