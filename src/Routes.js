import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";


const AppRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                
                <Route path='*' element={<h1>Page not found!</h1>} />
            </Routes>
        </Router>
    
    );
};

export default AppRoute;