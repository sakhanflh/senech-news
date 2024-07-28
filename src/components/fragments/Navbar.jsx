import { Link } from "react-router-dom";

export function Navbar({ style }) {
    return (
        <>
            <nav>
                <ul className={style}>
                    <Link to={'/'} className="hover:text-secondary">Home</Link>
                    <Link to={'/nasional'} className="hover:text-secondary">Nasional</Link>
                    <Link to={'/internasional'} className="hover:text-secondary">Internasional</Link>
                    <Link to={'/politik'} className="hover:text-secondary">Politik</Link>
                    <Link to={'/ekonomi'} className="hover:text-secondary">Ekonomi</Link>
                    <Link to={'/olahraga'} className="hover:text-secondary">Olahraga</Link>
                    <Link to={'/otomotif'} className="hover:text-secondary">Otomotif</Link>
                </ul>
            </nav>
        </>
    )
}