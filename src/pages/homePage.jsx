import { LandingPage } from "../components/layouts/LandingPage";
import { Layout } from "../components/layouts/Layout";
import { SectionLayout } from "../components/layouts/SectionLayout";

export default function HomePage(){
    return(
        <>
        <Layout>
            <LandingPage/>
            <SectionLayout/>
        </Layout>
        </>
    )
}