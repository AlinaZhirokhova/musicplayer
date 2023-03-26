import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackId: {}
};

export const trackSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    setTrackId: (state, action) => {
        state.trackId = action.payload
    }
  },
})

export const { setTrackId } = trackSlice.actions
export default trackSlice.reducer
