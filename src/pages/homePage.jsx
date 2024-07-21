import { LandingPage } from "../components/layouts/LandingPage";
import { Layout } from "../components/layouts/Layout";
import { SectionLayout } from "../components/layouts/SectionLayout";

export default function HomePage() {
    return (
        <>
            <Layout>
                <div className="flex flex-col gap-20">
                    <LandingPage
                        apiUrl={'https://api-berita-indonesia.vercel.app/antara/terbaru/'}
                    />
                    <SectionLayout
                        apiUrl={'https://api-berita-indonesia.vercel.app/antara/politik/'}
                    />
                </div>
            </Layout>
        </>
    )
}