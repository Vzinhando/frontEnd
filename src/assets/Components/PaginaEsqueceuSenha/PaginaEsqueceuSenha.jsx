// Arquivo: src/components/PaginaEsqueceuSenha/PaginaEsqueceuSenha.jsx

import { useState } from 'react';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import './PaginaEsqueceuSenha.css'

function PaginaEsqueceuSenha() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {

            await api.post('/api/Usuarios/solicitar-redefinicao', { emailUsuario: email });
            toast.success("Se um usuário com este e-mail existir, um link de redefinição foi enviado.");
            setEmail('');
        } catch (error) {

            toast.info("Se um usuário com este e-mail existir, um link de redefinição foi enviado.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className='containerEsqueceuSenha'>
            <div className='formContainer'>
                <form onSubmit={handleSubmit}>
                    <h2>Esqueceu sua senha?</h2>
                    <p>Não se preocupe. Digite seu e-mail abaixo e enviaremos um link para você criar uma nova senha.</p>
                    <label htmlFor="email-recuperacao">E-mail</label>
                    <input id="email-recuperacao" /* ... */ />
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Enviando...' : 'Enviar Link de Redefinição'}
                    </button>
                </form>
            </div>
            <div className='linhaReta'></div>
            <div className='logoBemVindo'>
                <img className='imagemLogo' src="/img/Logo/Logo.svg" alt="Logo Vizinhando" width="300px" />
                <h1 className='textoBemVindo'>Recuperação de Conta</h1>
            </div>
        </section>
    );
}

export default PaginaEsqueceuSenha;