const baseURL = 'http://openlibrary.org/search.json';

export const fetchAllBooks = async (text, sortBy='', page=1) => {
    
    const url = `${baseURL}?title=${text}&sort=${sortBy}&fields=*,availability&limit=10&page=${page}`;

    try {
        const res = await fetch(url)
        .then(res => res.json());

        return res;

    } catch (error) {
        console.error(error);
        return null;
    }
};