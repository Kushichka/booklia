const baseURL = 'http://openlibrary.org/search.json';

export const fetchAPI = async (text, sortBy, page) => {
    
    try {
        const url = `${baseURL}?title=${text}&sort=${sortBy}&fields=*,availability&limit=10&page=${page}`;
        
        const res = await fetch(url)
        .then(res => res.json());

        return res;

    } catch (error) {
        console.error(error);
        return null;
    }
};