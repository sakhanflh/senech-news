import { useFetch } from "../../../hooks/useFetch";
import { CardRow } from "../../fragments/CardRow";
import { SkeletonLoading } from "../../fragments/SkeletonLoading";

export function RowSectionLayouts({ apiUrl, heading, colorHeading, bgColor, textColor, info }) {
    const { data, loading: isLoading, error } = useFetch(apiUrl)
    const arrLength = new Array(4).fill(0);

    const dataRow = data?.data?.posts?.slice(1, 5) || [];


    if (error) {
        console.log(error)
        return <p>Error Fetching Data</p>
    }
    return (
        <section className="flex flex-col gap-3">
            <div className="border-b border-black border-opacity-25">
                <h1 className={`text-2xl font-medium border-b-2 max-w-28 ${colorHeading}`}>{heading}</h1>
            </div>

            <article className="flex w-full flex-col gap-3 xl:flex-row xl:justify-between">
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
                    dataRow.map((dt, index) => (
                        <div key={index}>
                            <CardRow
                                link={dt.link}
                                title={dt.title}
                                pubDate={dt.pubDate}
                                description={dt.description}
                                thumbnail={dt.thumbnail}
                                info={info}
                                bgColor={bgColor}
                                textColor={textColor}
                                parentsBg={'w-full'}
                            />
                        </div>
                    ))
                }
            </article>
        </section>
    )
}