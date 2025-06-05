import "./PesquisarPrestador.css";

function PesquisarPrestador() {
  return (
    <>
      <div className="pesquisarBuscaPrestador">
        <form className="formBuscaPrestador">
          <input
            type="search"
            placeholder="Pesquisar"
            className="inputPesquisarBuscaPrestador"
          />
          <button type="submit" className="botaoPesquisarBuscaPrestador">
            <img src="./img/BuscaPrestadorIcon/pesquisarBotaoPrestador.svg" alt="" />
          </button>
          <button className="filtroBuscaPrestador">
          <img src="./img/BuscaPrestadorIcon/filtroBotaoPrestador.svg" alt="" />
          </button>
        </form>
      </div>
    </>
  );
}

export default PesquisarPrestador;
