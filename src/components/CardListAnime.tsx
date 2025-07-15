import Image from "next/image";
import { CardProps } from "@/type/type";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { DropdownMenuDemo } from "@/components/Dropdown";

export default function CardListAnime({ anime }: CardProps) {
  return (
    <div>
      <Card className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg bg-white">
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
        <CardFooter className="flex items-center justify-center ">
          <DropdownMenuDemo />
        </CardFooter>
      </Card>
    </div>
  );
}
