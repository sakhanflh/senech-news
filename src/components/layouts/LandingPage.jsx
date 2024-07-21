import { useEffect, useState } from "react";
import { CardInner } from "../fragments/CardInner";
import axios from "axios";
import { CardCol } from "../fragments/CardCol";
import { SkeletonLoading } from "../fragments/SkeletonLoading";
import { useFetch } from "../../hooks/useFetch";

export function LandingPage({ apiUrl }) {
    const { data, loading: isLoading, error } = useFetch(apiUrl);
    const arrLength = new Array(4).fill(0);

    const dataInner = data?.data.posts.slice(0, 1) || [];
    const dataCol = data?.data.posts.slice(1, 5) || [];

    if (error) {
        console.error(error);
        return <p>Error fetching data</p>;
    }
    return (
        <>
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
                                    info={"Terkini"}
                                    bgColor={'bg-secondary hover:bg-primary'}
                                    textColor={'hover:text-secondary'}
                                    size={'w-full h-72 xl:h-[30rem]'}
                                />
                            </div>
                        ))}
                </div>
                <div className={`xl:w-[40%] flex flex-col gap-4 ${dataCol?.length == 2 || dataCol?.length % 2 !== 0 ? 'xl:gap-x-4' : 'xl:justify-between'}`}>
                    <div className="w-full border-b border-black border-opacity-25 text-2xl font-semibold">
                        <h1 className="text-secondary border-b-2 max-w-20 border-secondary">Terkini</h1>
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
                                    info={"Terkini"}
                                    bgColor={'bg-secondary hover:bg-primary'}
                                    textColor={'hover:text-secondary'}
                                />
                            </div>
                        ))}
                </div>
            </main>
        </>
    )
}