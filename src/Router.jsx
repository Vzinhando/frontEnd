import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollNoTopo from "./assets/Components/ScrollNoTopo/ScrollNoTopo";

// Componentes carregados estaticamente (necessários em todas as páginas)
import Header from "./assets/Components/Header/Header";
import Footer from "./assets/Components/Footer/Footer";
import NaoEncontrado from "./assets/Components/NaoEncontrado/NaoEncontrado";
// Conversão de todos os componentes de rota para lazy loading
const PaginaPrincipal = lazy(() => import("./assets/Components/PaginaPrincipal/PaginaPrincipal"));
const Termos = lazy(() => import("./assets/Components/TermosDeUso/Termos/Termos"));
const PaginaLogin = lazy(() => import("./assets/Components/PaginaLogin/PaginaLogin"));
const PaginaCadastro = lazy(() => import("./assets/Components/PaginaCadastro/PaginaCadastro"));
const PaginaSobre = lazy(() => import("./assets/Components/PaginaSobre/PaginaSobre"));
const FormaPagamento = lazy(() => import("./assets/Components/PaginaPagamento/Pagamentos/FormaPagamento"));
const ConfirmacaoPagamento = lazy(() => import("./assets/Components/PaginaPagamento/ConfirmacaoPagamento/ConfirmacaoPagamento"));
const PagamentoBoleto = lazy(() => import("./assets/Components/PaginaPagamento/PagamentoBoleto/PagamentoBoleto"));
const PaginaBoleto = lazy(() => import("./assets/Components/PaginaPagamento/PaginaBoleto/PaginaBoleto"));
const TelaConfirmarPix = lazy(() => import("./assets/Components/PaginaPagamento/TelaConfirmarPix/TelaConfirmarPix"));
const FormasDePagamentoCartao = lazy(() => import("./assets/Components/PaginaPagamento/FormasDePagamentoCartao/FormasDePagamentoCartao"));
const ConfirmarPagamento = lazy(() => import("./assets/Components/PaginaPagamento/ConfirmarPagamento/ConfirmarPagamento"));
const BuscaPrestador = lazy(() => import("./assets/Components/BuscaPrestador/BuscaPrestador"));
const PaginaPreCadastro = lazy(() => import("./assets/Components/PaginaPreCadastro/PaginaPreCadastro"));
const PaginaServico = lazy(() => import("./assets/Components/PaginaServico/PaginaServico"));
const PaginaPerfilPrestador = lazy(() => import("./assets/Components/PaginaPerfilPrestador/PaginaPerfilPrestador"));
const PaginaPerfilCliente = lazy(() => import("./assets/Components/PaginaPerfilCliente/PaginaPerfilCliente"));
const InformacoesPessoais = lazy(() => import("./assets/Components/InformacoesPessoais/InformacoesPesoais"));

// Um componente de loading para usar no Suspense (opcional, mas recomendado)
const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', color: '#200c80' }}>
    <h2>Carregando...</h2>
  </div>
);


function Router() {
  const [usuarioLogado, setUsuarioLogado] = useState(() => {
    const savedUser = localStorage.getItem('usuarioLogado');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleUserUpdate = (userData) => {
    if (!userData) {
      localStorage.removeItem('usuarioLogado');
      setUsuarioLogado(null);
    } else {
      localStorage.setItem('usuarioLogado', JSON.stringify(userData));
      setUsuarioLogado(userData);
    }
  };

  return (
    <BrowserRouter>
    <ScrollNoTopo/>
      <Header usuario={usuarioLogado} onLogout={() => handleUserUpdate(null)} />
      
      {/* PASSO 3: Envolver as rotas com Suspense */}
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/login" element={<PaginaLogin onLoginSuccess={handleUserUpdate} />} />
          <Route path="/cadastro" element={<PaginaCadastro />} />
          <Route path="/sobre" element={<PaginaSobre />} />
          <Route path="/pagina-pagamento" element={<FormaPagamento />} />
          <Route path="/pagina-boleto" element={<PaginaBoleto />} />
          <Route path="/pagina-pix" element={<TelaConfirmarPix />} />
          <Route path="/pagina-credito" element={<FormasDePagamentoCartao />} />
          <Route path="/pagina-debito" element={<FormasDePagamentoCartao />} />
          <Route path="*" element={<NaoEncontrado />} />
          <Route path="/confirmar-pagamento" element={<ConfirmarPagamento />} />
          <Route path="/pagamento-boleto" element={<PagamentoBoleto />} />
          <Route path="/confirmacao-pagamento" element={<ConfirmacaoPagamento />}/>
          <Route path="/pesquisar-servico" element={<BuscaPrestador />} />
          <Route 
            path="/perfil-cliente" 
            element={<PaginaPerfilCliente usuario={usuarioLogado} onUserUpdate={handleUserUpdate} />} 
          />
          <Route path="/pre-cadastro-prestador" element={<PaginaPreCadastro />} />
          <Route path="/pagina-servico" element={<PaginaServico />} />
          <Route path="/perfil-prestador" element={<PaginaPerfilPrestador />} />
          <Route path="/informacoes-pessoais" element={<InformacoesPessoais />} />
        </Routes>
      </Suspense>
      
      <Footer />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
    </BrowserRouter>
  );
}

export default Router;