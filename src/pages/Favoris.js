import React from 'react';
import FavorisComponent from '../components/FavorisComponent';
import Navigation from '../components/Navigation';
import Persons from '../components/Persons';
import Searchbar from '../components/Searchbar';
import Title from '../components/Title';

const Favoris = () => {
    return (
        <div>
            <Title />
            <Navigation />
            <FavorisComponent />
        </div>
    );
};

export default Favoris;