// import type { AnimeDetailProps } from "@/type/type";
// import { getAnimeDetail } from "@/lib/api";
// import Image from "next/image";

// export default async function AnimeDetailPage({ params }: AnimeDetailProps) {
//   const anime = await getAnimeDetail(params.id);

//   return (
//     <main className="p-6">
//       <h1 className="text-2xl font-bold mb-4">{anime.title}</h1>
//       <Image
//         src={anime.images.jpg.large_image_url}
//         alt={anime.title}
//         width={200}
//         height={100}
//       />
//       <p className="mt-2">{anime.synopsis}</p>
//       <p>
//         <strong>Score:</strong> {anime.score}
//       </p>
//       <p>
//         <strong>Episodes:</strong> {anime.episodes}
//       </p>
//       <p>
//         <strong>Status:</strong> {anime.status}
//       </p>
//     </main>
//   );
// }
