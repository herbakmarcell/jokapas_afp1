import { Link } from "react-router-dom";

export function CustomLink({to, children, props}) {
    return(
        <li>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}