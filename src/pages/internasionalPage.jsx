import { Footer } from "../components/layouts/Footer";
import { HighlightLayout } from "../components/layouts/HighlightLayout";
import { LandingPage } from "../components/layouts/LandingPage";
import { Layout } from "../components/layouts/Layout";
import { OldnestLayout } from "../components/layouts/OldnestLayout";

export default function InternasionalPage() {
    return (
        <main>
            <Layout>
                <div className="flex flex-col gap-10">
                    <LandingPage
                        apiUrl={'https://api-berita-indonesia.vercel.app/cnn/internasional/'}
                    />
                    <HighlightLayout
                        apiUrl={'https://api-berita-indonesia.vercel.app/cnn/internasional/'}
                        sliceInner={{ start: 5, end: 6 }}
                        sliceCol={{ start: 6, end: 10 }}
                        info={"Internasional"}
                    />
                    <OldnestLayout
                        apiUrl={'https://api-berita-indonesia.vercel.app/cnn/internasional/'}
                        sliceInner={{ start: 10, end: 12 }}
                        sliceCol={{ start: 12, end: 22 }}
                        sliceCol2={{ start: 22, end: 29 }}
                        info={"Internasional"}
                        heading={"Internasional"}
                    />
                </div>
            </Layout>
            <Footer/>
        </main>
    )
}