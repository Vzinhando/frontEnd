import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./assets/Components/Header/Header";
import Footer from "./assets/Components/Footer/Footer";
import PaginaLogin from "./assets/Components/PaginaLogin/PaginaLogin";
import PaginaCadastro from "./assets/Components/PaginaCadastro/PaginaCadastro";
import PaginaSobre from "./assets/Components/PaginaSobre/PaginaSobre";
import FormaPagamento from "./assets/Components/PaginaPagamento/Pagamentos/FormaPagamento";
import ConfirmacaoPagamento from "./assets/Components/PaginaPagamento/ConfirmacaoPagamento/ConfirmacaoPagamento";
import PagamentoBoleto from "./assets/Components/PaginaPagamento/PagamentoBoleto/PagamentoBoleto";
import PaginaBoleto from "./assets/Components/PaginaPagamento/PaginaBoleto/PaginaBoleto";
import PaginaPrincipal from "./assets/Components/PaginaPrincipal/PaginaPrincipal";
import Termos from "./assets/Components/TermosDeUso/Termos/Termos";
import NaoEncontrado from "./assets/Components/NaoEncontrado/NaoEncontrado";
import TelaConfirmarPix from "./assets/Components/PaginaPagamento/TelaConfirmarPix/TelaConfirmarPix";
import FormasDePagamentoCartao from "./assets/Components/PaginaPagamento/FormasDePagamentoCartao/FormasDePagamentoCartao";
import ConfirmarPagamento from "./assets/Components/PaginaPagamento/ConfirmarPagamento/ConfirmarPagamento";
import BuscaPrestador from "./assets/Components/BuscaPrestador/BuscaPrestador";
import PaginaPreCadastro from "./assets/Components/PaginaPreCadastro/PaginaPreCadastro";
import PaginaServico from "./assets/Components/PaginaServico/PaginaServico";
import PaginaPerfilPrestador from "./assets/Components/PaginaPerfilPrestador/PaginaPerfilPrestador";
import PaginaPerfilCliente from "./assets/Components/PaginaPerfilCliente/PaginaPerfilCliente";
import InformacoesPessoais from "./assets/Components/InformacoesPessoais/InformacoesPesoais";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/login" element={<PaginaLogin />} />
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
        <Route
          path="/confirmacao-pagamento"
          element={<ConfirmacaoPagamento />}
        />
        <Route path="/pesquisar-servico" element={<BuscaPrestador />} />
        <Route path="/perfil-cliente" element={<PaginaPerfilCliente />} />
        <Route path="/cadastro-prestador" element={<PaginaPreCadastro />} />
        <Route path="/pagina-servico" element={<PaginaServico />} />
        <Route path="/pagina-prestador" element={<PaginaPerfilPrestador />} />
        <Route path="/informacoes-pessoais" element={<InformacoesPessoais />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
{
  /*Caso algum className de algum componente estiver com nomes genericos
       sem uma identificao ex: container ou texto, Por favor troque para um nome unico
       ex.: containerNomeComponente ou textoNomeComponente
       */
}

export default App;
