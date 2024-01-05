import { Link } from "react-router-dom";

export function Navigation() {
    return <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/counter">Counter</Link>
            </li>
            <li>
                <Link to="/posts">Posts</Link>
            </li>
            <li>
                <Link to="/pokemon">Pokemon</Link>
            </li>
        </ul>
    </div>
}