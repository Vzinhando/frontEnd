import './BlocoMulher.css'
import MulherBloco from '../../../../../public/img/BlocoMulheres/mulher_com_produtos_maquiagem.svg'

function BlocoMulher(){
    return(
        <>
       <div className='BlocoMulher'>
        <div className='TextosBlocos'>
        <h1 className='TextoBloco'>No Vizinhando, sua <br />vizinhança vira comunidade.
        </h1>
        <h2 className='Texto2Bloco'>
            Descubra talentos, troque serviços, <br />
             participe de eventos e fortaleça laços <br /> com quem está logo ali, do outro lado da rua.
        </h2>
        </div>
        <img className='Mulherfoto' src={MulherBloco} />
    
       </div>
     </>
    )
}

export default BlocoMulher