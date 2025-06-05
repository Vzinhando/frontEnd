import "./CardPrestador.css";

function CardPrestador(props) {
  return (
    <>
      <div className="cardPrestador">
        <div className="imagemCardPrestador">
          <img src={props.imagemPrestador} alt="Imagem do comercio" />
          <span className="notaPrestador">
            <img src="/img/BuscaPrestadorIcon/estrelaBotao.svg" alt="" />
            {props.avaliacaoPrestador}</span>
          <button className="favoritoPrestador">
            <img src="/img/BuscaPrestadorIcon/coracaoBotao.svg" alt="" />
          </button>
          <button className="setaEsquerdaPrestador">
            <img src="/img/BuscaPrestadorIcon/setaEsquerdaBusca.svg" alt="" />
          </button>
          <button className="setaDireitaPrestador">
            <img src="/img/BuscaPrestadorIcon/setaDireitaBusca.svg" alt="" />
          </button>
        </div>
        <div className="rodapeCardPrestador">
          <img
            src={props.fotoPrestadorPerfil}
            alt="Foto de perfil do prestador"
            className="avatarPrestador"
          />
          <div className="infoPrestador">
            <p className="nomePrestador">{props.nomePrestadorServico}</p>
            <p className="distanciaPrestador">
              {props.distanciaPrestadorServico}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPrestador;
