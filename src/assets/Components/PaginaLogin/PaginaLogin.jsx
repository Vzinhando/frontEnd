import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { api } from '../../../services/api'; 
import { toast } from 'react-toastify';
import './PaginaLogin.css';
function PaginaLogin({ onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const credenciais = {
            EmailUsuario: email,
            SenhaUsuario: senha,
        };

        try {
            const response = await api.post('/api/Usuarios/login', credenciais);

            if (response.token && response.usuario) {
                localStorage.setItem('authToken', response.token);
                localStorage.setItem('usuarioLogado', JSON.stringify(response.usuario));
                toast.success(`Bem-vindo(a) de volta, ${response.usuario.nomeUsuario}!`);
                
                if (onLoginSuccess) {
                    onLoginSuccess(response.usuario);
                }
                
            } else {
                throw new Error("Resposta inesperada do servidor.");
            }

        } catch (error) {
            toast.error(error.message || "E-mail ou senha inválidos.");
            console.error("Falha no login:", error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <section className='containerLogin'>
            <form className='dadosLogin' onSubmit={handleLoginSubmit}>
                <label className='campoLogin' htmlFor="login-email">Login</label>
                <input
                    id="login-email"
                    className="campoInputLogin"
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label className='campoSenha' htmlFor="login-senha">Senha</label>
                <input
                    id="login-senha"
                    className='campoInputSenha'
                    type="password"
                    placeholder='Digite a sua senha'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />

                <p className='esquecerSenha'>Esqueceu a senha? <a>Clique aqui</a></p><br />
                <p className='textoCadastrar'>Ainda não possui uma conta? <NavLink className={'cadastroClick'} to="/cadastro">Cadastre-se</NavLink> </p>
                <div className='grupoBotoesLogin'>
                    <button type='submit' className='botaoEntrarLogin' disabled={isLoading}>
                        {isLoading ? 'Entrando...' : 'Avançar'}
                    </button>
                    <p>Continuar com</p>
                    <NavLink to="/" className='botaoLogarGoogle'><img className='imagemGoogleLogar' src="/img/botaoGoogle.svg" alt="Login com Google" /></NavLink>
                </div>
            </form>
            <div className='linhaReta'></div>
            <div className='logoBemVindo'>
                <img className='imagemLogo' src="/img/Logo/Logo.svg" alt="Logo Vizinhando" width="300px" />
                <h1 className='textoBemVindo'>Seja bem vindo(a) de volta!</h1>
            </div>
        </section>
    );
}

export default PaginaLogin;