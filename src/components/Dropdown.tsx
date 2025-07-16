"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Link from "next/link";
import Image from "next/image";
import { deleteNewAnime, putNewAnime } from "@/lib/api";
import { DropdownProps, NewAnime } from "@/type/type";
import Swal from "sweetalert2";

export function DropdownMenuDemo({ id, onSuccess, anime }: DropdownProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [formData, setFormData] = useState<NewAnime>({
    id: anime.id,
    nama: anime.nama,
    status: anime.status,
    skor: anime.skor,
    genre: anime.genre,
    img_url: anime.img_url,
  });
  const [urlError, setUrlError] = useState("");
  const [skorError, setSkorError] = useState("");

  const handleDelete = async () => {
    setIsDelete(true);
    console.log("Deleting anime with ID:", id);
    await deleteNewAnime(id);
    console.log("Anime deleted successfully.");
    setIsDelete(false);
    setDeleteOpen(false);
    setMenuOpen(false);
    onSuccess();
    console.log("onSuccess callback executed.");
  };

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await putNewAnime(formData);
      console.log("Sukses tambah anime: ", res);

      Swal.fire({
        title: "Success",
        text: "Anime berhasil Diperbarui!",
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
    console.log("Item edited!");
    setEditOpen(false);
    setMenuOpen(false);
  };

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

  return (
    <>
      <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="custom"
            className="hover:cursor-pointer w-full"
            asChild
          >
            <p>
              Dropdown{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </p>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuGroup>
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault();
                setEditOpen(true);
              }}
            >
              Edit
              <DropdownMenuShortcut>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  style={{ width: 12, height: 12 }}
                >
                  <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                </svg>
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault();
                setDeleteOpen(true);
              }}
            >
              Delete
              <DropdownMenuShortcut>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  style={{ width: 12, height: 12 }}
                >
                  <path
                    d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z "
                    fill="#ef4444"
                  />
                </svg>
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* EDIT DIALOG */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="sm:max-w-[625px] max-h-[645px] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Item</DialogTitle>
            <DialogDescription>
              Modify your item details here. Click save when done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="nama">Nama Anime</Label>
              <Input
                id="nama"
                name="nama"
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
                placeholder="Actions, Romance, Comedy"
                value={formData.genre}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="img_url">URL image</Label>
              <p className="text-sm text-zinc-600 flex">
                <Image
                  width="18"
                  height="10"
                  src="https://img.icons8.com/emoji/48/warning-emoji.png"
                  alt="warning-emoji"
                />{" "}
                &nbsp; Kami rekomendasikan dari &nbsp;
                <Link
                  href={"https://4kwallpapers.com/"}
                  target="_blank"
                  className="text-blue-500 underline underline-offset-1"
                >
                  4kwallpapers.com
                </Link>{" "}
                &nbsp; agar gambar berjalan dengan baik
              </p>
              <Input
                id="img_url"
                name="img_url"
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
            <DialogClose asChild className="">
              <Button
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer"
                variant={"outline"}
              >
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild className="">
              <Button onClick={handleEdit} className="cursor-pointer">
                Save
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* DELETE ALERT DIALOG */}
      <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Benar mau hapus?</AlertDialogTitle>
            <AlertDialogDescription>
              Ini akan menghapus permanen daftar favorite.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-400 cursor-pointer"
            >
              {isDelete ? "Deleting..." : "Yes, delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
