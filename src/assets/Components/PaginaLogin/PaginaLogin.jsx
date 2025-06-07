import { NavLink } from 'react-router-dom';
import './PaginaLogin.css'

function PaginaLogin() {
    return (
        <section className='containerLogin'>
            <div className='dadosLogin'>
                <h2 className='campoLogin'>Login</h2>
                <input className="campoInputLogin" type="email" placeholder="Digite seu email" required />
                <h2 className='campoSenha'>Senha</h2>
                <input className='campoInputSenha' type="text" placeholder='Digite a sua senha' />
                <p className='esquecerSenha'>Esqueceu a senha?<a>Clique aqui</a></p><br />
                <p className='textoCadastrar'>Ainda não possui uma conta? <NavLink className={'cadastroClick'} to="/cadastro">Cadastre-se</NavLink> </p>
                <div className='grupoBotoesLogin'>
                    <NavLink className='botaoEntrarLogin' to="/">Avançar</NavLink>
                    <p>Continuar com</p>
                    <NavLink to="/" className='botaoLogarGoogle' ><img className='imagemGoogleLogar' src="/img/botaoGoogle.svg" /></NavLink>
                </div>
            </div>
            <div className='linhaReta'></div>
            <div className='logoBemVindo'>
                <img className='imagemLogo' src="/img/Logo/Logo.svg" alt="Logo Vizinhando" width="300px" />
                <h1 className='textoBemVindo'>Seja bem vindo(a) de volta!</h1>
            </div>
        </section>
    )
}

export default PaginaLogin;