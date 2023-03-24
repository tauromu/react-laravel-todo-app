import "./bootstrap";

import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Example from "./pages/Example";
import { Box } from "@mui/system";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

const App = () => {
    return (
        <Box>
            <Navigation></Navigation>
            <Router>
                <Routes>
                    <Route path="/" exact Component={Home} />
                </Routes>
            </Router>
        </Box>
    );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
