import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="w-full flex">
            <Link className="m-3" to="/">
                Home
            </Link>
            <Link className="m-3" to="/forums">
                Forums
            </Link>
            <Link className="m-3" to="/staff">
                Staff
            </Link>
            <Link className="m-3" to="/rules">
                Rules
            </Link>
        </div>
    );
}

export default Nav;
