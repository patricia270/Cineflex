import { useState } from "react";
import styled from "styled-components";

export default function Seat ({isAvailable, id, name, setChosenOnesSeats, chosenOnesSeats, chosenOnesSeatsName, setChosenOnesSeatsName}) {

    const [selected, setSelected] = useState(isAvailable);
    
    function select (isAvailable, id) {
        
        if(!isAvailable){
            alert("Esse assento não está disponível");
        }
        else{
            if(selected === true){
            
                setSelected(false);
                setChosenOnesSeats([...chosenOnesSeats, {id}]);
                setChosenOnesSeatsName([...chosenOnesSeatsName, {name}])
                
            }
            else{
                setSelected(true);
                setChosenOnesSeats(chosenOnesSeats.filter((seat) => seat !== id));
                setChosenOnesSeatsName(chosenOnesSeatsName.filter((seatName) => seatName !== name));
            }
        }
    }

 
    return (
        <NumberSeat onClick={() => select(isAvailable, id)} selected={selected} avaliable={isAvailable}>{name}</NumberSeat>
    )

}

const NumberSeat = styled.li`
    background-color: ${({selected, avaliable}) => !avaliable ? "#FBE192" : selected ? "#C3CFD9" :  "#8DD7CF"};
    border: ${({selected, avaliable}) => !avaliable ? "1px solid #F7C52B" : selected ? "1px solid #7B8B99" :  "1px solid #1AAE9E"};
    width: 26px;
    height: 26px;
    border-radius: 50%;
    font-size: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 7px;
`;

