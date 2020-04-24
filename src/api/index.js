const REQUEST_URL = 'http://localhost:4000';
const getSongsUrl = `${REQUEST_URL}/songs`;

export const getSongsAPI = () => fetch(getSongsUrl);
