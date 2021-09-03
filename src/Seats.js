

export default function Seats() {
    return (
        <div className="seats-content">
            <h2 className="section-title">Selecione o(s) assento(s)</h2>
            <ul className="seats-list">
                <li className="number-seat">01</li>
            </ul>
            <ul className="seat-state-list">
                <li className="seat-state">
                    <div className="selected"></div>
                    <p>Selecionado</p>
                </li>
                <li className="seat-state">
                    <div className="available"></div>
                    <p>Disponível</p>
                </li>   
                <li className="seat-state">
                    <div className="unavailable"></div>
                    <p>Indisponível</p>
                </li>                
            </ul>  
            <div className="form">
                <p>Nome do comprador:</p>
                <input type="text" placeholder="Digite seu nome..." />
                <p>CPF do comprador:</p>
                <input type="text" placeholder="Digite seu CPF..." />    
            </div>  
            <div className="box-button">
                <button className="reserve-seats">Reservar assento(s)</button> 
            </div>  
            <div className="footer">
                <div className="movie-box-little">
                    <img src="https://s3-alpha-sig.figma.com/img/618b/6ff1/fa721ddf7d65b2db581bec36dd2855dd?Expires=1631491200&Signature=Gvbnj96A8fyXrd49O4AS93u2Bt6ZDoL1Wi0IamiXj7owgVqFPuwQgabl5ft5SmNFihLKSrNSAdI0Q8aXx4EmmJJsS6GuQxI53JGLNVJLvtGCrOXi2cRRmCNT-AlYB4LIfKxxIS1CHc7kXmRe9Yte26xvonJEFLOc5p6qHhYx9AOlhLoR4~F2gvH4ols0KnZzOWlltdVbWNtbXgWJVIjy1PE0xFBf2UV1uMf4Pd0QhTcqrCpa0LoEOf7d7GCzjz771HguI~ibks94pmNGK7SNb9PLM8AUv42j3AtqVL9w12l7v9kqhXPij5EDB~mr4jr3rU6ZmWlBUlDIczPvlX8-uA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="imagem do filme" />
                </div>
                <div className="box-movie-and-day">
                    <p>Enola Holmes</p>
                    <p>Quinta-feira - 15:00</p>
                </div>
            </div>      
        </div>

    );
}