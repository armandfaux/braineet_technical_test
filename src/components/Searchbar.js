import React, { useState } from 'react';
import Persons from './Persons';

const Searchbar = () => {
    const [searchTerms, setSearchTerms] = useState([]);

    const handleSearchTerms = (e) => {
        setSearchTerms(e.target.value.toLowerCase());
    }

    return (
        <div className='searchBar'>
            <input
                type="text"
                name="searchBar"
                id="searchBar"
                placeholder="Research"
                onChange={handleSearchTerms}
            />
            <Persons searchTerms={searchTerms} />
        </div>
    );
};

export default Searchbar;