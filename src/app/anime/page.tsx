import Card from "@/components/Card";
import { getAnimeList } from "@/lib/api";
import type { Anime } from "@/type/type";

export default async function Story() {
  const animeList: Anime[] = await getAnimeList();

  return (
    <div className="text-center container mx-auto gap-3">
      <h1 className="text-4xl mb-5">Project</h1>
      <div className="grid grid-cols-3 place-items-center mx-auto">
        {animeList.map((anime) => (
          <Card key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}
