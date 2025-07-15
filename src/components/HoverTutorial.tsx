import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="custom">Hover me for tutorial</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Tutorial</h4>
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
  );
}
