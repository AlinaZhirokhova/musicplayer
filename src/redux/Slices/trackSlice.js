import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackId: {},
  tracks: []
};

export const trackSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    setTrackId: (state, action) => {
      state.trackId = action.payload
    },
    setTracksRedux: (state, action) => {
      state.tracks = action.payload
    },
    nextTrack: (state) => {
      const currentIndex = state.tracks.findIndex((el) => el.id === state.trackId.id)
      if (state.trackId.id < state.tracks.length - 1) {
        state.trackId = state.tracks[currentIndex + 1]
      } else {
        state.trackId = state.tracks[0]
      }
    },
    prevTrack: (state) => {
      const currentIndex = state.tracks.findIndex((el) => el.id === state.trackId.id)
      if (state.trackId.id - 1 < 8) {
        state.trackId = state.tracks[0]
      } else {
        state.trackId = state.tracks[currentIndex - 1]
      }
    },
  },
})

export const { setTrackId, setTracksRedux, nextTrack, prevTrack } = trackSlice.actions
export default trackSlice.reducer
