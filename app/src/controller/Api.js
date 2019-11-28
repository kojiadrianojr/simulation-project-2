import axios from 'axios';


class ApiData {
    constructor(){
        this.API = "https://api.coingecko.com/api/v3"
        this.data = [];
    }

    PING(){
        axios.get(`${this.API}/coins`)
        .then(result => {
            return this.data.push(result)
        })
        .catch(err => err)
        return this.data
    }
}

export default new ApiData()