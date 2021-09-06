import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Seat from "./Seat";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { SectionTitle, SeatsContent ,SeatsList, SeatStateList, SeatState, Footer, SmallPictureBox, BoxMOvieAndDay, 
SelectedStateExample, AvailableStateExample, UnavailableStateExample, Form, BoxButton, ReserveSeatsButton} from "./seatscss";


export default function Seats({chosenSection, seats, setSeats, chosenOnesSeats, setChosenSection, section, setSection, hour, setHour, setChosenOnesSeats, buyer, setBuyer, cpf, setCpf, chosenOnesSeatsName, setChosenOnesSeatsName}) {

    let valid = validation(buyer, cpf);
    const {
        idSection
    } = useParams();

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSection}/seats`)
            .then(res => {
                setSeats([...res.data.seats])
                setChosenSection(res.data.movie)
                setSection(res.data.day);
                setHour(res.data)
            })
    }, []);

    if (setHour === "") {
        return (
            <Loading />
        );
    }

    return (
        <SeatsContent>
            <SectionTitle>Selecione o(s) assento(s)</SectionTitle>
            <SeatsList >
                {seats.map((seat, index) => (
                    <Seat key={index} setChosenOnesSeats={setChosenOnesSeats} chosenOnesSeats={chosenOnesSeats}
                    name={seat.name} isAvailable={seat.isAvailable} id={seat.id} chosenOnesSeatsName={chosenOnesSeatsName} setChosenOnesSeatsName={setChosenOnesSeatsName}/>                    
                ))}
            </SeatsList >
            <SeatStateList>
                <SeatState>
                    <SelectedStateExample>
                    </SelectedStateExample>
                    <p>Selecionado</p>
                </SeatState>
                <SeatState>
                    <AvailableStateExample>
                    </AvailableStateExample>
                    <p>Disponível</p>
                </SeatState>   
                <SeatState>
                    <UnavailableStateExample>
                    </UnavailableStateExample>
                    <p>Indisponível</p>
                </SeatState>                
            </SeatStateList>  
            <Form>
                <p>Nome do comprador:</p>
                <input type="text" placeholder="Digite seu nome..." onChange={e => setBuyer(e.target.value)} />
                <p>CPF do comprador:</p>
                <input type="text" placeholder="Digite seu CPF..." onChange={e => setCpf(e.target.value)} />    
            </Form>                           
            <BoxButton>
                <Link className="link" to={valid ? "/success"  : "#"}>
                    < ReserveSeatsButton>Reservar assento(s)</ ReserveSeatsButton > 
                </Link>
            </BoxButton>  
            <Footer>
                <SmallPictureBox>
                    <img src={chosenSection.posterURL} alt="imagem do filme" />
                </SmallPictureBox>
                <BoxMOvieAndDay>
                    <p>{chosenSection.title}</p>
                    <p>{`${section.weekday} - ${hour.name}`}</p>
                </BoxMOvieAndDay>
            </Footer>      
        </SeatsContent>

    );

}

function validation(buyer, cpf) {

    return buyer.length > 0 && cpf.length === 11;
}



