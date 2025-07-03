import { useNavigate, NavLink } from "react-router-dom";
import "./PaginaPerfilCliente.css";
import { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { toast } from 'react-toastify';

function PaginaPerfilCliente({ usuario, onUserUpdate, onLogout }) {
  const navigate = useNavigate();
  const [modoEdicao, setModoEdicao] = useState(false);
  const [nomeEditado, setNomeEditado] = useState('');
  const [cepEditado, setCepEditado] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (usuario) {
      setNomeEditado(usuario.nomeUsuario || '');
      setCepEditado(usuario.cepUsuario || '');
    } else {
      toast.warn("Você precisa estar logado para acessar esta página.");
      navigate('/login');
    }
  }, [usuario, navigate]);

  const handleSalvar = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const dadosAtualizados = {
      nomeUsuario: nomeEditado,
      cepUsuario: cepEditado,
    };
    try {
      const usuarioAtualizado = await api.patch(`/api/Usuarios/${usuario.idUsuario}`, dadosAtualizados);
      onUserUpdate(usuarioAtualizado);
      setModoEdicao(false);
      toast.success("Perfil atualizado com sucesso!");
    } catch (error) {
      toast.error(error.message || "Não foi possível atualizar o perfil.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeletar = async () => {
    if (window.confirm("Você tem certeza que deseja deletar a sua conta? Esta ação é irreversível!")) {
      setIsLoading(true);
      try {
        await api.delete(`/api/Usuarios/${usuario.idUsuario}`);
        toast.info("Conta deletada com sucesso.");
        onLogout();
        navigate('/');
      } catch (error) {
        toast.error(error.message || "Não foi possível deletar a conta.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleFotoChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { // 5MB
      toast.error("O arquivo é muito grande! O limite é de 5MB.");
      return;
    }
    if (!file.type.startsWith("image/")) {
      toast.error("Por favor, selecione um arquivo de imagem.");
      return;
    }
    const formData = new FormData();
    formData.append('foto', file);

    setIsLoading(true);
    try {
      const response = await api.upload(`/api/usuarios/${usuario.idUsuario}/foto`, formData);
      if (response.fotoUrl) {
        const usuarioAtualizado = { ...usuario, fotoUsuario: response.fotoUrl };
         onUserUpdate(usuarioAtualizado); 
        toast.success("Foto de perfil atualizada com sucesso!");
      } else {
        throw new Error("A resposta da API não continha a URL da nova foto.");
      }

    } catch (error) {
      toast.error(error.message || "Não foi possível atualizar a foto.");
      console.error("Erro no upload da foto:", error);
    } finally {
      setIsLoading(false);
    }
  };
  if (!usuario) {
    return <div>Carregando perfil...</div>;
  }

  return (
    <div className="quadroGeralCliente">
      <div className="quadroPerfilCliente">
        <div className="imagemPerfilCliente">
          <img src={usuario.fotoUsuario || '/img/semUsuario.svg'} alt={`Foto de perfil de ${usuario.nomeUsuario}`} />
          <label htmlFor="upload-foto" className="botaoTrocarFoto">Trocar Foto</label>
          <input id="upload-foto" type="file" accept="image/png, image/jpeg" style={{ display: 'none' }} onChange={handleFotoChange} />
        </div>

        {modoEdicao ? (
          <form className="infosCliente" onSubmit={handleSalvar}>
            <div className="camposEdicaoCliente">
              <label htmlFor="nomeEditado">Nome:</label>
              <input
                id="nomeEditado" type="text" className="inputEdicaoNome"
                value={nomeEditado} onChange={(e) => setNomeEditado(e.target.value)}//inputEdicaoNome
              />
              <label htmlFor="cepEditado">CEP:</label>
              <input
                id="cepEditado" type="text" className="inputEdicaoCep"
                value={cepEditado} onChange={(e) => setCepEditado(e.target.value)}//inputEdicaoCep
              />
            </div>
            <div className="botoesAcao">
              <button type="submit" className="btn btn-acao-primaria">Salvar</button>
              <button type="button" onClick={() => setModoEdicao(false)} className="btn btn-cinza">Cancelar</button>
            </div>
          </form>
        ) : (
          <div className="infosCliente">
            <div className="nomePerfilCliente">
              <h2>{usuario.nomeUsuario}</h2>
              <p>CEP: {usuario.cepUsuario}</p>
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
              <img src="/img/ImagemLaura/tiktok.svg" className="icon" alt="Ícone do TikTok" />
            </div>
            <div className="botoesAcao">
              <button onClick={() => setModoEdicao(true)} className="btn btn-principal">Editar Perfil</button>
              <button onClick={handleDeletar} className="btn btn-perigo">Deletar Conta</button>
            </div>
          </div>
        )}
      </div>

      <div className="conteudoPerfilCliente">
        <h1 className="TituloPerfilCliente">Preferências</h1>
        <div className="preferenciasCliente">
          <button type="button" className="btn btn-outline">Beleza</button>
          <button type="button" className="btn btn-outline">Manutenção</button>
          <button type="button" className="btn btn-outline">Limpeza</button>
        </div>
      </div>

      <div className="conteudoPerfilCliente">
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
          <p>Serviço excelente!<br />Contrataria novamente!</p>
          <div className="estrelasAvaliacao">
            <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
            <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
            <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
            <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
            <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
          </div>
        </div>
        <div className="quadroAvaliacoesCliente">
          <p>Trabalho impecável!<br />Super recomendo.</p>
          <div className="estrelasAvaliacao">
            <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
            <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
            <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
            <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
            <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
          </div>
        </div>
        <div className="quadroAvaliacoesCliente">
          <p>Ótima profissional!<br />Muito atenciosa.</p>
          <div className="estrelasAvaliacao">
            <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
            <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
            <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
            <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
            <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
          </div>
        </div>
        <div className="quadroAvaliacoesCliente">
          <p>Recomendo fortemente.<br />Resultado incrível.</p>
          <div className="estrelasAvaliacao">
            <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
            <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
            <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
            <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
            <img src="/img/estrela_clara.svg" className="estrelaAvaliacaoCliente" alt="Estrela de avaliação" />
          </div>
        </div>
      </div>

      <div className="botoesCliente">
        <NavLink to="/" className="btn btn-outline">Voltar</NavLink>
      </div>

      <div className="criacaoContaCliente">
        <h2>Conta criada desde Fev - 2025</h2>
      </div>
    </div>
  );
}

export default PaginaPerfilCliente;