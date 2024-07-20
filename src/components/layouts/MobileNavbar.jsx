import { CiSearch } from "react-icons/ci";
import { Navbar } from "../fragments/Navbar";

export function MobileNavbar({ isOpen }) {
    return (
        <>
            <div className={`fixed inset-0 bg-white z-40 transform ${isOpen ? 'translate-y-14' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}>
                <div className="p-6">
                    <div className="mb-4 flex items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border p-2 rounded-l w-full"
                        />
                        <button className="bg-black text-white p-2 rounded-r">
                            <CiSearch className="text-2xl" />
                        </button>
                    </div>
                    <div>
                        <h2 className="font-bold mb-2">News</h2>
                        <Navbar 
                        style={'flex flex-col gap-2'}
                        />
                        <h2 className="font-bold mb-2 mt-5">Company</h2>
                        <ul>
                            <li><a href="#" className="block py-1">About Us</a></li>
                            <li><a href="#" className="block py-1">Partner with Us</a></li>
                            <li><a href="#" className="block py-1">Careers</a></li>
                            <li><a href="#" className="block py-1">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}