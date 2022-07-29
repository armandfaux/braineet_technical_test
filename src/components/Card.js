import React, { useState } from 'react';

const Card = ({ person }) => {
    const [favoris, setFavoris] = useState("true");

    const switchFav = () => {
        if (localStorage.getItem(person) == null) {
            localStorage.setItem(person, JSON.stringify(favoris));
        } else {
            localStorage.removeItem(person);
        }
    }

    return (
        <ul className='box'>
            <div className='card'>
                <h2>{person}</h2>
                <button onClick={switchFav}><img className='star' src={"./star.png"} /></button>
            </div>
        </ul >);
};

export default Card;