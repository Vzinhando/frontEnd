import { NavLink, useNavigate } from 'react-router-dom';
import './PaginaLogin.css'
import { useState } from 'react';

function PaginaLogin() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState({ texto: '', tipo: '' });
    const navigate = useNavigate();

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        setMensagem({ texto: 'Verificando...', tipo: 'info' })

        try {
            const response = await fetch(`http://localhost:3001/usuarios?email=${email}`);

            if (!response.ok) {
                throw new Error('Falha na comunicação com o servidor.');
            }

            const usuariosEncontrados = await response.json();

            if (usuariosEncontrados.length > 0 && usuariosEncontrados[0].senha === senha) {
                setMensagem({ texto: 'Login bem-sucedido! Redirecionando...', tipo: 'sucesso' });

                localStorage.setItem('usuarioLogado', JSON.stringify(usuariosEncontrados[0]));

                setTimeout(() => {
                    navigate('/');
                }, 1500);

            } else {
                setMensagem({ texto: 'E-mail ou senha inválidos.', tipo: 'erro' });
            }
        } catch (error) {
            console.error('Erro no login', error);
            setMensagem({ texto: error.message, tipo: 'erro' });
        }
    }

    return (
        <section className='containerLogin'>
            <form className='dadosLogin' onSubmit={handleLoginSubmit}>

                <h2 className='campoLogin'>Login</h2>
                <input
                    className="campoInputLogin"
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <h2 className='campoSenha'>Senha</h2>
                <input
                    className='campoInputSenha'
                    type="password"
                    placeholder='Digite a sua senha'
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />

                <p className='esquecerSenha'>Esqueceu a senha?<a>Clique aqui</a></p><br />
                <p className='textoCadastrar'>Ainda não possui uma conta? <NavLink className={'cadastroClick'} to="/cadastro">Cadastre-se</NavLink> </p>

                {mensagem.texto && (
                    <div className={`mensagemLogin ${mensagem.tipo}`}>
                        {mensagem.texto}
                    </div>
                )}

                <div className='grupoBotoesLogin'>
                    <button type='submit' className='botaoEntrarLogin'>Avançar</button>
                    <p>Continuar com</p>
                    <NavLink to="/" className='botaoLogarGoogle' ><img className='imagemGoogleLogar' src="/img/botaoGoogle.svg" alt="Login com Google" /></NavLink>
                </div>
            </form>
            <div className='linhaReta'></div>
            <div className='logoBemVindo'>
                <img className='imagemLogo' src="/img/Logo/Logo.svg" alt="Logo Vizinhando" width="300px" />
                <h1 className='textoBemVindo'>Seja bem vindo(a) de volta!</h1>
            </div>
        </section>
    )
}

export default PaginaLogin;