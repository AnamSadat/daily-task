"use client";

import DialogComponents from "@/components/DialogComponent";
import ListAnime from "@/components/ListAnime";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { fetchFavoriteAnime } from "@/lib/story/favoriteAnime";

export default function AddAnime() {
  const dispatch = useDispatch<AppDispatch>();
  const { items: anime, loading } = useSelector(
    (state: RootState) => state.favorite
  );

  useEffect(() => {
    dispatch(fetchFavoriteAnime());
  }, [dispatch]);

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
          <DialogComponents onSuccess={() => dispatch(fetchFavoriteAnime())} />
        </div>
      </div>
      <div className="mt-20">
        <ListAnime
          loading={loading}
          anime={anime}
          onSuccess={() => dispatch(fetchFavoriteAnime())}
        />
      </div>
    </div>
  );
}
