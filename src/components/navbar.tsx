import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar flex justify-between py-7 items-center">
      <div className="logo">
        <h1 className="">Portofolio</h1>
      </div>
      <ul className="menu flex items-center gap-4">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Skill</Link>
        </li>
        <li>
          <Link href="#">Project</Link>
        </li>
      </ul>
    </div>
  );
}
