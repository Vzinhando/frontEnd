import "./CardAvaliacao.css";

function CardAvaliacao(props) {
  return (
    <>
      <div className="containerCardAvaliacao">
        <div className="miniContainerImagemCard"></div>
        <div className="imagemAvaliacao">
          <img
            src={props.imagemAvaliadoras}
            alt="Foto de perfil de Clientes"
          />
        </div>
        <div className="containerMainNomeCard">
          <div className="miniContainerDeitadoCard"></div>
          <div className="miniContainerCardAvaliacao">
            <h2>{props.nomeAvaliadoras}</h2>
          </div>
        </div>
        <div className="descricaoCardAvaliacao">
          <p>
            {props.descricaoAvaliadoras}
          </p>
        </div>
      </div>
    </>
  );
}

export default CardAvaliacao;
