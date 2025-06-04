import './duvida.css';

import ImagemMulher from '../../../../../public/img/BlocoMulheres/duvidamulher.svg'

function Duvida(){
    return (
        <>
        <div className='duvidaContainer'>

            <h1  className='textoDuvida'>O que estão dizendo
                <br />  sobre o vizinhando ?</h1>

                <img src={ImagemMulher}  />
        </div>
        </>
    )
}

export default Duvida