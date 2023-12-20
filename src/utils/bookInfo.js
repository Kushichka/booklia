
export const authors = (authors) => {
    let author = 'unknown';

    if(authors) {
        if (authors.length > 1) { // if authors more than 1
            authors.map((item, i) => ( // is comma need
                i > 0 ? author = `${author}, ${item}` : author = item
            ));
        } else author = authors[0];

    }

    return author;
}

export const isPlural = (value, singularName) => {
    if(value && Array.isArray(value)) {
        return value.length > 1 ? `${value.length} ${singularName}s` : `${value.length} ${singularName}`;
    }

    if(value && !Array.isArray(value)) {
        return value > 1 ? `${value} ${singularName}s` : `${value} ${singularName}`;
    }

    return `unknown ${singularName}s`;
}

export const checkLength = (string='', maxLength) => {
    return string.length > maxLength ? `${string.slice(0, maxLength-3)}...` : string;
};

export const sortValue = (value) => {
    return value === 'relevance' ? '' : value;
}

