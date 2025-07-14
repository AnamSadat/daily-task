import DialogComponents from "@/components/DialogComponent";
import ListAnime from "@/components/ListAnime";

// TODO: CRUD anime page

export default function AddAnime() {
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
          <DialogComponents />
        </div>
      </div>
      <div className="mt-20">
        <ListAnime />
      </div>
    </div>
  );
}
