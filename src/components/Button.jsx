import { Link } from "react-router-dom";

function Button({ text, isLink, to, onClick }) {
    return <>
        { isLink 
        ? (
            <Link to={to}>
                <button onClick={onClick}>{text}</button>    
            </Link>    
        )
        : (
            <button onClick={onClick}>{text}</button>
        )
    }
    </>
}

export default Button;

