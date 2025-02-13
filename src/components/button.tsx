type ButtonProps = {
    text: string;
    isActive: boolean;
    isPrimary: boolean;
    className: string;
}

const Button = ({text, isActive = true, isPrimary = true, className = ""} : ButtonProps) => {
    return (
        <button className={`${isPrimary ? "btn-primary" : "btn-secondary"} ${className}`} disabled={!isActive}>
            {text}
        </button>
    )
}

export default Button;