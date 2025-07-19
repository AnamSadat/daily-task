import AnimeCard from "@/components/Card";
import { getAnimeList } from "@/lib/api";
import type { Anime } from "@/types/type";

export default async function Story() {
  const animeList: Anime[] = await getAnimeList();

  console.log(
    "ID anime list yang tersedia: ",
    animeList.map((a) => a.mal_id)
  );

  return (
    <div className="text-center container mx-auto gap-2 mt-30">
      <h1 className="text-4xl mb-7 font-semibold">Anime List</h1>
      <div className="grid mx-auto lg:grid-cols-5  gap-5 md:grid-cols-3">
        {animeList.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}
