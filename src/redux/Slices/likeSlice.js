import { createSlice } from '@reduxjs/toolkit'
import getLSlike from '../../utils/getLSlike'

const initialState = {
  tracks: getLSlike() || [],
}

export const likeSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    likeTrack: (state, action) => {
      const currentTrack = state.tracks.find((object) => {
        return object.id === action.payload.id
      })

      if (currentTrack) {
        return
      } else {
        state.tracks.push(action.payload)
      }
    },
    dislikeTrack: (state, action) => {
      state.tracks = state.tracks.filter((object) => {
        return object.id !== action.payload.id
      })
    },
  },
})

export const selectCurrentLikeTrack = (id) => (state) =>
  state.like.tracks.find((object) => {
    return object.id === id
})

export const { likeTrack, dislikeTrack } = likeSlice.actions

export default likeSlice.reducer
