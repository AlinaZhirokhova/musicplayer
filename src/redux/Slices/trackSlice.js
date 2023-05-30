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
    nextTrack: (state, action) => {
      const currentIndex = state.tracks.findIndex((el) => el.id === state.trackId.id)
      if (state.trackId.id < state.tracks.length - 1) {
        state.trackId = state.tracks[currentIndex + 1]
      } else {
        state.trackId = state.tracks[0]
      }

      if (action.payload === 'repeat') {
        state.trackId = state.tracks[currentIndex]
        return
      } 
      // if (action.payload === 'shuffle') {
        
      // } 
    },
    prevTrack: (state) => {
      const currentIndex = state.tracks.findIndex((el) => el.id === state.trackId.id)
      if (state.trackId.id - 1 < 8) {
        state.trackId = state.tracks[0]
      } else {
        state.trackId = state.tracks[currentIndex - 1]
      }
    },
    repeatTrack: (state) => {
      const currentIndex = state.tracks.findIndex((el) => el.id === state.trackId.id)
      state.trackId = state.tracks[currentIndex]
    }
  },
})

export const { setTrackId, setTracksRedux, nextTrack, prevTrack, repeatTrack } = trackSlice.actions
export default trackSlice.reducer
