import React, { useState } from 'react'

const TotalNames = ({ names }) => {
    console.log('Total names list', { names })
    const [totalAmount, setTotalAmount] = useState([])

    const calculateTotal = () => {
        let totalAmount = names.reduce((total, item) => {
            return total + item.amount;
        }, 0);

        setTotalAmount(totalAmount);
    };

    return (
        <div className="box">
            <label>Find the total amount of the names</label><br></br>
            <button onClick={() => calculateTotal()}>Click here</button>
            <br></br>
            {totalAmount}
        </div>
    )
}

export default TotalNames;