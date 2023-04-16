import axios from 'axios';

const baseURL = 'http://openlibrary.org/search.json';

export const fetchAPI = async (text, sortBy, page) => {
    try {
        const url = `${baseURL}?title=${text}&sort=${sortBy}&fields=*,availability&limit=10&page=${page}`;
        const res = await axios.get(url);
        return res;

    } catch (error) {
        console.error(error);
        return null;
    }
};