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
import BuscaPrestador from "./assets/Components/BuscaPrestador/BuscaPrestador"

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
        <Route path="/paginapagamento" element={<FormaPagamento />} />
        <Route path="/paginaboleto" element={<PaginaBoleto />} />
        <Route path="/paginapix" element={<TelaConfirmarPix/>} />
        <Route path="/paginacredito" element={<FormasDePagamentoCartao />} />
        <Route path="/paginadebito" element={<FormasDePagamentoCartao />} />
        <Route path="*" element={<NaoEncontrado />} />
        <Route path="/confirmarpagamento" element={<ConfirmarPagamento />} />
        <Route path="/pagamentoboleto" element={<PagamentoBoleto/>} />
        <Route path= "/confirmacaoPagamento" element ={<ConfirmacaoPagamento/>}/>
        <Route path="/pesquisarServico" element={<BuscaPrestador/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;