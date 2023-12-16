import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard"
import Makanan from "./makanan";

function routing(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/makanan" element={<Makanan/>}/>
            </Routes>
        </Router>
    )
}
export default routing;
