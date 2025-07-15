import { z } from "zod";

export type CardProps = {
  anime: NewAnime;
};

export type AnimeDetailProps = {
  params: {
    id: string;
  };
};

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
  skor: z.number(),
  durasi: z.number(),
  genre: z.string(),
  img_url: z.string(),
  deskripsi: z.string(),
});

// Type input (body dari client)
export type NewAnimeInput = z.infer<typeof NewAnimeSchema>;

// Type output (data penuh, dipakai di Card, dsb.)
export type NewAnime = NewAnimeInput & { id: number };
