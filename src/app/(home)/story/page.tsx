import Card from "@/components/Card";

export default function Story() {
  const image = [
    {
      src: "/gambar1.jpg",
      label: "Gambar 1",
    },
    {
      src: "/gambar2.jpg",
      label: "Gambar 2",
    },
    {
      src: "/gambar3.jpg",
      label: "Gambar 3",
    },
  ];

  return (
    <div className="text-center">
      <h1 className="text-4xl mb-5">Project</h1>
      <div className="grid grid-cols-3 place-items-center mx-auto">
        {image.map((img) => (
          <Card key={img.src} link={img.src} />
        ))}
      </div>
    </div>
  );
}
