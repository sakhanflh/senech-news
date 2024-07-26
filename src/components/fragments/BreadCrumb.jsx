import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export function BreadCrumb() {
    return (
        <nav className="flex items-center gap-1 text-lg">
            <div className="flex items-center gap-1 hover:text-secondary">
                <FaHome className="text-lg" />
                <a href="/">Senech</a>
            </div>
            <span><IoIosArrowForward /></span>
            <span className="hover:text-secondary">Politik</span>
        </nav>
    )
}