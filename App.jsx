import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                        <li>
                            <Link to="/about">О нас</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
            </div>
        </BrowserRouter>
    );
}

export default App;