import { LandingPage } from "../components/layouts/LandingPage";
import { Layout } from "../components/layouts/Layout";
import { SectionLayout } from "../components/layouts/SectionLayout";
import { InternasionalSection } from "../components/layouts/home/InternasionalSection";
import { NasionalSection } from "../components/layouts/home/NasionalSection";

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
                </div>
            </Layout>
        </>
    )
}