import Aproved from '../../../../../public/img/Planos/Aproved.svg'
import Rejected from '../../../../../public/img/Planos/Rejected.svg'
import BlocoClube from './BlocoClube'
import './Assinatura.css'

function Assinatura() {
  return (
    <>
      <div className="BlocosContainer">
        <BlocoClube
          paraQuemEOPlano="Usúario/Prestador de serviço"
          TituloClube="Plano Grátis"
          valor="Gratis" 
          TipoUsuario="Pessoal"
          tipo={Aproved}
          tipo2={Rejected}
          info1="Acesso total a paltaforma"
          info2="Contrate qualquer serviço"
          info3="Venda seus serviços"
          info4="Sem anúncios"
          tipoBloco="Gratis"
        />

        <BlocoClube
          paraQuemEOPlano="Usúario"
          TituloClube="Clube Vizinhando"
          valor="R$ 19,99"
          tipo={Aproved}
          tipo2={Aproved}
          info1="Acesso total a plataforma"
          info2="Contrate Qualquer serviço"
          info3="Sem anúncios"
          info4="5 Cupons de 10% de desconto na contratação de um serviço"
          tipoBloco="Pessoal"
          button="ADQUIRIR"

        />
        <BlocoClube
          paraQuemEOPlano="Prestador de serviço"
          TituloClube="Clube Vizinhando"
          valor="R$ 19,99"
          tipo={Aproved}
          tipo2={Aproved}
          info1="Sem anúncios"
          info2="Maior área de busca para seu serviço"
          info3="Se destacará entre outros prestadores (Verificado)"
          info4="Receberá valor maior por serviço concluido"
          tipoBloco="Empresarial"
          button="ADQUIRIR"


        />
      </div>
    </>
  )
}

export default Assinatura