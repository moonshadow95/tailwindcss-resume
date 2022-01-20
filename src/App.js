import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Resume from "./Component/Resume"
import Horror from "./Component/Horror"
import Home from "./Routes/Home"
import Tolv from './Component/Tolv/Tolv'

const films = [
    {
        'title': 'The Shining',
        'year': '1980',
        'director': 'Stanley Kubrick',
        'rating': '10',
        'thumbnail': 'https://besthorrorscenes.com/posters/53_the-shining.png',
    },
    {
        'title': 'The Omen',
        'year': '1976',
        'director': 'Richard Donner',
        'rating': '8',
        'thumbnail': 'https://besthorrorscenes.com/posters/55_the-omen.png',
    },
    {
        'title': 'The Shining',
        'year': '1980',
        'director': 'Stanley Kubrick',
        'rating': '10',
        'thumbnail': 'https://besthorrorscenes.com/posters/53_the-shining.png',
    },
    {
        'title': 'The Omen',
        'year': '1976',
        'director': 'Richard Donner',
        'rating': '8',
        'thumbnail': 'https://besthorrorscenes.com/posters/55_the-omen.png',
    },
]

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/resume" element={<Resume/>}/>
                <Route path="/horror" element={<Horror films={films}/>}/>
                <Route path="/tolv" element={<Tolv/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
