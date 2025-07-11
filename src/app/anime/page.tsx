import AnimeCard from "@/components/Card";
import { getAnimeList } from "@/lib/api";
import type { Anime } from "@/type/type";

export default async function Story() {
  const animeList: Anime[] = await getAnimeList();
  console.log(
    "ID anime list yang tersedia: ",
    animeList.map((a) => a.mal_id)
  );

  return (
    <div className="text-center container mx-auto gap-2 mt-30">
      <h1 className="text-4xl mb-5">Anime</h1>
      <div className="grid grid-cols-5 mx-auto gap-5">
        {animeList.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}
