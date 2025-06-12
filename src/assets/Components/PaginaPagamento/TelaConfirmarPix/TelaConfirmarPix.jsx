import './TelaConfirmarPix.css'
import qrcode from '../../../../../public/img/Pagamentos/qrcode.svg'
import { NavLink } from 'react-router-dom'

function TelaConfirmarPix() {
    return (
        <>
            <div className='containerPagamentoPix'>
                <h1 className="titulo1">Perfil Preencha os dados para pagamento via Pix</h1>
                <div className='quadroGeral'>
                    <div className='esquerda'>
                        <img src={qrcode} alt="" className='qrCode' />
                    </div>
                    <div className='direita'>
                        <h3>Detalhe da sua assinatura</h3>
                        <div className='info'>
                            <p>(Nome da assinatura)</p>
                            <p className='valor'>R$ 00,00</p>
                        </div>
                    </div>
                </div>
                <h1 className = "titulo2">Use o QR Code acima ou copie o código Pix abaixo:</h1>

                <div className='codigoPix'>
                    <p>000200001.02222.111111111.2323222</p>
                    <button type='submit' className='btnCopiar'>Copiar</button>
                </div>

                <div className='buttons'>
                    <NavLink to= "/pagina-pagamento" className='buttonVoltar'>Voltar</NavLink>
                    <NavLink to="/confirmar-pagamento" className='buttonPagamento'>Confirmar Pagamento</NavLink>
                </div>
            </div>
        </>
    )
}
export default TelaConfirmarPix

