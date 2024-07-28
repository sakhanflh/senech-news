import { Footer } from "../components/layouts/Footer";
import { HighlightLayout } from "../components/layouts/HighlightLayout";
import { LandingPage } from "../components/layouts/LandingPage";
import { Layout } from "../components/layouts/Layout";
import { OldnestLayout } from "../components/layouts/OldnestLayout";

export default function OlahragaPage() {
    return (
        <main>
            <Layout>
                <div className="flex flex-col gap-10">
                    <LandingPage
                        apiUrl={'https://api-berita-indonesia.vercel.app/antara/olahraga/'}
                    />
                    <HighlightLayout
                        apiUrl={'https://api-berita-indonesia.vercel.app/antara/olahraga/'}
                        sliceInner={{ start: 5, end: 6 }}
                        sliceCol={{ start: 6, end: 10 }}
                        info={"Bola"}
                    />
                    <OldnestLayout
                        apiUrl={'https://api-berita-indonesia.vercel.app/antara/bola/'}
                        sliceInner={{ start: 0, end: 2 }}
                        sliceCol={{ start: 2, end: 12 }}
                        sliceCol2={{ start: 12, end: 19 }}
                        info={"Bola"}
                        heading={"Bola"}
                    />
                </div>
            </Layout>
            <Footer/>
        </main>
    )
}