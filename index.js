import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import themeReducer from './reducer';
import ThemeToggle from './ThemeToggle';

const store = createStore(themeReducer);

const App = () => {
    return (
        <Provider store={store}>
            <ThemeToggle />
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));