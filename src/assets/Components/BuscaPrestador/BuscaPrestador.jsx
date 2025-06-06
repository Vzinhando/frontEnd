import "./BuscaPrestador.css";
import CardPrestador from "./CardPrestador/CardPrestador";
import PesquisarPrestador from "./PesquisarPrestador/PesquisarPrestador";

function BuscaPrestador() {
  return (
    <>
      <main className="mainBuscaPrestador">
        <div className="containerBuscaPrestador">
          <PesquisarPrestador />
          <div className="subTituloBuscaPrestador">
            <h2>Recomendados</h2>
          </div>
          <div className="prestadoresBuscaPrestador">
            <CardPrestador
              avaliacaoPrestador="4.5"
              nomePrestadorServico="Marcenaria do Seu Zé"
              distanciaPrestadorServico="500M"
              fotoPrestadorPerfil="/img/BuscaPrestadorIcon/marceneiroPerfil.svg"
              imagemPrestador="/img/BuscaPrestadorIcon/marceneiroServicos.svg"
            />
            <CardPrestador
              avaliacaoPrestador="3.9"
              nomePrestadorServico="Doces da Lu"
              distanciaPrestadorServico="100M"
              fotoPrestadorPerfil="/img/BuscaPrestadorIcon/lojaDocesPerfil.svg"
              imagemPrestador="/img/BuscaPrestadorIcon/lojaDoces.svg"
            />
            <CardPrestador
              avaliacaoPrestador="4.0"
              nomePrestadorServico="Lucinda Costureira"
              distanciaPrestadorServico="50M"
              fotoPrestadorPerfil="/img/BuscaPrestadorIcon/costureiraPerfil.svg"
              imagemPrestador="/img/BuscaPrestadorIcon/costureiraServico.svg"
            />
            <CardPrestador
              avaliacaoPrestador="4.0"
              nomePrestadorServico="Lucinda Costureira"
              distanciaPrestadorServico="50M"
              fotoPrestadorPerfil="/img/BuscaPrestadorIcon/costureiraPerfil.svg"
              imagemPrestador="/img/BuscaPrestadorIcon/costureiraServico.svg"
            />
            <CardPrestador
              avaliacaoPrestador="4.5"
              nomePrestadorServico="Marcenaria do Seu Zé"
              distanciaPrestadorServico="500M"
              fotoPrestadorPerfil="/img/BuscaPrestadorIcon/marceneiroPerfil.svg"
              imagemPrestador="/img/BuscaPrestadorIcon/marceneiroServicos.svg"
            />
            <CardPrestador
              avaliacaoPrestador="3.9"
              nomePrestadorServico="Doces da Lu"
              distanciaPrestadorServico="100M"
              fotoPrestadorPerfil="/img/BuscaPrestadorIcon/lojaDocesPerfil.svg"
              imagemPrestador="/img/BuscaPrestadorIcon/lojaDoces.svg"
            />
            <CardPrestador
              avaliacaoPrestador="3.9"
              nomePrestadorServico="Doces da Lu"
              distanciaPrestadorServico="100M"
              fotoPrestadorPerfil="/img/BuscaPrestadorIcon/lojaDocesPerfil.svg"
              imagemPrestador="/img/BuscaPrestadorIcon/lojaDoces.svg"
            />
            <CardPrestador
              avaliacaoPrestador="4.0"
              nomePrestadorServico="Lucinda Costureira"
              distanciaPrestadorServico="50M"
              fotoPrestadorPerfil="/img/BuscaPrestadorIcon/costureiraPerfil.svg"
              imagemPrestador="/img/BuscaPrestadorIcon/costureiraServico.svg"
            />
            <CardPrestador
              avaliacaoPrestador="4.5"
              nomePrestadorServico="Marcenaria do Seu Zé"
              distanciaPrestadorServico="500M"
              fotoPrestadorPerfil="/img/BuscaPrestadorIcon/marceneiroPerfil.svg"
              imagemPrestador="/img/BuscaPrestadorIcon/marceneiroServicos.svg"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default BuscaPrestador
