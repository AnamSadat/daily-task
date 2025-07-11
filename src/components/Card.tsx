import Image from "next/image";
import Link from "next/link";

type CardProps = {
  link: string;
};

export default function Card({ link }: CardProps) {
  return (
    <div className="">
      <div>
        <Image
          src={link}
          alt="saya"
          width={400}
          height={500}
          className="rounded-2xl"
        />
      </div>
      <h1>Judul</h1>
      <Link href={"/"}>Load more...</Link>
    </div>
  );
}
