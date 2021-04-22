import axios from 'axios';

export const getDetailBooks = async (key) => {
    const get = await axios.get(`https://openlibrary.org/api/books?bibkeys=${key}&jscmd=details&format=json`);
    return get
};