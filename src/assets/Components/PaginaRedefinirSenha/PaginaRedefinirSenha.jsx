import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import './PaginaRedefinirSenha.css';

function PaginaRedefinirSenha() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [token, setToken] = useState(null);
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const tokenDaUrl = searchParams.get('token');
        if (tokenDaUrl) {
            setToken(tokenDaUrl);
        } else {
            toast.error("Token de redefinição não encontrado. Por favor, solicite novamente.");
            navigate('/esqueceu-senha');
        }
    }, [searchParams, navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (novaSenha !== confirmarSenha) {
            toast.warn("As senhas não coincidem.");
            return;
        }
        setIsLoading(true);
        try {
            await api.post('/api/Usuarios/redefinir-senha', {
                token: token,
                novaSenha: novaSenha,
                confirmarSenha: confirmarSenha
            });
            toast.success("Senha redefinida com sucesso! Você já pode fazer o login.");
            navigate('/login');
        } catch (error) {
            toast.error(error.message || "Não foi possível redefinir a senha. O token pode ser inválido ou ter expirado.");
        } finally {
            setIsLoading(false);
        }
    };

    if (!token) {
        return <div>Verificando token...</div>
    }

    return (
        <section className='containerRedefinirSenha'>
            <div className='formContainer'>
                <form onSubmit={handleSubmit}>
                    <h2>Crie sua nova senha</h2>
                    <p>Sua nova senha deve ser diferente da anterior.</p>

                    <label htmlFor="nova-senha">Nova Senha</label>
                    <input id="nova-senha" /* ... */ />

                    <label htmlFor="confirmar-nova-senha">Confirmar Nova Senha</label>
                    <input id="confirmar-nova-senha" /* ... */ />

                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Salvando...' : 'Redefinir Senha'}
                    </button>
                </form>
            </div>
            <div className='linhaReta'></div>
            <div className='logoBemVindo'>
                <img className='imagemLogo' src="/img/Logo/Logo.svg" alt="Logo Vizinhando" width="300px" />
                <h1 className='textoBemVindo'>Quase lá!</h1>
            </div>
        </section>
    );
}

export default PaginaRedefinirSenha;