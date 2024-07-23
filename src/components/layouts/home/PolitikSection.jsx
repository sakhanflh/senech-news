import { CardInner } from "../../fragments/CardInner";
import { useFetch } from "../../../hooks/useFetch";

export function PolitikSection() {
    const { data, loading: isLoading, error } = useFetch('https://api-berita-indonesia.vercel.app/antara/politik/')
    const arrLength = new Array(8).fill(0);

    const dataInner = data?.data?.posts?.slice(0, 1) || [];
    const dataCol = data?.data?.posts?.slice(1, 15) || []; 
    

    if (error) {
        console.log(error)
        return <p>Error Fetching Data</p>
    }

    return (
        <section className="bg-black w-full p-5 text-white flex flex-col">
            <div className="flex items-center justify-between">
                <h1 className="font-medium text-2xl">Politik</h1>
                <button className="py-2 px-5 bg-white text-black font-medium">Selengkapnya</button>
            </div>

            <article>
                <div>
                    {dataInner.map((dt, index) => (
                        <div key={index}>
                            <CardInner
                                link={dt.link}
                                title={dt.title}
                                pubDate={dt.pubDate}
                                description={dt.description}
                                thumbnail={dt.thumbnail}
                                size={'w-full h-72 xl:h-[15rem]'}
                            />
                        </div>
                    ))}
                </div>
            </article>
        </section>
    )
}