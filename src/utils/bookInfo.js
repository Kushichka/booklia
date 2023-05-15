
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
    let result = `unknown ${singularName}s`;

    if(value) {
        if(Array.isArray(value)) {
            result = value.length > 1 ? `${value.length} ${singularName}s` : `${value.length} ${singularName}`;
        } else {
            result = value > 1 ? `${value} ${singularName}s` : `${value} ${singularName}`;
        }
    }

    return result;
}

export const checkLength = (string, maxLength) => {
    const result = string.length > maxLength ? `${string.slice(0, maxLength-3)}...` : string;

    return result;

};

