import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e1c11043292acdc9da0a3d8094df5ece01e92ffe03ace70cde600b339520f22d'
    }
});