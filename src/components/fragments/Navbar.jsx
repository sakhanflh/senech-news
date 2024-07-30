import { Link, useLocation } from "react-router-dom";

export function Navbar({ style }) {
    const location = useLocation();

    return (
        <>
            <nav>
                <ul className={style}>
                    <Link
                        to={'/'}
                        className={`hover:text-secondary ${location.pathname === '/' ? 'text-secondary' : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        to={'/nasional'}
                        className={`hover:text-secondary ${location.pathname === '/nasional' ? 'text-secondary' : ''}`}
                    >
                        Nasional
                    </Link>
                    <Link
                        to={'/internasional'}
                        className={`hover:text-secondary ${location.pathname === '/internasional' ? 'text-secondary' : ''}`}
                    >
                        Internasional
                    </Link>
                    <Link
                        to={'/politik'}
                        className={`hover:text-secondary ${location.pathname === '/politik' ? 'text-secondary' : ''}`}
                    >
                        Politik
                    </Link>
                    <Link
                        to={'/ekonomi'}
                        className={`hover:text-secondary ${location.pathname === '/ekonomi' ? 'text-secondary' : ''}`}
                    >
                        Ekonomi
                    </Link>
                    <Link
                        to={'/olahraga'}
                        className={`hover:text-secondary ${location.pathname === '/olahraga' ? 'text-secondary' : ''}`}
                    >
                        Olahraga
                    </Link>
                    <Link
                        to={'/otomotif'}
                        className={`hover:text-secondary ${location.pathname === '/otomotif' ? 'text-secondary' : ''}`}
                    >
                        Otomotif
                    </Link>
                </ul>
            </nav>
        </>
    );
}
