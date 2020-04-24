const REQUEST_URL = 'http://localhost:4000';
const getSongsUrl = `${REQUEST_URL}/songs`;
const songUrl = `${REQUEST_URL}/song`;

export const getSongsAPI = () => fetch(getSongsUrl);
export const getSongByIdAPI = (id) => fetch(`${songUrl}/${id}`);
