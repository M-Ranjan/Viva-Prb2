import React, { useEffect, useState } from 'react';

function Filter() {
    const [data, setData] = useState([]);
    const [selectedGender, setSelectedGender] = useState('');

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const res = await fetch('http://localhost:3000/get');
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await res.json();
            setData(data);
        } catch (err) {
            console.log('Error', err);
        }
    };

    const handleSelectedGenderChange = (e) => {
        setSelectedGender(e.target.value);
    };

    const filteredData = selectedGender ? data.filter(user => user.Gender === selectedGender) : data;

    return (
        <>
            <div>
                <select onChange={handleSelectedGenderChange} value={selectedGender}>
                    <option>All</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <div className='data'>
                {filteredData.map((user) => (
                    <div className='dropdown'>
                             <h3>ID: {user.Id}</h3>
                             <h3>Name: {user.name}</h3>
                             <h3>Gender: {user.Gender}</h3>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}

export default Filter;