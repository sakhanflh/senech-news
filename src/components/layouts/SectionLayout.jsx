import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SkeletonLoading } from "../fragments/SkeletonLoading";
import { CardInner } from "../fragments/CardInner";
import { CardCol } from "../fragments/CardCol";

export function SectionLayout({ apiUrl }) {
    const [dataInner, setDataInner] = useState([])
    const [dataCol, setDataCol] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const arrLength = new Array(6).fill(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl)
                const limitDataInner = response.data.data.posts.slice(0, 1)
                const limitDataCol = response.data.data.posts.slice(1, 5)
                setDataInner(limitDataInner)
                setDataCol(limitDataCol)
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
        const intervalId = setInterval(fetchData, 60000)

        return () => clearInterval(intervalId)
    }, [apiUrl])
    return (
        <>
            <section className="flex flex-col">
                <div className="flex items-center justify-between">
                    <span className="flex items-center">
                        <p className="text-4xl font-medium">Politik</p>
                        <IoIosArrowRoundForward className="text-5xl" />
                    </span>
                    <button className="px-5 py-3 bg-primary text-white">Selengkapnya</button>
                </div>
                <main className="flex flex-col gap-5 xl:gap-0 xl:flex-row justify-between">
                    <div className="xl:w-[55%] mt-2">
                        {isLoading ?
                            <article className="flex w-full h-[30rem] relative overflow-hidden group cursor-pointer text-white">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110">
                                    <SkeletonLoading height={'h-[30rem]'} />
                                </div>
                            </article>
                            :
                            dataInner?.map((dt, index) => (
                                <div key={index}>
                                    <CardInner
                                        link={dt.link}
                                        title={dt.title}
                                        pubDate={dt.pubDate}
                                        description={dt.description}
                                        thumbnail={dt.thumbnail}
                                        info={"Politik"}
                                        bgColor={'bg-primary hover:bg-secondary'}
                                        textColor={'hover:text-primary'}
                                        size={'w-full h-72 xl:h-[30rem]'}
                                    />
                                </div>
                            ))}
                    </div>
                    <div className={`xl:w-[40%] flex flex-col gap-4 ${dataCol?.length == 2 || dataCol?.length % 2 !== 0 ? 'xl:gap-x-4' : 'xl:justify-between'}`}>
                        <div className="w-full border-b border-black border-opacity-25 text-2xl font-semibold">
                            <h1 className="text-primary border-b-2 max-w-20 border-primary">Terkini</h1>
                        </div>
                        {isLoading ?
                            arrLength.map((_, i) => (
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
                            dataCol?.map((dt, index) => (
                                <div key={index}>
                                    <CardCol
                                        link={dt.link}
                                        title={dt.title}
                                        pubDate={dt.pubDate}
                                        description={dt.description}
                                        thumbnail={dt.thumbnail}
                                        info={"Politik"}
                                        bgColor={'bg-primary hover:bg-secondary'}
                                        textColor={'hover:text-primary'}
                                    />
                                </div>
                            ))}
                    </div>
                </main>
            </section>
        </>
    )
}