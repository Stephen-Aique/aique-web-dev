import Image from "next/image";
import { NAV_ITEMS } from "../constatnts";
import NavBtn from "./nav-btn";
import logo from '../../public/images/84490f436d585912d3bbffbb1a893c4c.jpg'

const Nav = () => {
    return (
        <nav className="flex justify-between p-[12px] sm:py-[12px] sm:px-[124px]">
            <div className="w-[32px] h-[32px] sm:w-[42px] sm:h-[42px] grid place-items-center gap-[10px]">
                <Image src={logo} alt="logo" width={32} height={32}/>
            </div>
            <div className="flex gap-[12px] align-center items-center">
                {NAV_ITEMS.map((item, index) => (
                    <NavBtn key={item.title} text={item.title} href={item.href} number={index} />
                ))}
            </div>
        </nav>
    )
}

export default Nav;