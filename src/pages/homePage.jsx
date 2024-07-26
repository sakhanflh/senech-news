import { Footer } from "../components/layouts/Footer";
import { LandingPage } from "../components/layouts/LandingPage";
import { Layout } from "../components/layouts/Layout";
import { InternasionalSection } from "../components/layouts/home/InternasionalSection";
import { NasionalSection } from "../components/layouts/home/NasionalSection";
import { PolitikSection } from "../components/layouts/home/PolitikSection";
import { RowSectionLayouts } from "../components/layouts/home/RowSectionLayouts";

export default function HomePage() {
    return (
        <>
            <Layout>
                <div className="flex flex-col gap-10">
                    <LandingPage
                        apiUrl={'https://api-berita-indonesia.vercel.app/antara/terbaru/'}
                    />
                    <NasionalSection
                    />
                    <InternasionalSection
                    />
                    <PolitikSection
                    />
                    <RowSectionLayouts
                        apiUrl={'https://api-berita-indonesia.vercel.app/antara/ekonomi/'}
                        heading={"Ekonomi"}
                        colorHeading={'border-secondary text-secondary'}
                        bgColor={'bg-secondary hover:bg-primary'}
                        textColor={'hover:text-secondary'}
                        info={"Ekonomi"}
                    />
                    <RowSectionLayouts
                        apiUrl={'https://api-berita-indonesia.vercel.app/antara/olahraga/'}
                        heading={"Olahraga"}
                        colorHeading={'border-primary text-primary'}
                        bgColor={'bg-primary hover:bg-black'}
                        textColor={'hover:text-primary'}
                        info={"Olahraga"}
                    />
                    <RowSectionLayouts
                        apiUrl={'https://api-berita-indonesia.vercel.app/antara/otomotif'}
                        heading={"Otomotif"}
                        colorHeading={'border-black text-black'}
                        bgColor={'bg-black hover:bg-secondary'}
                        textColor={'hover:text-secondary'}
                        info={"Otomotif"}
                    />
                </div>
            </Layout>
            <Footer />
        </>
    )
}