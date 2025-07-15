"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/anime",
      label: "Anime",
    },
    {
      href: "/favorite",
      label: "Favorite",
    },
  ];

  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // cek awal
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = `w-full shadow-20 mb-8 transition-all duration-300 ${
    scrolled ? "bg-input fixed top-0 z-50" : "bg-input fixed top-0 z-50"
  }`;

  return (
    <header className={headerClass}>
      <div className="flex justify-between mx-auto container  items-center py-6 text-lg">
        <div>
          <Link href={"/"}>
            <Image
              src={"/anime-logo.png"}
              alt="logo anime"
              width={85}
              height={100}
            />
          </Link>
        </div>
        <nav>
          <ul className="flex gap-7">
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={
                    pathname === route.href ||
                    (route.href !== "/" && pathname.startsWith(route.href))
                      ? "text-primary font-bold"
                      : "text-muted-foreground"
                  }
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
