import { Link } from "react-router-dom";

export function Navbar({ style }) {
    return (
        <>
            <nav>
                <ul className={style}>
                    <Link to={'/'} className="hover:text-secondary">Home</Link>
                    <Link to={'/nasional'} className="hover:text-secondary">Nasional</Link>
                    <Link className="hover:text-secondary">Internasional</Link>
                    <Link className="hover:text-secondary">Politik</Link>
                    <Link className="hover:text-secondary">Ekonomi</Link>
                    <Link className="hover:text-secondary">Olahraga</Link>
                    <Link className="hover:text-secondary">Otomotif</Link>
                </ul>
            </nav>
        </>
    )
}