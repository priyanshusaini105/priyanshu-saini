import { NavItem } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    const navItems:NavItem[]=[
        {
          id:'1',
          title:'Home',
          href:'#home'
        },
        {
          id:'1',
          title:'Home',
          href:'#home'
        },
        {
          id:'1',
          title:'Home',
          href:'#home'
        },
        {
          id:'1',
          title:'Home',
          href:'#home'
        }
    ]
  return (
    <nav className="fixed w-full">
      <div className="w-8/10 p-2 bg-white rounded-full flex justify-between">
        <Image src={""} alt={""} />
        <ul className="flex gap-4">
            {
                navItems.map((item,index)=>{
                    return(
                        <li key={item.id}>
                            <Link href={item.href}>
                                {item.href}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
        <div></div>
      </div>
    </nav>
  );
};
