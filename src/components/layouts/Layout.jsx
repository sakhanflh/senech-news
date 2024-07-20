import { Header } from "./Header";

export function Layout({ children }) {
    return (
        <>
            <main className="max-w-[90rem] mx-auto relative">
                <Header />
                <div className="pt-20 px-5">
                    {children}
                </div>
            </main>
        </>
    )
}