import type { AnimeDetailProps } from "@/type/type";
import { getAnimeDetail } from "@/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function AnimeDetailPage({ params }: AnimeDetailProps) {
  const anime = await getAnimeDetail(params.id);

  if (!anime || anime.mal_id === undefined) {
    notFound();
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{anime.title}</h1>
      <Image
        src={anime.images.jpg.large_image_url}
        alt={anime.title}
        width={200}
        height={100}
      />
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
      <p className="leading-relaxed">{anime.synopsis}</p>
    </main>
  );
}
