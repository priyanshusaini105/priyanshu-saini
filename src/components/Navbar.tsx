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
      id: "2",
      title: "Home",
      href: "#home",
    },
    {
      id: "3",
      title: "Home",
      href: "#home",
    },
    {
      id: "4",
      title: "Home",
      href: "#home",
    },
  ];
  return (
    <nav className="fixed w-full z-20 m-3 lg:mt-8">
      <div className="w-fit p-3 bg-white rounded-full flex justify-between items-center gap-12 mx-auto">
        <Link href='/' className="flex items-center">
          <Image src="/img/logo.svg" width={40} height={40} alt={"Priyanshu"} />
          <span className="font-bold font-varela text-xl">Priyanshu Saini</span>
        </Link>
        <ul className="flex gap-6">
          {navItems.map((item, index) => {
            return (
              <li key={item.id}>
                <Link href={item.href} className='font-mont hover:text-[#8330C2] duration-200 ease-in'>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Link href="#explore" className="rounded-full">
          <WobbleButton title='Explore' textStyle={{fontSize:'1rem'}} type='md'/>
        </Link>
      </div>
    </nav>
  );
};
