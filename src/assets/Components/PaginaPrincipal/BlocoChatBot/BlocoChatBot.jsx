import React from 'react';
import "./BlocoChatBot.css";

function BlocoChatBot() {
    return (
        <section className="containerChatbot">
            <div className="parteFundoChatbot">
                {/* 1. `alt` vazio porque a imagem é decorativa.
                  2. `loading="lazy"` para carregar a imagem só quando necessário.
                */}
                <img className="imagemFundoChatbot" src="./img/ChatBot/fundo_chatbot.svg" alt="" loading="lazy" />
                <img className="imagemRoboComCelularChatbot" src="./img/ChatBot/robo_chatbot_celular.svg" alt="Robô com um celular na mão." loading="lazy" />
                <p className="mensagemUsarChatbot">Use a nossa IA para uma melhor experiência</p>
            </div>
            <div className="parteCelularConversa">
                <p className="mensagemCliente">Preciso de ajuda</p>
                <img src="./img/ChatBot/icone_robo_chat.svg" alt="Ícone do robô em uma conversa de chat." loading="lazy" />
                <p className="mensagemRobo">Pode deixar!</p>
                <span className="campoMensagemChatbot"></span>
            </div>
        </section>
    )
}
export default React.memo(BlocoChatBot);