import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full bg-slate-100 py-20 my-10">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="hero text-center grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          {/* Text Content */}
          <div className="mx-auto">
            <h1 className="text-4xl font-extrabold mb-4 text-primary">
              Temukan Anime Favoritmu di Sini!
            </h1>
            <p className="text-gray-600 text-lg max-w-md mx-auto">
              Menyajikan kumpulan anime terbaik, terpopuler, dan terbaru untuk
              para penggemar sejati.{" "}
              <Link
                href={"/anime"}
                className="underline underline-offset-1 text-primary"
              >
                Lest go!
              </Link>
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              alt="anime illustration"
              src="/naruto1.png"
              width={300}
              height={300}
              className="rounded-4xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* About Section */}
        <div className="about text-center  py-10 px-6 max-w-4xl mx-auto">
          <Card className="p-10 rounded-xl">
            <h2 className="font-bold text-3xl text-primary mb-4">
              Tentang Website
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              <span className="font-semibold">Anime</span> adalah website
              pencarian dan eksplorasi anime yang menyajikan berbagai informasi
              seperti judul, rating, gambar, dan detail lainnya. Website ini
              dirancang untuk membantu penggemar anime menemukan tontonan
              favorit mereka dengan lebih mudah, cepat, dan nyaman.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}
