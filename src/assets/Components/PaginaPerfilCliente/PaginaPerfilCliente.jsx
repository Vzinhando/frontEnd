import { useNavigate, NavLink } from "react-router-dom";
import "./PaginaPerfilCliente.css";
import { useState, useEffect } from "react";

function PaginaPerfilCliente() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState(null);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [nomeEditado, setNomeEditado] = useState('');
  const [cepEditado, setCepEditado] = useState('');

  useEffect(() => {
    const usuarioJson = localStorage.getItem('usuarioLogado');

    if (usuarioJson) {
      const usuarioLogado = JSON.parse(usuarioJson);
      setUsuario(usuarioLogado);
      setNomeEditado(usuarioLogado.nome);
      setCepEditado(usuarioLogado.cep);
    } else {
      alert("Você precisa estar logado para acessar esta página.");
      navigate('/login');
    }
  }, [navigate]);
  
  // <<< NOVO: Função para trocar a foto >>>
  const handleFotoChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      const base64String = reader.result;
      try {
        const response = await fetch(`http://localhost:3001/usuarios/${usuario.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ foto: base64String }),
        });

        if (!response.ok) throw new Error("Falha ao atualizar a foto de perfil.");

        const usuarioAtualizado = await response.json();
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioAtualizado));

        window.dispatchEvent(new Event('storageUpdate'));
        
        setUsuario(usuarioAtualizado);

        alert("Foto de perfil atualizada com sucesso!");

      } catch (error) {
        console.error("Erro ao atualizar foto:", error);
        alert(error.message);
      }
    };

    reader.onerror = () => {
      alert("Houve um erro ao tentar ler o arquivo da imagem.");
    };
  };

  const handleSalvar = async (event) => {
    event.preventDefault();
    const dadosAtualizados = {
      nome: nomeEditado,
      cep: cepEditado,
    };

    try {
      const response = await fetch(`http://localhost:3001/usuarios/${usuario.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosAtualizados),
      });

      if (!response.ok) throw new Error("Falha ao atualizar perfil.");

      const usuarioAtualizado = await response.json();

      localStorage.setItem('usuarioLogado', JSON.stringify(usuarioAtualizado));
      window.dispatchEvent(new Event('storageUpdate'));
      
      setUsuario(usuarioAtualizado);
      setModoEdicao(false);
      alert("Perfil atualizado com sucesso!");

    } catch (error) {
      console.error("Erro ao atualizar: ", error);
      alert(error.message);
    }
  };

  const handleDeletar = async () => {
    if (window.confirm("Você tem certeza que deseja deletar a sua conta? Esta ação é irreversível!")) {
      try {
        const response = await fetch(`http://localhost:3001/usuarios/${usuario.id}`, {
          method: 'DELETE',
        });

        if (!response.ok) throw new Error("Falha ao deletar conta.");

        alert("Conta deletada com sucesso.");
        localStorage.removeItem('usuarioLogado');
        window.dispatchEvent(new Event('storageUpdate'));
        
        navigate('/');

      } catch (error) {
        console.error("Erro ao deletar: ", error);
        alert(error.message);
      }
    }
  };

  if (!usuario) {
    return <div>Carregando perfil...</div>;
  }

  return (
    <>
      <div className="quadroGeralCliente">
        <div className="quadroPerfilCliente">
          <div className="imagemPerfilCliente">
            <img src={usuario.foto || '/img/botaoGoogle.svg'} alt={`Foto de perfil de ${usuario.nome}`} />

            <label htmlFor="upload-foto" className="botaoTrocarFoto">
              Trocar Foto
            </label>
            <input
              id="upload-foto"
              type="file"
              accept="image/png, image/jpeg"
              style={{ display: 'none' }}
              onChange={handleFotoChange}
            />
          </div>

          {modoEdicao ? (
            <form className="infosCliente" onSubmit={handleSalvar}>
              <div className="camposEdicaoCliente">
                <label htmlFor="nomeEditado">Nome:</label>
                <input
                  id="nomeEditado"
                  type="text"
                  className="inputEdicaoNome"
                  value={nomeEditado}
                  onChange={(e) => setNomeEditado(e.target.value)}
                />
                <label htmlFor="cepEditado">CEP:</label>
                <input
                  id="cepEditado"
                  type="text"
                  className="inputEdicaoCep"
                  value={cepEditado}
                  onChange={(e) => setCepEditado(e.target.value)}
                />
              </div>
              <div className="botoesEdicaoCliente">
                <button type="submit" className="botaoSalvar">Salvar</button>
                <button type="button" onClick={() => setModoEdicao(false)} className="botaoCancelar">Cancelar</button>
              </div>
            </form>
          ) : (
            <div className="infosCliente">
              <div className="nomePerfilCliente">
                <h2>{usuario.nome}</h2>
                <p>CEP: {usuario.cep}</p>
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
              <div className="botoesAcao">
                {!modoEdicao && <button onClick={() => setModoEdicao(true)} className="botaoEditar">Editar Perfil</button>}
                <button onClick={handleDeletar} className="botaoDeletar">Deletar Conta</button>
              </div>
            </div>
          )}
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
              <h4 className="cardCliente-info">Comentários <br /> feitos</h4>
            </div>
            <div className="cardCliente">
              <h3 className="cardCliente-numero">12</h3>
              <h4 className="cardCliente-info">Serviços <br /> contratados</h4>
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
          <NavLink to = "/" className="voltarCliente">Voltar</NavLink>
        </div>
        <div className="criacaoContaCliente">
          <h2>Conta criada desde Fev - 2025</h2>
        </div>
      </div>
    </>
  );
}

export default PaginaPerfilCliente;