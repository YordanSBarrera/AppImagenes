import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID kKPe9m9Z4OsCLZPzPv7QDiGfxenBLjnuZTZttBOkQ1Q'
    }
})