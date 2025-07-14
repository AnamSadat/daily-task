import Image from "next/image";
import Link from "next/link";
import { CardProps } from "@/type/type";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CardListAnime({ anime }: CardProps) {
  return (
    <div>
      <Card className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg bg-white">
        <Link href={`/anime/${anime.id}`} className="">
          <CardHeader className="flex items-center justify-center">
            <Image
              src={anime.img_url}
              alt={anime.nama}
              width={300}
              height={500}
              className="rounded-xl object-cover max-h-40 mb-5"
            />
          </CardHeader>
          <CardContent className="">
            <CardTitle className="text-base">{anime.nama}</CardTitle>
            <CardDescription className=" mb-3 line-clamp-2 h-12 text-sm">
              {anime.genre}
            </CardDescription>
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            <Button variant="custom" className="hover:cursor-pointer w-full">
              Detail{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </Button>
          </CardFooter>
        </Link>
      </Card>
    </div>
  );
}
