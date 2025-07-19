import { configureStore } from '@reduxjs/toolkit'
import favoriteAnime from './story/favoriteAnime'

export const store = configureStore({
  reducer: {
    favorite: favoriteAnime,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch