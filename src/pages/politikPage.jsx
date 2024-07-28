import { Footer } from "../components/layouts/Footer";
import { HighlightLayout } from "../components/layouts/HighlightLayout";
import { LandingPage } from "../components/layouts/LandingPage";
import { Layout } from "../components/layouts/Layout";
export default function PolitikPage() {
    return (
        <main>
            <Layout>
                <div className="flex flex-col gap-10">
                    <LandingPage
                        apiUrl={'https://api-berita-indonesia.vercel.app/antara/politik/'}
                    />
                    <HighlightLayout
                        apiUrl={'https://api-berita-indonesia.vercel.app/antara/politik/'}
                        sliceInner={{ start: 5, end: 6 }}
                        sliceCol={{ start: 6, end: 10 }}
                        info={"Politik"}
                    />

                </div>
            </Layout>
            <Footer />
        </main>
    )
}