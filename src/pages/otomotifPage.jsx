import { Footer } from "../components/layouts/Footer";
import { HighlightLayout } from "../components/layouts/HighlightLayout";
import { LandingPage } from "../components/layouts/LandingPage";
import { Layout } from "../components/layouts/Layout";
import { OldnestLayout } from "../components/layouts/OldnestLayout";

export default function OtomotifPage() {
    return (
        <main>
            <Layout>
                <div className="flex flex-col gap-10">
                    <LandingPage
                        apiUrl={'https://api-berita-indonesia.vercel.app/antara/otomotif/'}
                    />
                    <HighlightLayout
                        apiUrl={'https://api-berita-indonesia.vercel.app/antara/otomotif/'}
                        sliceInner={{ start: 5, end: 6 }}
                        sliceCol={{ start: 6, end: 10 }}
                        info={"Otomotif"}
                    />
                    <OldnestLayout
                        apiUrl={'https://api-berita-indonesia.vercel.app/antara/otomotif/'}
                        sliceInner={{ start: 10, end: 12 }}
                        sliceCol={{ start: 12, end: 22 }}
                        sliceCol2={{ start: 22, end: 29 }}
                        info={"Otomotif"}
                        heading={"Otomotif"}
                    />
                </div>
            </Layout>
            <Footer />
        </main>
    )
}