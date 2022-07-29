import React from 'react';
import Navigation from '../components/Navigation';
import Title from '../components/Title';
import Searchbar from '../components/Searchbar';

const Home = () => {
    return (
        <div>
            <Title />
            <Navigation />
            <Searchbar />
        </div>
    );
};

export default Home;