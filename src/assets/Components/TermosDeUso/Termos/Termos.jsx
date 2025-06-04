import './Termos.css'
import Conteudo from '../Conteudo/Conteudo';

function Termos() {
    return (
        <section className='termosContainer'>
            <div className="tituloAtualizacao">
                <h1 className="titulo">Termos de Uso</h1>
                <p className="atualizacao">Última atualização: 05/2025</p>
            </div>
            <Conteudo
                numero="1."
                subtitulo="Sobre o Vizinhando"
                paragrafo="O Vizinhando é uma plataforma online que conecta prestadores de serviços locais a clientes em potencial em suas regiões, oferecendo ferramentas como geolocalização, avaliações, chatbot, planos de assinatura e sistema de pagamento integrado."
            />

            <Conteudo
                numero="2."
                subtitulo="Cadastro e Acesso"
                paragrafo="Para utilizar a plataforma, é necessário criar uma conta, fornecendo informações verdadeiras, completas e atualizadas. O usuário é responsável por manter a confidencialidade de sua conta e senha. Ao se cadastrar, o usuário declara ter mais de 18 anos ou ser legalmente capaz."
            />

            <Conteudo
                numero="3."
                subtitulo="Tipos de Usuários"
                paragrafo="Prestadores de serviço podem criar perfis, ofertar serviços e contratar planos de destaque. Clientes podem buscar profissionais, solicitar orçamentos e realizar contratações via plataforma."
            />

            <Conteudo
                numero="4."
                subtitulo="Planos e Pagamentos"
                paragrafo="O Vizinhando oferece planos gratuitos e pagos, com funcionalidades diferenciadas como maior visibilidade, acesso a relatórios e suporte prioritário. Os pagamentos são processados por sistemas seguros, e o Vizinhando não armazena dados bancários ou de cartão."
            />

            <Conteudo
                numero="5."
                subtitulo="Uso da Geolocalização"
                paragrafo="Utilizamos API de localização para conectar clientes e prestadores da mesma região. Ao aceitar os termos, o usuário permite o uso da sua localização para melhorar a experiência. É possível desativar o compartilhamento de localização, o que pode limitar algumas funcionalidades."
            />

            <Conteudo
                numero="6."
                subtitulo="Chatbot e Comunicação"
                paragrafo="O Vizinhando disponibiliza um chatbot para orientações gerais, auxílio em negociações e suporte automatizado. O chatbot não substitui atendimento humano em casos complexos ou jurídicos."
            />

            <Conteudo
                numero="7."
                subtitulo="Responsabilidade das Partes"
                paragrafo="O Vizinhando atua como facilitador da conexão entre usuários e não se responsabiliza pela qualidade, prazo, entrega ou eventuais danos decorrentes da contratação de serviços. Prestadores devem manter suas informações atualizadas e os clientes devem verificar dados e avaliações antes da contratação."
            />

            <Conteudo
                numero="8."
                subtitulo="Avaliações e Conduta"
                paragrafo="Clientes podem avaliar os serviços prestados. Comentários ofensivos, falsos ou discriminatórios poderão ser removidos. O uso da plataforma para fins ilegais, enganosos ou abusivos resultará na exclusão da conta."
            />

            <Conteudo
                numero="9."
                subtitulo="Propriedade Intelectual"
                paragrafo="Todos os conteúdos da plataforma, como logotipo, marca, textos, layout e funcionalidades, são de propriedade do Vizinhando. É proibida a reprodução ou uso sem autorização prévia."
            />

            <Conteudo
                numero="10."
                subtitulo="Alterações nos Termos"
                paragrafo="Reservamo-nos o direito de alterar estes Termos a qualquer momento. Quaisquer mudanças entram em vigor na data da publicação. O uso contínuo da plataforma após alterações implica aceitação automática."
            />

            <Conteudo
                numero="11."
                subtitulo="Privacidade"
                paragrafo="O tratamento dos dados pessoais segue nossa Política de Privacidade, conforme a Lei Geral de Proteção de Dados (LGPD). Nenhuma informação é compartilhada com terceiros sem o seu consentimento."
            />

            <Conteudo
                numero="12."
                subtitulo="Contato"
                paragrafo="Em caso de dúvidas, sugestões ou problemas, entre em contato com nossa equipe pelo e-mail: suporte@vizinhando.com.br."
            />

        </section>
    )

}

export default Termos;