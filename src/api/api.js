import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    params: {
        page: 1,
        per_page: 20,
    },
    headers: {
        "Authorization": "Client-ID -yyQ7Y9Pqa3Q7woGoqzC-eh4Ktc0tp64qBDTMdx-Tdw"
    }

})