import React, { useState, useEffect } from 'react'

const FilterNames = ({ names }) => {
    const [searchterm, setSearchterm] = useState([])
    const [amountOfName, setAmountOfName] = useState([])

    useEffect(() => {
        const amountOfName =! searchterm
        ? names
        : names.filter((m) => m.name === searchterm).map((mm) => mm.amount)
        console.log('searchterm', searchterm)
        console.log('amountOfName', amountOfName)
        setAmountOfName(amountOfName);
    }, [searchterm]);

    return (
        <div className="side">
            <input type='text' id='give a name' name='insert a name' value={searchterm} onChange={(e) => setSearchterm(e.target.value)} />
            <p>{amountOfName}</p>
        </div>
    )
}

export default FilterNames;