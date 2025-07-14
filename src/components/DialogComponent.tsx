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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import DropFile from "./ui/dropfile";

export default function DialogComponents() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" className="hover:bg-input">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
            </svg>
            Tambah Anime
          </Button>
        </DialogTrigger>
        <DialogContent className=" sm:max-w-[625px] max-h-[645px] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Tambah Anime</DialogTitle>
            <DialogDescription>
              Mulai atur koleksimu, kelola sekarang!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Nama Anime</Label>
              <Input id="name-1" name="name" placeholder="Naruto Shippuden" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Status</Label>
              <Input
                id="username-1"
                name="username"
                placeholder="Ongoing, Completed, "
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Skor</Label>
              <Input id="username-1" name="username" placeholder="9.5, 9" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Durasi {"(menit)"}</Label>
              <Input id="username-1" name="username" placeholder="24 " />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Genre</Label>
              <Input
                id="username-1"
                name="username"
                placeholder="Actions, Romance, Comedy"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Deskripsi</Label>
              <Textarea
                id="username-1"
                name="username"
                placeholder="Actions, Romance, Comedy"
              />
            </div>
            <div className="grid gap-3">
              <DropFile />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
