import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {AboutAuthor} from "./layout/sections/aboutAuthor/AboutAuthor";
import {Skills} from "./layout/sections/skills/Skills";
import {Languages} from "./layout/sections/skills/languages/Languages";
import {Studies} from "./layout/sections/skills/studies/Studies";
import {Works} from "./layout/sections/works/Works";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header></Header>
            <Main></Main>
            <AboutAuthor></AboutAuthor>
            <Skills></Skills>
            <Languages></Languages>
            <Studies></Studies>
            <Works></Works>
            <Footer></Footer>
        </div>
    );
}

export default App;

