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
                <Route path="/" exact>
                    <Movies />
                </Route>
                <Route path="/sections/:idMovie">
                    <Sections />
                </Route>
                <Route path="/seats/:idSection">
                    <Seats /> 
                </Route> 
                <Route path="/request">
                    <Request /> 
                </Route> 
            </Switch>   
        </BrowserRouter>
    );
}
