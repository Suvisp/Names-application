const axios = require('axios');
const baseUrl = 'http://localhost:3001/names'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default { getAll }
