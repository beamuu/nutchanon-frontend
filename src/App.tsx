import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/projects">
                    <ProjectsPage />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
