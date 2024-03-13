import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';


const App = () => {
    return (
        <Router>
            <Navbar />
            <main className="main-content">
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <Routes>
                    <Route path="/cv" element={<About />} />
                    <Route path="/About" element={<About />}/>
                    <Route path="/Education" element={<Education />} />
                    <Route path="/Experience" element={<Experience />} />
                    <Route path="/Skills" element={<Skills />} />
                </Routes>
                
            </main>
        </Router>
    );
};



export default App;
    
