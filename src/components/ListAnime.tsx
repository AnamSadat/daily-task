"use client";

import { Card } from "@/components/ui/card";
import CardListAnime from "./CardListAnime";
import { useEffect, useState } from "react";
import { getNewAnime } from "@/lib/api";
import { NewAnime } from "@/type/type";
import { Skeleton } from "./ui/skeleton";

// TODO: List Anime

export default function ListAnime() {
  const [anime, setAnimeState] = useState<NewAnime[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAnime = async () => {
      const data = await getNewAnime();
      setAnimeState(data.data);
      setLoading(false);
    };
    getAnime();
  }, []);

  // Jika data kosong
  if (loading) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Daftar Anime</h2>
        <div className="grid mx-auto lg:grid-cols-5 gap-5 md:grid-cols-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              key={index}
              className="w-full h-60 rounded-lg bg-slate-200"
            />
          ))}
        </div>
      </div>
    );
  }
  if (anime.length === 0) {
    return (
      <Card className="p-7 items-center flex flex-col bg-slate-50 space-y-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={120}
        >
          <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm240 80c0-8.8 7.2-16 16-16c45 0 85.6 20.5 115.7 53.1c6 6.5 5.6 16.6-.9 22.6s-16.6 5.6-22.6-.9c-25-27.1-57.4-42.9-92.3-42.9c-8.8 0-16-7.2-16-16zm-80 80c-26.5 0-48-21-48-47c0-20 28.6-60.4 41.6-77.7c3.2-4.4 9.6-4.4 12.8 0C179.6 308.6 208 349 208 369c0 26-21.5 47-48 47zM367.6 208a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
        </svg>
        <h2 className="text-2xl font-bold">Daftar Anime Masih Kosong</h2>
        <p>Silahkan untuk membuat daftar Anime terlebih dahulu</p>
      </Card>
    );
  }

  // Jika data ada
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Daftar Anime</h2>
      <div className="grid mx-auto lg:grid-cols-5  gap-5 md:grid-cols-3">
        {anime.map((anime) => (
          <CardListAnime key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
}
