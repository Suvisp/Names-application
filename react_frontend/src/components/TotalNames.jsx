import React, { useState, useEffect } from 'react'

const TotalNames = ({ names }) => {
    console.log('Total names list', { names })
    const [total, setTotal] = useState([])

    useEffect(() => {
        let totalofnames = (names.reduce((a, b) => a = a + b.amount, 0))
        console.log('totalofnames', totalofnames)
        setTotal(totalofnames);
    }, []);

    return (
        <div class="side"> 
            Total amount of all the names: {total}
        </div>
    )
}

export default TotalNames;