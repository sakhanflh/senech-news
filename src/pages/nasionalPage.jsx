import { LandingPage } from "../components/layouts/LandingPage";
import { Layout } from "../components/layouts/Layout";

export default function NasionalPage() {
    return (
        <main>
            <Layout>
                <LandingPage
                apiUrl={'https://api-berita-indonesia.vercel.app/cnn/nasional/'}
                />
            </Layout>
        </main>
    )
}