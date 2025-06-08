import "./PaginaServico.css";

function PaginaServico() {
  return (
    <>
    <section className="paginaServicoMain">

      <div className="telasPaginaServico">
        <div className="esquerdaPaginaServico">
          <div className="imagemEsquerdaPaginaServico">
            <img src="/img/ImagemLaura/Logo4.svg" alt="" />
          </div>
          <div className="esquerdaTextoPagina">
            <p>
              Mostre ao bairro o que <br /> você faz de melhor!
            </p>
          </div>
        </div>


        <div className="direitaPaginaServico">
          <div className="textoPaginaServico">
            <h2>Descreva seu serviço</h2>
            <p>Compartilhe informações básicas,<br/> como local de atuação e seu serviço.</p>
          </div>
          <div className="textoPaginaServico">
            <h2>Se destaque na vizinhança</h2>
            <p>Adicione fotos, experiências <br/> anteriores e descrição ao seu perfil.</p>
          </div>
          <div className="textoPaginaServico">
            <h2>Comece no Vizinhando!</h2>
            <p>Escolha os preço inicial, verifique as <br/> informações e publique seus serviços.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default PaginaServico;
