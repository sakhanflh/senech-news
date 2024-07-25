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
                <div className="flex flex-col gap-20">
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
                    />
                    <RowSectionLayouts
                        apiUrl={'https://api-berita-indonesia.vercel.app/antara/olahraga/'}
                        heading={"Olahraga"}
                    />
                    <RowSectionLayouts
                        apiUrl={'https://api-berita-indonesia.vercel.app/antara/otomotif'}
                        heading={"Otomotif"}
                    />
                </div>
            </Layout>
        </>
    )
}