import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Persons = ({ searchTerms }) => {
    const firstCard = 0;
    const lastCard = 6;
    const [page, setPage] = useState(0);

    const [people1, setPeople1] = useState([]);
    const [people2, setPeople2] = useState([]);
    const [people3, setPeople3] = useState([]);
    const [people4, setPeople4] = useState([]);
    const [people5, setPeople5] = useState([]);
    const [people6, setPeople6] = useState([]);
    const [people7, setPeople7] = useState([]);
    const [people8, setPeople8] = useState([]);
    const [people9, setPeople9] = useState([]);

    const nextPage = () => {
        setPage(page + 1);
    }

    const prevPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    }

    useEffect(() => {
        axios
            .get("https://swapi.dev/api/people/?page=1")
            .then((res) => setPeople1(res.data.results));
    }, []);
    useEffect(() => {
        axios
            .get("https://swapi.dev/api/people/?page=2")
            .then((res) => setPeople2(res.data.results));
    }, []);
    useEffect(() => {
        axios
            .get("https://swapi.dev/api/people/?page=3")
            .then((res) => setPeople3(res.data.results));
    }, []);
    useEffect(() => {
        axios
            .get("https://swapi.dev/api/people/?page=4")
            .then((res) => setPeople4(res.data.results));
    }, []);
    useEffect(() => {
        axios
            .get("https://swapi.dev/api/people/?page=5")
            .then((res) => setPeople5(res.data.results));
    }, []);
    useEffect(() => {
        axios
            .get("https://swapi.dev/api/people/?page=6")
            .then((res) => setPeople6(res.data.results));
    }, []);
    useEffect(() => {
        axios
            .get("https://swapi.dev/api/people/?page=7")
            .then((res) => setPeople7(res.data.results));
    }, []);
    useEffect(() => {
        axios
            .get("https://swapi.dev/api/people/?page=8")
            .then((res) => setPeople8(res.data.results));
    }, []);
    useEffect(() => {
        axios
            .get("https://swapi.dev/api/people/?page=9")
            .then((res) => setPeople9(res.data.results));
    }, []);

    const people = [...people1, ...people2, ...people3, ...people4, ...people5, ...people6, ...people7, ...people8, ...people9];

    return (
        <div>
            <div className='pagination'>
                <button onClick={prevPage}>Previous</button>
                <button onClick={nextPage}>Next</button>
                <h4>page : {page + 1}</h4>
            </div>
            <div className='persons'>
                {people
                    .filter((person) => {
                        return person.name.toLowerCase().includes(searchTerms);
                    })
                    .slice(firstCard + (page * 6), (searchTerms != "") ? lastCard + (page * 6) : 0)
                    .map((person, index) => (
                        <Card key={index} person={person.name} />
                    ))}
            </div>
        </div>
    );
};

export default Persons;