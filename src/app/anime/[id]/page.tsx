import type { AnimeDetailProps } from "@/type/type";
import { getAnimeDetail } from "@/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function AnimeDetailPage({ params }: AnimeDetailProps) {
  const { id } = await params;
  const anime = await getAnimeDetail(id);

  if (!anime || anime.mal_id === undefined) {
    notFound();
  }

  return (
    <main className="my-7 container mx-auto mt-26">
      <div className="mb-5">
        <Button variant={"custom"} className="flex">
          <Link href={"/anime"} className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="15"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
            &nbsp; Back
          </Link>
        </Button>
      </div>
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
