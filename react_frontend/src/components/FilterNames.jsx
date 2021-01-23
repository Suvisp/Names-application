import React, { useState, useEffect } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'

const FilterNames = ({ names }) => {
    const [searchterm, setSearchterm] = useState([])
    const [amountOfName, setAmountOfName] = useState([])

    useEffect(() => {
        const amountOfName = !searchterm
            ? names
            : names.filter((m) => m.name === searchterm).map((mm) => mm.amount)
        console.log('searchterm', searchterm)
        console.log('amountOfName', amountOfName)
        setAmountOfName(amountOfName);
    }, [searchterm]);

    return (
        <div className="box">
                  <Form>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Find a total for a name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="give a name"
                    aria-label="Give a name"
                    aria-describedby="basic-addon1"
                    value={searchterm} onChange={(e) => setSearchterm(e.target.value)}
                />
            </InputGroup>
            </Form>
            <p>{amountOfName}</p>
        </div>
    )
}

export default FilterNames;