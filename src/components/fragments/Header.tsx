import { Navbar } from "../layouts/Navbar";

export function Header() {
    return (
        <>
            <div className="w-full h-16 font-roboto-slab bg-primary z-50 fixed">
                <Navbar/>
            </div>
        </>
    )
}