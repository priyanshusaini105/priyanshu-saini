import Image from "next/image";
import Link from "next/link";
import {NavItem} from 'src/type'

export const Navbar = () => {
    const navItems:NavItem[]=[
        {
          id:'1',
          title:'Home',
          href:'#home'
        }
    ]
  return (
    <nav>
      <div className="w-8/10 fixed bg-white rounded-full">
        <Image />
        <ul>
            {
                navItems.map((item,index)=>{
                    return(
                        <li>
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
