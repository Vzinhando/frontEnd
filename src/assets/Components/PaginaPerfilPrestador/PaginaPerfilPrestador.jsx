import { useNavigate } from "react-router-dom";
import "./PaginaPerfilPrestador.css";

const mockPrestador = {
  id: 1,
  nome: "Julia Almeida",
  imagemPerfil: "/img/ImagemLaura/Julia.svg",
  servicosRealizados: 1247,
  dataCriacaoConta: "2025-02-01",
  descricao: "Faço faxinas completas, limpezas pós-obra e organização de armários, cozinhas e espaços pequenos. Trabalho com atenção aos detalhes e respeito ao ambiente da casa.",
  redesSociais: {
    instagram: "#",
    facebook: "#",
    tiktok: "#",
  },
  avaliacoesGerais: {
    servico: 5,
    atendimento: 4,
    agilidade: 5,
  },
  comentarios: [
    {
      id: 101,
      autor: "Mariana C.",
      imagemAutor: "/img/avatar_placeholder.svg",
      nota: 5,
      texto: "Serviço excelente! Contrataria novamente!",
    },
    {
      id: 102,
      autor: "Carlos S.",
      imagemAutor: "/img/avatar_placeholder.svg",
      nota: 4,
      texto: "Trabalho impecável! Super recomendo.",
    },
    {
      id: 103,
      autor: "Ana P.",
      imagemAutor: "/img/avatar_placeholder.svg",
      nota: 5,
      texto: "Muito profissional e atenciosa aos detalhes.",
    },
    {
      id: 104,
      autor: "Lucas M.",
      imagemAutor: "/img/avatar_placeholder.svg",
      nota: 5,
      texto: "Deixou tudo brilhando, resultado fantástico.",
    },
    {
      id: 105,
      autor: "Beatriz L.",
      imagemAutor: "/img/avatar_placeholder.svg",
      nota: 4,
      texto: "Ótima comunicação e serviço bem feito. Recomendo.",
    },
  ],
};

function PaginaPerfilPrestador() {
  const navigate = useNavigate();

  const prestador = mockPrestador;

  const renderStars = (rating, className) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={i <= rating ? "/img/estrela_clara.svg" : "/img/estrela_clara.svg"}
          className={className}
          alt="Estrela de avaliação"
        />
      );
    }
    return stars;
  };

  const dataFormatada = new Date(prestador.dataCriacaoConta).toLocaleDateString('pt-BR', {
    month: 'long',
    year: 'numeric'
  });

  return (
    <>
      <div className="quadroGeralprestador">
        <div className="quadroPerfilPrestaodr">
          <div className="imagemPerfilPrestador">
            <img src={prestador.imagemPerfil} alt={`Imagem de ${prestador.nome}`} />
          </div>
          <div className="infosClientePrestador">
            <div className="nomePerfilClientePrestador">
              <h2>{prestador.nome}</h2>
              <div className="estrelasPerfilClientePrestador">
                {renderStars(prestador.avaliacoesGerais.atendimento, "estrelaCliente")}
              </div>
              <p className="servicosPerfilClientePrestador">
                Mais de {prestador.servicosRealizados} serviços realizados
              </p>
              <div className="iconesRedesPerfilPrestador">
                <a href={prestador.redesSociais.instagram} target="_blank" rel="noopener noreferrer"><img src="/img/ImagemLaura/instagram.svg" className="iconPerfilPrestador" /></a>
                <a href={prestador.redesSociais.facebook} target="_blank" rel="noopener noreferrer"><img src="/img/ImagemLaura/facebook.svg" className="iconPerfilPrestador" /></a>
                <a href={prestador.redesSociais.tiktok} target="_blank" rel="noopener noreferrer"><img src="/img/ImagemLaura/tiktok.svg" className="iconPerfilPrestador" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="informacoesPerfilPrestador">
          <div className="conteudoPerfilPrestador">
            <div className="avaliacoesPerfilPrestador">
              <div className="avaliacaoPerfilPrestador">
                <h2>Serviço: </h2>
                <div className="estrelasLinha">
                  {renderStars(prestador.avaliacoesGerais.servico, "estrelaPerfil")}
                </div>
              </div>
              <div className="avaliacaoPerfilPrestador">
                <h2>Atendimento: </h2>
                <div className="estrelasLinha estrelasLinha2">
                  {renderStars(prestador.avaliacoesGerais.atendimento, "estrelaPerfil")}
                </div>
              </div>
              <div className="avaliacaoPerfilPrestador">
                <h2>Agilidade: </h2>
                <div className="estrelasLinha estrelasLinha3">
                  {renderStars(prestador.avaliacoesGerais.agilidade, "estrelaPerfil")}
                </div>
              </div>
            </div>
          </div>
          <div className="descricaoPerfilPrestadorM">
            <h4>{prestador.descricao}</h4>
          </div>
        </div>

        <div className="todasAvaliacoesPerfilPrestador">
          <p>Ver todas as avaliações!</p>
        </div>

        <div className="containerAvaliacoesPerfilPrestador">
          {prestador.comentarios.map((comentario) => (
            <div key={comentario.id} className="quadroAvaliacoesPrestadores">
              <div className="quadradoPerfilPrestadores">
              </div>
              <p>{comentario.texto}</p>
              <div className="estrelasAvaliacao">
                {renderStars(comentario.nota, "estrelaAvaliacaoItem")}
              </div>
            </div>
          ))}
        </div>

        <div className="duvidasPerfilPrestador">
          <h2>Tem alguma dúvida? Fale com o prestador de serviços!</h2>
          <input type="text" placeholder="Digite aqui" className="campoResposta" />
        </div>

        <div className="botoesPerfilPrestador">
          <button className="voltarPerfilPrestador" onClick={() => navigate(-1)}>Voltar</button>
          <button className="contratarPrestador" onClick={() => alert('Navegando para contratação...')}>Contratar</button>
        </div>

        <div className="criacaoContaPerfilPrestador">
          <h2>Conta criada em {dataFormatada.replace("-", " de ")}</h2>
        </div>
      </div>
    </>
  );
}

export default PaginaPerfilPrestador;