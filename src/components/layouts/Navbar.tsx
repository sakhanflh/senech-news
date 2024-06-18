import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <>
            <div className="w-full h-full flex items-center px-[5%] justify-between text-accent">
                <div className="w-12">
                    <img src="/img/senech-blue.png" alt="" />
                </div>

                <ul className="flex gap-10">
                    <Link to={'/'}>
                        <li>Home</li>
                    </Link>
                    <Link to={'/'}>
                        <li>Politik</li>
                    </Link>
                    <Link to={'/'}>
                        <li>Ekonomi</li>
                    </Link>
                    <Link to={'/'}>
                        <li>Olahraga</li>
                    </Link>
                    <Link to={'/'}>
                        <li>Lifestyle</li>
                    </Link>
                    <Link to={'/'}>
                        <li>Otomotif</li>
                    </Link>
                </ul>
            </div>
        </>
    )
}