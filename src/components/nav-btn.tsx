import Link from "next/link";

export type NavBtnProps = {
    text: string;
    href: string;
    number: number;
}

const NavBtn = ({text, href, number} : NavBtnProps) => {
    return (
        <Link href={href} className={`${number === 0 ? "nav-btn-active" : "nav-btn"}`}>{text}</Link>
    )
}

export default NavBtn;