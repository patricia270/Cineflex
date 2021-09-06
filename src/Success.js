


export default function Success({hour, buyer, cpf, chosenOnesSeats}) {
    return (
        <div className="success">
            <h2>Pedido feito com sucesso!</h2>
            <div className="content">
                <h3>Filme e sessão</h3>
                <p>titulo</p>
                <p>dia hora</p>
                <h3>Ingressos</h3>
                <p>assentos</p>
                <h3>Comprador</h3>
                <p>Nome:</p>
                <p>CPF:</p>
            </div>
            <div className="box-button">
                <button className="go-to-home">Voltar pra a Home</button>
            </div>
        </div>
    );
}

