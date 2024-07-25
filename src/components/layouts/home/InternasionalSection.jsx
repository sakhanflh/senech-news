import { useFetch } from "../../../hooks/useFetch";
import { CardCol } from "../../fragments/CardCol";
import { CardInner } from "../../fragments/CardInner";
import { SkeletonLoading } from "../../fragments/SkeletonLoading";

export function InternasionalSection() {
    const { data, loading: isLoading, error } = useFetch('https://api-berita-indonesia.vercel.app/cnn/internasional/');
    const arrLength = new Array(5).fill(0);
    const arrLength2 = new Array(7).fill(0);

    const dataInner = data?.data?.posts?.slice(0, 2) || [];
    const dataCol = data?.data?.posts?.slice(2, 12) || [];
    const dataCol2 = data?.data?.posts?.slice(12, 19) || [];

    if (error) {
        console.error(error);
        return <p>Error fetching data</p>;
    }
    return (
        <>
            <section className="flex w-full flex-col xl:flex-row xl:justify-between gap-10">
                <div className="xl:w-[60%] w-full flex flex-col">
                    <div className="border-b border-black border-opacity-25">
                        <p className="border-b-2 border-black max-w-36 text-2xl font-medium text-black">Internasional</p>
                    </div>
                    <div className="flex mt-4 flex-col gap-5">
                        <div className="flex flex-col xl:flex-row gap-2">
                            {isLoading ?
                                <article className="flex w-full h-[20rem] relative overflow-hidden group cursor-pointer text-white">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110">
                                        <SkeletonLoading height={'h-[20rem]'} />
                                    </div>
                                </article>
                                :
                                dataInner.map((dt, index) => (
                                    <div key={index} className="w-full">
                                        <CardInner
                                            link={dt.link}
                                            title={dt.title}
                                            pubDate={dt.pubDate}
                                            description={dt.description}
                                            thumbnail={dt.thumbnail}
                                            bgColor={'bg-black hover:bg-secondary'}
                                            textColor={'hover:text-secondary'}
                                            size={'w-full h-72 xl:h-[15rem]'}
                                        />
                                    </div>
                                ))}
                        </div>
                        <div className="flex flex-col xl:flex-row xl:flex-wrap gap-4">
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
                                    <div key={index} className="xl:w-[48%]">
                                        <CardCol
                                            link={dt.link}
                                            title={dt.title}
                                            pubDate={dt.pubDate}
                                            description={dt.description}
                                            thumbnail={dt.thumbnail}
                                            info={"Internasional"}
                                            bgColor={'bg-black hover:bg-secondary'}
                                            textColor={'hover:text-secondary'}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="xl:w-[35%] flex flex-col gap-5 ">
                    <div className="border-b border-black border-opacity-25">
                        <p className="border-b-2 border-black max-w-28 text-2xl font-medium text-black">Terpopuler</p>
                    </div>
                    {isLoading ?
                        arrLength2.map((_, i) => (
                            <article key={i} className="flex w-full gap-1">
                                <div className="w-32 h-24">
                                    <SkeletonLoading width={'w-32'} height={'h-24'} />
                                </div>

                                <div className="w-[70%] gap-2 flex flex-col">
                                    <SkeletonLoading width={'w-16'} height={'h-5'} />
                                    <SkeletonLoading width={'w-60'} height={'h-10'} />
                                    <SkeletonLoading width={'w-16'} height={'h-3'} />
                                </div>
                            </article>
                        ))
                        :
                        dataCol2.map((dt, index) => (
                            <div key={index}>
                                <CardCol
                                    link={dt.link}
                                    title={dt.title}
                                    pubDate={dt.pubDate}
                                    description={dt.description}
                                    thumbnail={dt.thumbnail}
                                    info={"Internasional"}
                                    bgColor={'bg-black hover:bg-secondary'}
                                    textColor={'hover:text-secondary'}
                                />
                            </div>
                        ))}
                </div>
            </section>
        </>
    )
}