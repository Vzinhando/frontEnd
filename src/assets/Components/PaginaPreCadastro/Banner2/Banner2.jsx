import './Banner2.css'


function Banner2 () {
    return(
        <>
        <div className="informacoes">
              <div className="bloco1">
                <h2>
                  É muito fácil <br />
                  anunciar seu serviço no <br />
                  vizinhando!
                </h2>
              </div>
        
              <div className="blocos">
                <div className="item1">
                  <div className="icone1">
                    <img src="/img/ImagemLaura/grommet.svg" alt="Rede" />
                  </div>
                  <p>Anuncie seu serviço de forma rápida <br/> e em poucas etapas.</p>
                </div>
                <div className="item2">
                  <div className="icone2">
                    <img src="/img/ImagemLaura/message.svg" alt="Chat" />
                  </div>
                  <p>
                    Com nosso plano você recebe <br />
                    feedback da nossa inteligência artificial
                  </p>
                </div>
              </div>
            </div>
        </>
    )
}

export default Banner2