import { BrowserRouter, Switch, Route} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import TopBar from "./top/TopBar";
import Movies from "./Movies";
import Sections from "./Sections";
import Seats from "./Seats";
import Success from "./Success";

export default function App() {

    const [seats, setSeats] = useState([]);
    const [chosenSection, setChosenSection] = useState("");
    const [section, setSection] = useState ("");
    const [hour, setHour] = useState("");
    const [chosenOnesSeats, setChosenOnesSeats] = useState("");
    const [chosenOnesSeatsName, setChosenOnesSeatsName] = useState("")


    const [buyer, setBuyer] = useState("");
    const [cpf, setCpf] = useState("");

    
    
    return (
        <BrowserRouter>
            <TopBar />
            <Switch>
                <Route path="/" exact>
                    <Movies />
                </Route>
                <Route path="/sections/:idMovie">
                    <Sections />
                </Route>
                <Route path="/seats/:idSection">
                    <Seats chosenSection={chosenSection} seats={seats} setSeats={setSeats} chosenOnesSeats={chosenSection} 
                    setChosenSection={setChosenSection} section={section} setSection={setSection}
                    hour={hour} setHour={setHour} chosenOnesSeats={chosenOnesSeats} setChosenOnesSeats={setChosenOnesSeats}
                    buyer={buyer} setBuyer={setBuyer} cpf={cpf} setCpf={setCpf} chosenOnesSeatsName={chosenOnesSeatsName} setChosenOnesSeatsName={setChosenOnesSeatsName} /> 
                </Route> 
                <Route path="/success">
                    <Success chosenOnesSeatsName={chosenOnesSeatsName}  hour={hour} buyer={buyer} cpf={cpf} chosenOnesSeats={chosenOnesSeats}/> 
                </Route> 
            </Switch>   
        </BrowserRouter>
    );
}
