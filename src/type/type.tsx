export type CardProps = {
  anime: MyAnime;
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

export type MyAnime = {
  id: number;
  nama: string;
  status: string;
  skor: number;
  durasi: string;
  genre: string;
  img_url: string;
  deskripsi: string;
};
