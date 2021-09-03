
export default function Request() {
    return (
        <div className="success">
            <h2>Pedido feito com sucesso!</h2>
            <div className="content">
                <h3>Filme e sessão</h3>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
                <h3>Ingressos</h3>
                <p>Assento 15</p>
                <p>Assento 16</p>
                <h3>Comprador</h3>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </div>
            <div className="box-button">
                <button className="go-to-home">Voltar pra a Home</button>
            </div>
        </div>
    );
}