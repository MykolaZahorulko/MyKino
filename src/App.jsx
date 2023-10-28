import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import Home from './components/pages/home/Home.jsx';
import LogIn from './components/pages/login/LogIn.jsx';
import Favorites from './components/pages/favorites/Favorites.jsx';
import Selections from './components/pages/selections/Selections.jsx';
import MovieWatch from './components/pages/movieWatch/MovieWatch.jsx';
import {FavoriteProvider} from './context/FavoriteContext.jsx';

const App = () => {
    return (
        <Router>
            <FavoriteProvider>
                <Layout>
                    <Routes>
                        <Route path={"/MyKino"} element={<Home/>}/>
                        <Route path="/movie/:id" element={<MovieWatch/>}/>
                        <Route path="/login" element={<LogIn/>}/>
                        <Route path="/selections" element={<Selections/>}/>
                        <Route path="/favorites" element={<Favorites/>}/>
                        <Route path="*" element={<div style={{fontSize: "32px", color: "red", textAlign: "center", paddingTop: "80px", paddingBottom: "80px"}}>Not found!</div>}/>
                    </Routes>
                </Layout>
            </FavoriteProvider>
        </Router>
    );
};

export default App;
