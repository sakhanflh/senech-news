import { Header } from "../components/fragments/Header"
import { DuniaSection } from "../components/layouts/dunia/DuniaSection"
import { TerkiniSection } from "../components/layouts/terkini/TerkiniSection"

export default function HomePage() {
    return (
        <>
        <Header/> 
            <div className="pt-20 flex flex-col px-[5%]">
                <div className="flex w-full justify-between">
                    <TerkiniSection/>
                    <DuniaSection/>
                </div>
            </div>
        </>
    )
}