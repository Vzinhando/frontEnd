import './PaginaCadastro.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function PaginaCadastro() {
    const navigate = useNavigate();

    const [nome, setNome] = useState = ('');
    const [email, setEmail] = useState = ('');
    const [senha, setSenha] = useState = ('');
    const [confirmarSenha, setConfirmarSenha] = useState = ('');
    const [cep, setCep] = useState = ('');

    const [mensagem, setMensagem] = useState = ({ texto: '', tipo: '' });
    const handleCadastroSubmit = async (event) => {
        event.preventDefault();

        if (senha != confirmarSenha) {
            setMensagem({ texto: 'Senhas não coincidem !', tipo: 'erro' });
            return;
        }
        setMensagem({ texto: ' Realizando o cadastro... ', tipo: 'info' })

        const dadosUsuario = {
            nome,
            email,
            senha,
            cep,
        };

        try {
            const reponse = await fetch('http://localhost:3001/usuarios', {
                method : 'POST',
                header : {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosUsuario),
            });

            if (!reponse.ok) {
                throw new Error('Ocorreu um erro ao realizar o cadastro ');
            }

            setMensagem({ texto: 'Cadastro realizado com sucesso', tipo: 'sucesso' })
            setTimeout(() => {
                navigate('/login');
            }, 2000);

        } catch (error) {
            console.error('Falha no cadastro: ', error)
            setMensagem({ texto: error.message, tipo: 'erro' });
        }
    };

    return (
        <section className='containerCadastro'>
            <div className='dadosCadastro'>

                <h2 className='campoNome'>Nome</h2>
                <input className='campoInput' type="text" placeholder='Digite seu nome completo aqui' />
                <h2 className='campoEmail'>E-mail</h2>
                <input className="campoInput" type="email" placeholder="Digite seu email" required />
                <h2 className='campoSenha'>Senha</h2>
                <input className='campoInput' type="text" placeholder='Digite a sua senha' />
                <h2 className='campoSenha'>Confirmar Senha</h2>
                <input className='campoInput' type="text" placeholder='Digite novamente a sua senha' />
                <h2 className='campoCep' >CEP</h2>
                <input className='campoInput' type="text" placeholder='Digite o seu CEP' />

                <p className='textoLogin'>Já possui uma conta?<NavLink className={'loginClick'} to="/login">Login</NavLink></p><br />
                <p className='esquecerCep'>Esqueceu o seu CEP? <NavLink>Clique aqui</NavLink></p>
                <div className="grupoBotoesPaginaCadastro">
                    <NavLink to="/" className='botaoEntrarCadastro'>Cadastrar</NavLink>
                    <p>Continuar com</p>
                    <NavLink to="/" className='botaoEntrarCadastroGoogle' ><img className='imagemGoogle' src="/img/botaoGoogle.svg" /></NavLink>
                </div>
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