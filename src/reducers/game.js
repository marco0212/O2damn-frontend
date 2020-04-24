import { FETCH_SONG_SUCCESS } from "../constants";

const initialState = {
  id: "",
  title: "",
  artistName: "",
  artistThumbnail: "",
  musicThumbnail: "",
  musicUrl: "",
  videoUrl: "",
  note: [],
  ranking: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SONG_SUCCESS:
      const { title, music_url: musicUrl, note, ranking } = action.payload;
      return {
        ...state,
        title,
        musicUrl,
        note,
        ranking
      };

    default:
      return {
        ...state
      };
  }
}