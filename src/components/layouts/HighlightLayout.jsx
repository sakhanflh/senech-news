import { useFetch } from "../../hooks/useFetch";
import { CardCol } from "../fragments/CardCol";
import { CardInner } from "../fragments/CardInner";
import { SkeletonLoading } from "../fragments/SkeletonLoading";

export function HighlightLayout({ apiUrl, sliceInner, sliceCol, info }) {
    const { data, loading: isLoading, error } = useFetch(apiUrl)
    const arrLength = new Array(4).fill(0);

    const dataInner = data?.data?.posts?.slice(sliceInner.start, sliceInner.end) || [];
    const dataCol = data?.data?.posts?.slice(sliceCol.start, sliceCol.end) || [];


    if (error) {
        console.log(error)
        return <p>Error Fetching Data</p>
    }

    return (
        <section className="bg-black w-full p-5 text-white flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <h1 className="font-medium text-2xl">Terpopuler</h1>
                <button className="py-2 px-5 bg-white text-black font-medium hover:bg-secondary hover:text-white transition-all duration-300">Selengkapnya</button>
            </div>

            <article className="w-full flex flex-col xl:flex-row justify-between gap-2 xl:gap-0">
                <div className="w-full xl:w-[55%]">
                    {isLoading ?
                        <article className="flex w-full h-[30rem] relative overflow-hidden group cursor-pointer text-white">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110">
                                <SkeletonLoading height={'h-[30rem]'} />
                            </div>
                        </article>
                        :
                        dataInner.map((dt, index) => (
                            <div key={index}>
                                <CardInner
                                    link={dt.link}
                                    title={dt.title}
                                    pubDate={dt.pubDate}
                                    description={dt.description}
                                    thumbnail={dt.thumbnail}
                                    size={'w-full h-72 xl:h-[24rem]'}
                                    textColor={'hover:text-secondary'}
                                />
                            </div>
                        ))}
                </div>

                <div className="w-full xl:w-[40%] flex flex-col gap-2">
                    {isLoading ?
                        arrLength.map((_, i) => (
                            <article key={i} className="flex w-full gap-1">
                                <div className="w-32 h-24">
                                    <SkeletonLoading width={'w-32'} height={'h-24'} />
                                </div>

                                <div className="xl:w-[48%] gap-2 flex flex-col">
                                    <SkeletonLoading width={'w-16'} height={'h-5'} />
                                    <SkeletonLoading width={'w-60'} height={'h-10'} />
                                    <SkeletonLoading width={'w-16'} height={'h-3'} />
                                </div>
                            </article>
                        ))
                        :
                        dataCol.map((dt, index) => (
                            <div key={index} className="flex flex-col gap-1">
                                <CardCol
                                    link={dt.link}
                                    title={dt.title}
                                    pubDate={dt.pubDate}
                                    description={dt.description}
                                    thumbnail={dt.thumbnail}
                                    info={info}
                                    bgColor={'bg-secondary hover:bg-primary'}
                                    textColor={'hover:text-secondary'}
                                    parentsBg={'hover:bg-slate-950'}
                                />
                            </div>
                        ))}
                </div>
            </article>
        </section>
    )
}