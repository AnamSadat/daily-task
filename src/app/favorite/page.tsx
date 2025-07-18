"use client";

import DialogComponents from "@/components/DialogComponent";
import ListAnime from "@/components/ListAnime";
import { useState, useEffect } from "react";
import { getAnimeDB } from "@/lib/apiPrisma";
import { NewAnime } from "@/type/type";

// TODO: CRUD anime page

export default function AddAnime() {
  const [anime, setAnimeState] = useState<NewAnime[]>([]);
  const [loading, setLoading] = useState(true);

  // AddAnime.tsx
  const fetchAnime = async () => {
    setLoading(true); // <--- Tambahkan ini di awal
    try {
      const data: NewAnime[] = await getAnimeDB();
      console.log("Data berhasil diambil setelah pembaruan/penghapusan:", data); // Verifikasi data
      setAnimeState(data);
    } catch (error) {
      console.error("Kesalahan saat mengambil data anime:", error);
      // Penting: Tangani error di UI, mungkin tampilkan pesan error
    } finally {
      setLoading(false); // <--- Pastikan loading selalu diatur ke false, terlepas dari sukses/gagal
    }
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
