import { Navbar } from "../fragments/Navbar";
import { CiBookmark } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { MobileNavbar } from "./MobileNavbar";
import { useState } from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="w-full max-w-[90rem] z-50 fixed h-16 flex justify-between items-center px-[5%] shadow-md bg-white ">
                <div className="w-12">
                    <img src="/image/senech-black.png" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="hidden xl:block">
                    <Navbar 
                    style={'flex gap-10 font-medium text-lg'}
                    />
                </div>
                <div className="flex items-center gap-5 xl:gap-0">
                    <CiBookmark className="text-2xl" />
                    <RiMenu3Fill className="text-2xl xl:hidden" onClick={() => setIsOpen(!isOpen)} />
                </div>
            </header>
            <MobileNavbar isOpen={isOpen} />
        </>
    )
}