import { UPDATE_SONGS_SUCCESS } from "../constants";

const initialState = {
  allSongIds: [],
  songById: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_SONGS_SUCCESS:
      const songs = action.payload;
      const allSongIds = songs.map(song => song._id);
      const songById = songs.reduce((acc, song) => {
        const {
          _id: id,
          artist_name: artistName,
          artist_thumbnail: artistThumbnail,
          music_thumbnail: musicThumbnail,
          music_url: musicUrl,
          video_url: videoUrl,
          title
        } = song;

        acc[id] = {
          id,
          artistName,
          artistThumbnail,
          musicThumbnail,
          musicUrl,
          videoUrl,
          title
        };
        return acc;
      }, {});
      return {
        ...state,
        allSongIds,
        songById
      };
    default:
      return {
        ...state
      };
  }
}
