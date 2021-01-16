import React, { useState, useEffect } from 'react'

const SelectFilter = ({ names }) => {
  const [data, setData] = useState([''])
  const [sortType, setSortType] = useState('all');

  useEffect(() => {
    const sortArray = type => {
      let types = {
        all: 'all',
        amount: 'amount',
        name: 'name',
      };
      //sortType
      console.log('sortType', sortType)
      const sortProperty = types[type];
      //sortProperty
      console.log('sortProperty', sortProperty)
      if (sortProperty === 'amount') {
        // let sorted = [...names].sort((a, b) => b[sortProperty] - a[sortProperty]);
        let sorted = [...names].sort((a, b) => b.amount - a.amount);
        setData(sorted);
      } else if (sortProperty === 'name') {
        let sorted = [...names].sort((a, b) => a.name.localeCompare(b.name));
        setData(sorted);
      } else {
        setData(names);
      }
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <div className="main">
      <select onChange={(e) => setSortType(e.target.value)}>
        <option value="all">all</option>
        <option value="amount">order by amount</option>
        <option value="name">order by name</option>
      </select>

      {data.map(n => (
        <div key={n.id} style={{ margin: '30px' }}>
          <div>{`Name: ${n.name}`}</div>
          <div>{`Amount: ${n.amount}`}</div>
        </div>
      ))}
    </div>
  );
}

export default SelectFilter;
