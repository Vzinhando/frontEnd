import "./BlocoChatBot.css"

function BlocoChatBot() {
    return (
        <>
            <section className="containerChatbot">
                <div className="parteFundoChatbot">
                    <img className="imagemFundoChatbot" src="./img/ChatBot/fundo_chatbot.svg" alt="plano de fundo do bloco chatbot" />
                    <img className="imagemRoboComCelularChatbot" src="./img/ChatBot/robo_chatbot_celular.svg" alt="robo com um celular chatbot" />
                    <p className="mensagemUsarChatbot">Use a nossa IA para uma melhor experiência</p>
                </div>
                <div className="parteCelularConversa">
                    <p className="mensagemCliente">Preciso de ajuda</p>
                    <img src="./img/ChatBot/icone_robo_chat.svg" alt="icone do robo conversando no celular" />
                    <p className="mensagemRobo">Pode deixar!</p>
                    <span className="campoMensagemChatbot"></span>
                </div>
            </section>
        </>
    )
}

export default BlocoChatBot;