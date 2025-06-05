import "./CardPrestador.css";

function CardPrestador(props) {
  return (
    <>
      <div className="cardPrestador">
        <div className="imagemCardPrestador">
          <img src={props.imagemPrestador} alt="Imagem do comercio" />
          <span className="notaPrestador">{props.avaliacaoPrestador}</span>
          <button className="favoritoPrestador">
            <img src="/img/BuscaPrestadorIcon/favoritoCoracao.svg" alt="" />
          </button>
          <button className="setaEsquerdaPrestador"></button>
          <button className="setaDireitaPrestador"></button>
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
