export function Navbar({ style }) {
    return (
        <>
            <nav>
                <ul className={style}>
                    <li className="hover:text-secondary">Terbaru</li>
                    <li className="hover:text-secondary">Nasional</li>
                    <li className="hover:text-secondary">Internasional</li>
                    <li className="hover:text-secondary">Politik</li>
                    <li className="hover:text-secondary">Ekonomi</li>
                    <li className="hover:text-secondary">Olahraga</li>
                    <li className="hover:text-secondary">Otomotif</li>
                </ul>
            </nav>
        </>
    )
}