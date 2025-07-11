import Image from "next/image";
import Link from "next/link";
import { Anime } from "@/type/type";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type CardProps = {
  anime: Anime;
};

export default function AnimeCard({ anime }: CardProps) {
  return (
    <div>
      <Card className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg bg-slate-100">
        <Link href={`/anime/${anime.mal_id}`} className="">
          <CardHeader className="flex items-center justify-center">
            <Image
              src={anime.images.webp.large_image_url}
              alt={anime.title}
              width={300}
              height={500}
              className="rounded-xl object-cover max-h-40"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-base mb-2 line-clamp-2 h-12">
              {anime.title}
            </CardTitle>
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            <Button variant="custom" className="hover:cursor-pointer">
              See More...
            </Button>
          </CardFooter>
        </Link>
      </Card>
    </div>
  );
}
