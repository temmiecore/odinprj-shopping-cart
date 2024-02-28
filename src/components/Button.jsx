import "../styles/Button.css"

function Button({ text, isLink, to, onClick }) {
    return <>
        { isLink 
        ? (
            <a href={to}>
                <button onClick={onClick}>{text}</button>    
            </a>    
        )
        : (
            <button onClick={onClick}>{text}</button>
        )
    }
    </>
}

export default Button;

