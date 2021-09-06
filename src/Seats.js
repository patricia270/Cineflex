import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Seat from "./Seat";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "./Loading";


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



const SectionTitle = styled.h2`
    height: 110px;
    font-size: 24px;
    color: #293845;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SeatsContent = styled.div`
    width: 100vw;
    margin-top: 67px;
`;

const SeatsList = styled.ul`
    width: 100vw;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    padding-left: 31px;
    margin-top: -18px;
`;

const SeatStateList = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 76vw;
    margin: 16px auto 42px auto;
`;

const SeatState = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
    font-size: 13px;
    text-align: center;
    }
    div {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    }
`;

const Footer = styled.div`
    height: 117px;
    background-color: #DFE6ED;
    padding-left: 10px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    img {
    width: 48px;
    height: 72px; 
    }
`;

const SmallPictureBox = styled.div`
    background-color: #FFFF;
    width: 64px;
    height: 89px; 
    margin-top: 14px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BoxMOvieAndDay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
    font-size: 26px;
    margin-left: 14px;
    }
`;

const SelectedStateExample = styled.div`
    background-color: #8DD7CF;
    border: 1px solid #1AAE9E;
`;

const AvailableStateExample = styled.div`
    background-color: #C3CFD9;
    border: 1px solid #7B8B99;
`;

const UnavailableStateExample = styled.div`
    background-color: #FBE192;
    border: 1px solid #F7C52B;
`;

const Form = styled.div`
    margin-left: 24px;
    input {
    width: 327px;
    height: 51px;
    border: 1px solid #D4D4D4;
    margin-bottom: 7px;
    }
    p {
    font-size: 18px;
    color: #293845;
    margin-bottom: 3px;
    }
`;

const BoxButton = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`;

const ReserveSeatsButton = styled.button`
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    font-size: 18px;
    color: #FFFF;
    border-radius: 3px;
    border: none;
    margin-top: 50px;
    margin-bottom: 150px;
`;

















