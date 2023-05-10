import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: '',
  year: '',
  author: '',
  genre: ''
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setYear: (state, action) => {
      state.year = action.payload
    },
    addAuthor: (state, action) => {
      state.author = [...state.author,action.payload]
    },
    deleteAuthor: (state, action) => {
      state.author = state.author.filter((a) => a !== action.payload)
    },
    addGenre: (state, action) => {
      state.genre = [...state.genre,action.payload]
    },
    deleteGenre: (state, action) => {
      state.genre = state.genre.filter((a) => a !== action.payload)
    },
  },
})

export const { setSearch, setYear, addGenre, addAuthor, deleteGenre, deleteAuthor } = filterSlice.actions
export default filterSlice.reducer
