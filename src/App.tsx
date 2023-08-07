import './App.css';
import styled from 'styled-components';
import {Header} from './layout/header/Header';
import {Main} from './layout/section/main/Main';
import {MySkills} from './layout/section/skills/Skills';
import {Works} from "./layout/section/works/Works";
import {Testimony} from "./layout/testimony/Testimony";
import { Contact } from './layout/section/contacts/Contacts';
import {Footer} from "./layout/footer/Footer";
import {AboutMe} from "./layout/aboutMe/AboutMe";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Works/>
            <MySkills/>
            <Testimony/>
            <Contact/>
            {/*<AboutMe/>*/}
            <Footer/>
        </div>
    );
}

export default App;

