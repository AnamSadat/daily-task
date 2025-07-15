"use client";

import DialogComponents from "@/components/DialogComponent";
import ListAnime from "@/components/ListAnime";
import { useState, useEffect } from "react";
import { getNewAnime } from "@/lib/api";
import { NewAnime } from "@/type/type";

// TODO: CRUD anime page

export default function AddAnime() {
  const [anime, setAnimeState] = useState<NewAnime[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAnime = async () => {
    const data: NewAnime[] = await getNewAnime();
    setAnimeState(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <div className="container mx-auto mt-30">
      <div className="text-center mx-auto max-w-4xl gap-5 flex flex-col">
        <h1 className="text-4xl font-bold">
          Daftar Anime Impianmu, Kini dalam Genggaman.
        </h1>
        <p>
          Dari episode pertama hingga terakhir, catat perjalanan anime-mu dengan
          mudah.
        </p>
        <div>
          <DialogComponents onSuccess={fetchAnime} />
        </div>
      </div>
      <div className="mt-20">
        <ListAnime loading={loading} anime={anime} onSuccess={fetchAnime} />
      </div>
    </div>
  );
}
