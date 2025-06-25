import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./InformacoesPessoais.css";
import CampoDigitar from "./CampoDeDigitar/campoDigitar";

function InformacoesPessoais() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    dataNascimento: '',
    genero: '',
    cep: '',
    cidade: '',
    rua: '',
    numero: '',
    bairro: '',
    tipoLocal: '',
    imagemPerfil: '/img/Desenvolvedores/Rodrigues.svg',
    servicosRealizados: 0,
    dataCriacaoConta: new Date().toISOString(),
    descricao: 'Prestador de serviços recém-cadastrado.',
    redesSociais: { instagram: '', facebook: '', tiktok: '' },
    avaliacoesGerais: { servico: 0, atendimento: 0, agilidade: 0 },
    comentarios: []
  });

  const [mensagem, setMensagem] = useState('');

  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCepBlur = async (evento) => {
    const cep = evento.target.value.replace(/\D/g, '');
    if (cep.length !== 8) return;

    try {
      setMensagem('Buscando CEP...');
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data.erro) {
        setMensagem('CEP não encontrado.');
        setFormData(prev => ({ ...prev, rua: '', bairro: '', cidade: '' }));
      } else {
        setFormData(prev => ({
          ...prev,
          rua: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
        }));
        setMensagem('');
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      setMensagem('Não foi possível buscar o CEP.');
    }
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    setMensagem('Enviando dados...');

    try {
      const response = await fetch('http://localhost:3001/prestadores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const novoPrestador = await response.json();
        setMensagem('Cadastro realizado com sucesso! Redirecionando para o seu perfil...');
        setTimeout(() => {
          navigate(`/perfil/${novoPrestador.id}`);
        }, 2000);
      } else {
        setMensagem('Erro ao realizar o cadastro.');
      }
    } catch (error) {
      setMensagem('Falha na comunicação com o servidor.');
    }
  };

  return (
    <form className="containerInformacoesPessoais" onSubmit={handleSubmit}>
      <h1 className="informacoesPessoais">Informações Pessoais</h1>
      <div className="Pai1">
        <section className="cartao1">
          <CampoDigitar Nome="Nome" type="text" name="nome" value={formData.nome} onChange={handleChange} />
          
          <CampoDigitar
            Nome="Telefone"
            name="telefone"
            placeholder="(99) 91234-5678"
            value={formData.telefone}
            onChange={handleChange}
            type="tel"
            maxLength="15" 
          />
          
          <CampoDigitar Nome="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
          <CampoDigitar Nome="Data de nascimento" type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} />
          <h2 className="H2Genero">Gênero</h2>
          <div className="Genero">
            <label><input type="radio" name="genero" value="Masculino" checked={formData.genero === 'Masculino'} onChange={handleChange} className="roundCheckbox" /> Masculino</label>
            <label><input type="radio" name="genero" value="Feminino" checked={formData.genero === 'Feminino'} onChange={handleChange} className="roundCheckbox" /> Feminino</label>
            <label className="Outros"><input type="radio" name="genero" value="Outros" checked={formData.genero === 'Outros'} onChange={handleChange} className="roundCheckbox" /> Outros</label>
          </div>
        </section>

        <section className="cartao2">
          <div className="Inputs">
            <CampoDigitar
              Nome="CEP"
              name="cep"
              placeholder="00000-000"
              value={formData.cep}
              onChange={handleChange}
              onBlur={handleCepBlur}
              type="tel"
              maxLength="9"
            />
            <CampoDigitar Nome="Cidade" type="text" name="cidade" value={formData.cidade} onChange={handleChange} />
            <CampoDigitar Nome="Rua" type="text" name="rua" value={formData.rua} onChange={handleChange} />
            <div className="AoLado">
              <div className="Numero"><CampoDigitar Nome="Número" type="text" name="numero" value={formData.numero} onChange={handleChange} /></div>
              <div className="Bairro"><CampoDigitar Nome="Bairro" type="text" name="bairro" value={formData.bairro} onChange={handleChange} /></div>
            </div>
          </div>
          <h2 className="LocalTipo">Tipo de local</h2>
          <div className="local">
            <label><input type="radio" name="tipoLocal" value="Residencial" checked={formData.tipoLocal === 'Residencial'} onChange={handleChange} className="roundCheckbox" /> Residencial</label>
            <label className="comercial"><input type="radio" name="tipoLocal" value="Comercial" checked={formData.tipoLocal === 'Comercial'} onChange={handleChange} className="roundCheckbox" /> Estabelecimento comercial</label>
          </div>
        </section>
      </div>

      {mensagem && <p className="mensagem-status">{mensagem}</p>}

      <div className="Pai2">
        <button type="submit" className="continuar">Cadastrar</button>
      </div>
    </form>
  );
}

export default InformacoesPessoais;