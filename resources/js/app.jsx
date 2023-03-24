import "./bootstrap";

import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Example from "./pages/Example";
import { Box } from "@mui/system";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

const App = () => {
    return (
        <Box>
            <Navigation></Navigation>
            <Router>
                <QueryClientProvider client={client}>
                    <Routes>
                        <Route path="/" exact Component={Home} />
                    </Routes>
                </QueryClientProvider>
            </Router>
        </Box>
    );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
