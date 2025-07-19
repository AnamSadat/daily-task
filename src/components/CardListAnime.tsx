"use client";

import Image from "next/image";
import { CardProps } from "@/types/type";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { DropdownMenuDemo } from "@/components/Dropdown";

export default function CardListAnime({ anime, onSuccess }: CardProps) {
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
          <CardDescription className=" line-clamp-2  text-sm">
            <span className="font-semibold">Rating</span> : {anime.skor}
          </CardDescription>
          <CardDescription className=" line-clamp-2  text-sm">
            <span className="font-semibold">Status</span> : {anime.status}
          </CardDescription>
          <CardDescription className=" mb-3 line-clamp-2 h-12 text-sm">
            <span className="font-semibold">Genre</span> : {anime.genre}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex items-center justify-center ">
          <DropdownMenuDemo id={anime.id} onSuccess={onSuccess} anime={anime} />
        </CardFooter>
      </Card>
    </div>
  );
}
