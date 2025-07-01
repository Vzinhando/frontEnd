import './PaginaCadastro.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../../services/api'; 
import { toast } from 'react-toastify';

function PaginaCadastro() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [cep, setCep] = useState('');
    const [isLoading, setIsLoading] = useState(false);

const handleCadastroSubmit = async (event) => {
    event.preventDefault();
    
    if (senha !== confirmarSenha) {
        toast.warn('As senhas não coincidem!');
        return;
    }

    setIsLoading(true);
    const dadosParaApi = {
        nomeUsuario: nome,
        emailUsuario: email,
        senha: senha,
        cepUsuario: cep,
        tipoUsuario: "Cliente",
        dataNascimentoUsuario: "1990-01-01",
        telefoneUsuario: "99999-9999",
        enderecoUsuario: "endereco",
        cidadeUsuario: "sao paulo"
    };

    try {
        await api.post('/api/Usuarios/cadastro', dadosParaApi);

        toast.success('Cadastro realizado com sucesso!');
        navigate('/login');

    } catch (error) {
        toast.error(error.message || 'Não foi possível realizar o cadastro.');
        console.error('Falha no cadastro: ', error);
    } finally {
        setIsLoading(false);
    }
};

    return (
        <section className='containerCadastro'>
            <form className='dadosCadastro' onSubmit={handleCadastroSubmit}>
                {/* O seu JSX continua o mesmo, com os labels e inputs corretos */}
                <label className='campoNome' htmlFor='nome'>Nome</label>
                <input
                    id='nome'
                    className='campoInput'
                    type="text"
                    placeholder='Digite seu nome completo aqui'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />

                <label className='campoEmail' htmlFor='email'>E-mail</label>
                <input
                    id='email'
                    className="campoInput"
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label className='campoSenha' htmlFor='senha'>Senha</label>
                <input
                    id='senha'
                    className='campoInput'
                    type="password"
                    placeholder='Digite a sua senha'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
                
                <label className='campoSenha' htmlFor='confirmarSenha'>Confirmar Senha</label>
                <input
                    id='confirmarSenha'
                    className='campoInput'
                    type="password"
                    placeholder='Digite novamente a sua senha'
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    required
                />

                <label className='campoCep' htmlFor='cep'>CEP</label>
                <input
                    id='cep'
                    className='campoInput'
                    type="text"
                    placeholder='Digite o seu CEP'
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    required
                />

                <p className='textoLogin'>Já possui uma conta? <NavLink className={'loginClick'} to="/login">Login</NavLink></p><br />
                <p className='esquecerCep'>Esqueceu o seu CEP? <NavLink to="/recuperar-cep">Clique aqui</NavLink></p>

                <div className="grupoBotoesPaginaCadastro">
                    <button type='submit' className='botaoEntrarCadastro' disabled={isLoading}>
                        {isLoading ? 'Cadastrando...' : 'Cadastrar'}
                    </button>
                    <p>Continuar com</p>
                    <NavLink to="/" className='botaoEntrarCadastroGoogle'><img className='imagemGoogle' src="/img/botaoGoogle.svg" alt="Login com Google" /></NavLink>
                </div>
            </form>

            <div className='linhaReta'></div>
            <div className='logoBemVindo'>
                <img className='imagem' src="/img/Logo/Logo.svg" alt="Logo Vizinhando" width="300px" />
                <h1 className='textoBemVindo'>Seja bem vindo(a)!</h1>
            </div>
        </section>
    );
}

export default PaginaCadastro;