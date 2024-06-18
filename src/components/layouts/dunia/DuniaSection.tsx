import axios from "axios"
import { useEffect, useState } from "react"
import { DuniaCard } from "./DuniaCard"

interface Post {
    description: string;
    link: string;
    thumbnail: string;
    title: string;
    pubDate: any;
}
export function DuniaSection() {
    const [data, setData] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api-berita-indonesia.vercel.app/cnn/internasional/')
                const limitedData = response.data.data.posts.slice(0, 10)
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
            <div className="w-[30%] font-open-sans text-primary flex flex-col gap-2">
                <div>
                    <h1 className="text-xl font-bold font-open-sans">Dunia</h1>
                </div>
                <div className="w-full h-1 flex">
                    <div className="w-[20%] h-full bg-highlight"></div>
                    <div className="w-[80%] h-full bg-gray-400"></div>
                </div>
                <div className="flex flex-wrap gap-5">
                    {data?.map((dt, index) => (
                        <div key={index} className="w-[25rem]">
                            <DuniaCard
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