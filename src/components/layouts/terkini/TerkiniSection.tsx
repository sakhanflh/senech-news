import { useEffect, useState } from "react";
import { TerkiniCard } from "./TerkiniCard";
import axios from "axios";
import { TerkiniHighlight } from "./TerkiniHighlight";

interface Post {
    description: string;
    link: string;
    thumbnail: string;
    title: string;
    pubDate: string;
}

export function TerkiniSection() {
    const [data, setData] = useState<Post[]>([])
    const [dataH, setDataH] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api-berita-indonesia.vercel.app/antara/terbaru/')
                const limitedData = response.data.data.posts.slice(2, 18)
                const limitedDataH = response.data.data.posts.slice(0, 2)

                setDataH(limitedDataH)
                setData(limitedData)
                console.log(response.data.data.posts)
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [isLoading])
    return (
        <>
            <div className="w-[68%] font-open-sans text-primary flex flex-col gap-2">
                <div>
                    <h1 className="text-xl font-bold">Terkini</h1>
                </div>
                <div className="w-full h-1 flex">
                    <div className="w-[10%] h-full bg-highlight"></div>
                    <div className="w-[90%] h-full bg-gray-400"></div>
                </div>
                <div className="flex flex-wrap gap-5">
                    {dataH?.map((hl, index) => (
                        <div key={index} className="w-[25rem]">
                            <TerkiniHighlight
                            link={hl.link}
                            thumbnail={hl.thumbnail}
                            title={hl.title}
                            pubDate={hl.pubDate}
                            />
                        </div>
                    ))}
                    {data?.map((dt, index) => (
                        <div key={index} className="w-[25rem]">
                            <TerkiniCard
                                description={dt.description}
                                link={dt.link}
                                thumbnail={dt.thumbnail}
                                title={dt.title}
                                pubDate={dt.pubDate}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}