const Button = ({ children, onClick, ...props }) => {
    const handleClick = (e) => {
        e.preventDefault();
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <button {...props} onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;