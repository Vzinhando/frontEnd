import './BlocoMulher.css'
import MulherBloco from '../../../../../public/img/BlocoMulheres/mulher_com_produtos_maquiagem.svg'

function BlocoMulher(){
    return(
        <>
       <div className='BlocoMulher'>
        <div className='TextosBlocosMulher'>
        <h1 className='TextoBlocoMulher'>No Vizinhando, sua <br />vizinhança vira comunidade.
        </h1>
        <h2 className='Texto2BlocoMulher'>
            Descubra talentos, troque serviços, <br />
             participe de eventos e fortaleça laços <br /> com quem está logo ali, do outro lado da rua.
        </h2>
        </div>
        <img className='MulherfotoBlocoMulher' src={MulherBloco} />
    
       </div>
     </>
    )
}

export default BlocoMulher