import './cadastroDeServico.css';

function CadastroDeServico() {
    return (
        <>

        <main>
        <h1 className='descrevaS'>Descreva seu Serviço</h1>
        <section className='Pai3'>
            <h2 className="H2descricao">Descrição:</h2>
            <div className='Pai4'>
            <textarea name="Descricao" className="descricao" placeholder="Digite aqui..."></textarea>
            </div>
            <div className='Pai5'>
            <h2 className='H2palavrasChaves'>Palavras Chaves:</h2>
            <input type="text" className='palavrasChaves' 
            placeholder="Digite aqui..." maxLength={55} name='palavrasChaves'/>
            <input type="button" className='AdicionarImagens' value="+ Adicionar imagens"/>
            </div>
        </section>
        <div className="containerBotaoFinalizar">
            <input type="button" className='Finalizar' value="Finalizar"/>
        </div>
        </main>
        
        </>
    )
}

export default CadastroDeServico;