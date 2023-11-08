import { Link } from "react-router-dom";
import "./customLink.css"

export function CustomLink({to, children, props}) {
    return(
        <li className="link-container">
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}