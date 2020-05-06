import { UPDATE_SONGS_SUCCESS, UPDATE_RANKING_SUCCESS } from "../constants";

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
          title,
          artist_name: artistName,
          artist_pic: artistThumbnail,
          music_thumb_url: musicThumbnail,
          music_url: musicUrl,
          video_url: videoUrl,
          notes,
          ranking
        } = song;

        acc[id] = {
          id,
          title,
          artistName,
          artistThumbnail,
          musicThumbnail,
          musicUrl,
          videoUrl,
          notes,
          ranking
        };
        return acc;
      }, {});
      return {
        ...state,
        allSongIds,
        songById
      };

    case UPDATE_RANKING_SUCCESS:
      const { id, ranking} = action.payload;
      const updatedSong = Object.assign({}, state.songById[id], { ranking });
      return {
        ...state,
        songById: {
          ...state.songById,
          [id] : updatedSong
        }
      };
    default:
      return {
        ...state
      };
  }
}
