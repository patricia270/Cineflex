import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopBar from "./top/TopBar";
import Movies from "./Movies";
import Sections from "./Sections";
import Seats from "./Seats";
import Request from "./Request";

export default function App() {
    return (
        <BrowserRouter>
            <TopBar />
            <Switch>
                <Route path="/home">
                    <Movies />
                </Route>
                <Route path="/sections">
                    <Sections />
                </Route>
                <Route path="/seats">
                    <Seats /> 
                </Route> 
                <Route path="/request">
                    <Request /> 
                </Route> 
            </Switch>   
        </BrowserRouter>
    );
}
