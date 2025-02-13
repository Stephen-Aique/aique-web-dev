export type NavBtnProps = {
    text: string
}

const NavBtn = ({text} : NavBtnProps) => {
    return (
        <button className="nav-btn">{text}</button>
    )
}

export default NavBtn;