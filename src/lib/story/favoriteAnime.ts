import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { NewAnime } from "@/types/type"
import { getAnimeDB } from "../apiPrisma"
import type { NewFavoriteSlice } from "@/types/type"

export const fetchFavoriteAnime = createAsyncThunk<NewAnime[]>(
  'add-favorite/anime',
  async () => {
    const res = await getAnimeDB()
    return res
  }
)

const initialState: NewFavoriteSlice = {
  items: [],
  loading: false,
  error: null
}

const favoriteAnime = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<NewAnime>) => {
      state.items.push(action.payload)
    },

    deleteFavorite: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(anime => anime.id !== action.payload)
    },

    updateFavorite: (state, action: PayloadAction<NewAnime>) => {
      const update = state.items.findIndex(anime => anime.id === action.payload.id)
      if (update !== -1) {
        state.items[update] = action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFavoriteAnime.pending, (state) => {
      state.loading = true
    })
      .addCase(fetchFavoriteAnime.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchFavoriteAnime.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? "Terjadi Kesalahan"
      })
  }

}
)

export default favoriteAnime.reducer