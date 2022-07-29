import React, { useState } from 'react';
import Card from './Card';

const FavorisComponent = () => {
    var people = useState([]);
    const firstCard = 2;
    const lastCard = 8;
    const [page, setPage] = useState(0);

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        people.push(key);
    }

    const nextPage = () => {
        setPage(page + 1);
    }

    const prevPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    }

    return (
        <ul>
            <div className='pagination'>
                <button onClick={prevPage}>Previous</button>
                <button onClick={nextPage}>Next</button>
                <h4>page : {page + 1}</h4>
            </div>
            <div className='persons'>
                {people
                    .slice(firstCard + (page * 6), lastCard + (page * 6))
                    .map((person, index) => (
                        <Card key={index} person={person} />
                    ))}
            </div>
        </ul>
    );
};

export default FavorisComponent;