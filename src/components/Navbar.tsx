"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  ];

  const pathname = usePathname();

  return (
    <header className="w-full bg-slate-50 shadow-20 mb-10">
      <div className="flex justify-between mx-auto container  items-center py-6 text-lg">
        <div>
          <h1 className="font-bold">MyAnimeList</h1>
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
                      ? "text-orange-500 font-semibold"
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
