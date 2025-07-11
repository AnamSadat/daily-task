import Image from "next/image";
import Link from "next/link";
import { Anime } from "@/type/type";

type CardProps = {
  anime: Anime;
};

export default function Card({ anime }: CardProps) {
  return (
    <div className="p-4 border-2 border-blue-700 rounded-2xl">
      <div>
        <Image
          src={anime.images.jpg.image_url}
          alt={anime.title}
          width={350}
          height={400}
          className="rounded-2xl"
        />
      </div>
      <div className="items-start justify-start">
        <h1>{anime.title}</h1>
        <Link href={`/anime/${anime.mal_id}`}>Load more...</Link>
      </div>
    </div>
  );
}
