const REQUEST_URL = 'http://localhost:4000';
const getSongsUrl = `${REQUEST_URL}/songs`;
const songUrl = `${REQUEST_URL}/song`;
const updateRankingUrl = id => `${REQUEST_URL}/song/${id}/ranking`;

export const getSongsAPI = () => fetch(getSongsUrl);
export const getSongByIdAPI = (id) => fetch(`${songUrl}/${id}`);

export const updateRankingAPI = (id, rankList) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify({
      rankList,
    }),
  };

  return fetch(updateRankingUrl(id), options);
};
