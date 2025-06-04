import './PaginaCadastro.css'
import { NavLink } from 'react-router-dom';

function PaginaCadastro() {
    return (
        <section className='containerCadastro'>
            <div className='dadosCadastro'>
                <h2 className='campoNome'>Nome</h2>
                <input className='campoInput' type="text" placeholder='Digite seu nome completo aqui' />
                <h2 className='campoEmail'>E-mail</h2>
                <input className = "campoInput"type="email" placeholder="Digite seu email" required />
                <h2 className='campoSenha'>Senha</h2>
                <input className='campoInput' type="text" placeholder='Digite a sua senha' />
                <h2 className='campoSenha'>Confirmar Senha</h2>
                <input className='campoInput' type="text" placeholder='Digite novamente a sua senha' />
                <h2 className='campoCep' >CEP</h2>
                <input className='campoInput' type="text" placeholder='Digite o seu CEP' />
                <p className='textoLogin'>Já possui uma conta?<NavLink className={'loginClick'} to = "/login">Login</NavLink></p><br/>
                <p className='esquecerCep'>Esqueceu o seu CEP? <NavLink>Clique aqui</NavLink></p>
                <button className='botaoEntrarCadastro'>Cadastrar</button>
            </div>
            <div className='linhaReta'></div>
            <div className='logoBemVindo'>
                <img className='imagem' src="/img/Logo/Logo.svg" alt="Logo Vizinhando" width="300px" />
                <h1 className='textoBemVindo'>Seja bem vindo(a) de volta!</h1>
            </div>
        </section>
    )
}

export default PaginaCadastro;