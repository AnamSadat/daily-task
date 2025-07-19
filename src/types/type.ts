import { z } from "zod";

export type CardProps = {
  anime: NewAnime,
  onSuccess: () => void
};

export type AnimeDetailProps = {
  params: {
    id: string;
  };
};

export type DropdownProps = {
  id: number,
  onSuccess: () => void,
  anime: NewAnime
}

export type AnimeFormState = {
  nama: string;
  status: string;
  skor: string;
  genre: string;
  img_url: string;
};

export type NewFavoriteSlice = {
  items: NewAnime[],
  loading: boolean,
  error: string | null
}


// types/anime.ts
export type Anime = {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
};

export const NewAnimeSchema = z.object({
  nama: z.string(),
  status: z.string(),
  skor: z.number().max(10),
  genre: z.string(),
  img_url: z.string(),
});

// Type input (body dari client)
export type NewAnimeInput = z.infer<typeof NewAnimeSchema>;

// Type output (data penuh, dipakai di Card, dsb.)
export type NewAnime = { id: number } & NewAnimeInput;
