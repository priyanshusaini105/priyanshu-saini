import { NavItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { WobbleButton } from ".";

export const Navbar = () => {
  const navItems: NavItem[] = [
    {
      id: "1",
      title: "Home",
      href: "#home",
    },
    {
      id: "1",
      title: "Home",
      href: "#home",
    },
    {
      id: "1",
      title: "Home",
      href: "#home",
    },
    {
      id: "1",
      title: "Home",
      href: "#home",
    },
  ];
  return (
    <nav className="fixed w-full z-10">
      <div className="w-fit p-2 bg-white rounded-full flex justify-between items-center gap-4">
        <Link href='/' className="flex items-center">
          <Image src="/img/logo.svg" width={40} height={40} alt={"Priyanshu"} />
          <span className="font-bold font-varela text-xl">Priyanshu Saini</span>
        </Link>
        <ul className="flex gap-4">
          {navItems.map((item, index) => {
            return (
              <li key={item.id}>
                <Link href={item.href}>{item.href}</Link>
              </li>
            );
          })}
        </ul>
        <Link href="#explore" className="rounded-full">
          <WobbleButton title='Explore' textStyle={{fontSize:'1rem'}}/>
        </Link>
      </div>
    </nav>
  );
};
