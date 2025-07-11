import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full mt-30">
      <div className="container mx-auto text-center grid grid-cols-2">
        <div>
          <h1>Welcome to my Portofolio</h1>
        </div>
        <div className="items-center">
          <Image alt="saya" src={"/gambar1.jpg"} width={100} height={100} />
        </div>
      </div>
    </main>
  );
}
