const baseURL = 'http://openlibrary.org';

export const fetchDescription = async (id) => {
    
    try {
        const url = `${baseURL}${id}.json`;
        
        const res = await fetch(url)
            .then(res => res.json());

        return res;

    } catch (error) {
        console.error(error);
        return null;
    }
};