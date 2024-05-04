import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './actions';

const ThemeToggle = () => {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return (
        <div>
            <label>
                <input type="checkbox" checked={theme === 'dark'} onChange={handleToggleTheme} />
                Toggle Theme
            </label>
        </div>
    );
};

export default ThemeToggle;