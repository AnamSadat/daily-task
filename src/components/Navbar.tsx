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
      href: "/story",
      label: "Story",
    },
    {
      href: "/about",
      label: "About",
    },
  ];

  const pathname = usePathname();

  return (
    <header className="w-full">
      <div className="flex justify-between mx-auto container  items-center py-6 text-lg">
        <div>
          <h1>Portofolio</h1>
        </div>
        <nav>
          <ul className="flex gap-7">
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={
                    pathname === route.href
                      ? "text-orange-500"
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
