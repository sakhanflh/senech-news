import { CiSearch } from "react-icons/ci";
import { Navbar } from "../fragments/Navbar";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";


export function MobileNavbar({ isOpen }) {
    const [colIsOpen, setColIsOpen] = useState(false)
    const [companyOpen, setCompanyOpen] = useState(false)

    const handleOpen = () => {
        setColIsOpen(!colIsOpen)
    }
    const handleCompanyOpen = () => {
        setCompanyOpen(!companyOpen)
    }

    return (
        <>
            <div className={`fixed inset-0 bg-white z-40 transform ${isOpen ? 'translate-y-14' : 'opacity-0 cursor-none -translate-y-full'} transition-all duration-300 ease-in-out`}>
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
                        <div className="flex items-center gap-1 cursor-pointer" onClick={handleOpen}>
                            <IoIosArrowDown className={`transition-all duration-300 ${colIsOpen ? '-rotate-90' : 'rotate-0'}`} />
                            <h2 className="font-bold">News</h2>
                        </div>
                        <Navbar
                            style={`flex flex-col gap-2 ml-5 mt-2 transition-all duration-300 ${colIsOpen ? 'h-0 opacity-0 cursor-none' : 'h-52 opacity-100'}`}
                        />
                        <div className="flex cursor-pointer items-center gap-1 mt-5" onClick={handleCompanyOpen}>
                            <IoIosArrowDown className={`transition-all duration-300 ${companyOpen ? '-rotate-90' : 'rotate-0'}`} />
                            <h2 className="font-bold">Company</h2>
                        </div>
                        <ul className={`flex flex-col gap-2 ml-5 mt-2 transition-all duration-300 ${companyOpen ? 'h-0 opacity-0 cursor-none' : 'h-24 opacity-100'}`}>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Partner with Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}