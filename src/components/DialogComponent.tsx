"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NewAnimeInput } from "@/type/type";
import { postNewAnime } from "@/lib/api";
import Swal from "sweetalert2";
import { HoverCard } from "./ui/hover-card";

export default function DialogComponents({
  onSuccess = () => {},
}: {
  onSuccess: () => void;
}) {
  const [formData, setFormData] = useState<NewAnimeInput>({
    nama: "",
    status: "",
    skor: 0,
    genre: "",
    img_url: "",
  });
  const [urlError, setUrlError] = useState("");
  const [skorError, setSkorError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "skor") {
      let cleaned = value.replace(/[^0-9.]/g, "");

      if (cleaned.length > 10) {
        cleaned = cleaned.slice(0, 10);
      }

      const numeric = parseFloat(cleaned);
      if (numeric > 10) {
        setSkorError("Skor maksimal 10!");
        return;
      } else {
        setSkorError("");
      }

      setFormData({
        ...formData,
        [name]: value === "" ? 0 : parseFloat(value),
      });
    } else if (name === "img_url") {
      try {
        const parsed = new URL(value);

        if (parsed.hostname !== "4kwallpapers.com") {
          setUrlError("URL hanya boleh domain 4kwallpapers.com!");
          console.log("hostname:", parsed.hostname);

          return;
        } else {
          setUrlError("");
        }

        if (!parsed.pathname.endsWith(".jpg")) {
          setUrlError("URL harus file .jpg!");
          console.log("pathname:", parsed.pathname);

          return;
        } else {
          setUrlError("");
        }
      } catch {
        setUrlError("Format URL tidak valid");
      }

      setFormData({ ...formData, [name]: value });
      if (value.trim() === "") {
        setUrlError("URL tidak boleh kosong");
        return;
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await postNewAnime(formData);
      console.log("Sukses tambah anime: ", res);

      setFormData({
        nama: "",
        status: "",
        skor: 0,
        genre: "",
        img_url: "",
      });

      Swal.fire({
        title: "Success",
        text: "Anime berhasil ditambahkan!",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          onSuccess(); // PANGGIL FETCH DI SINI!
        }
      });
    } catch (error) {
      console.error("handleSubmit Error: ", error);
      Swal.fire({
        title: "Gagal",
        text: "Gagal menambahkan anime",
        icon: "error",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="hover:bg-input cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
          Tambah Favorite
        </Button>
      </DialogTrigger>
      <DialogContent className=" sm:max-w-[625px] max-h-[645px] overflow-y-auto">
        <form onSubmit={handleSubmit} className="gap-3 flex flex-col">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Tambah Favorite
            </DialogTitle>
            <DialogDescription>
              Mulai atur koleksimu, kelola sekarang!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="nama">Nama Anime</Label>
              <Input
                id="nama"
                name="nama"
                type="text"
                placeholder="Naruto Shippuden"
                value={formData.nama}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="status">Status</Label>
              <Input
                id="status"
                name="status"
                type="text"
                placeholder="Ongoing, Completed, "
                value={formData.status}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="skor">Skor {"(1-10)"}</Label>
              <Input
                id="skor"
                name="skor"
                type="number"
                placeholder="9.5, 9"
                value={formData.skor}
                onChange={handleChange}
              />
              {skorError && <p className="text-red-500 text-sm">{skorError}</p>}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="genre">Genre</Label>
              <Input
                id="genre"
                name="genre"
                type="text"
                placeholder="Actions, Romance, Comedy"
                value={formData.genre}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="img_url">URL image</Label>
              <div className="text-sm text-zinc-600 flex items-center ">
                <Image
                  width="18"
                  height="10"
                  src="https://img.icons8.com/emoji/48/warning-emoji.png"
                  alt="warning-emoji"
                />{" "}
                &nbsp; Rekomendasikan dari &nbsp;
                <Link
                  href={"https://4kwallpapers.com/"}
                  target="_blank"
                  className="text-blue-500 underline underline-offset-1"
                >
                  4kwallpapers.com
                </Link>{" "}
                , agar berjalan dengan baik
              </div>
              <Input
                id="img_url"
                name="img_url"
                type="url"
                placeholder="https://4kwallpapers.com/images/walls/thumbs_3t/23027.jpg"
                value={formData.img_url}
                onChange={handleChange}
              />
              {urlError && <p className="text-red-500 text-sm">{urlError}</p>}
            </div>
          </div>
          <DialogFooter>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">Hover me for tutorial</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">
                      Tutorial dapetin URL gambar
                    </h4>
                    <p className="text-sm">
                      1. Buka website{" "}
                      <Link
                        href={"https://4kwallpapers.com/"}
                        target="_blank"
                        className="text-blue-500 underline underline-offset-1"
                      >
                        4kwallpapers.com
                      </Link>{" "}
                    </p>
                    <p className="text-sm">2. Cari dan pilih gambar</p>
                    <p className="text-sm">
                      3. Kemudian klik kanan pilih {`"Open image in new tab"`}
                    </p>
                    <p className="text-sm">4. Copy link dan tempelkan disini</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <DialogClose asChild>
              <Button variant="outline" className="cursor-pointer">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit" className="cursor-pointer">
                Save Anime
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
