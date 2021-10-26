import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import Resume from "./pages/Resume";
import SkillsPage from "./pages/Skills";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/resume">
                    <Resume />
                </Route>
                <Route exact path="/skills">
                    <SkillsPage />
                </Route>
                <Route exact path="/education">
                    <Education />
                </Route>
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
