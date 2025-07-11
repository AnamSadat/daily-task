import type { AnimeDetailProps } from "@/type/type";
import { getAnimeDetail } from "@/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";

export default async function AnimeDetailPage({ params }: AnimeDetailProps) {
  const { id } = await params;
  const anime = await getAnimeDetail(id);

  if (!anime || anime.mal_id === undefined) {
    notFound();
  }

  return (
    <main className="my-7 container mx-auto">
      <Card className="px-10 bg-slate-50">
        <h1 className="text-2xl font-bold mb-4">{anime.title}</h1>
        <div className="flex gap-15">
          <div>
            <Image
              src={anime.images.jpg.large_image_url}
              alt={anime.title}
              width={200}
              height={100}
              className="rounded-2xl"
            />
          </div>
          <div>
            <p className="mb-2">
              <strong>Type:</strong> {anime.type}
            </p>
            <p className="mb-2">
              <strong>Episodes:</strong> {anime.episodes}
            </p>
            <p className="mb-2">
              <strong>Score:</strong> {anime.score}
            </p>
            <p className="mb-4">
              <strong>Status:</strong> {anime.status}
            </p>
          </div>
        </div>
        <p className="leading-relaxed mt-8">{anime.synopsis}</p>
      </Card>
    </main>
  );
}
