import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { id } from "date-fns/locale/id";

interface Post {
    link: string
    thumbnail: string
    title: string
    pubDate: any
}
export function TerkiniHighlight({ link, thumbnail, title, pubDate }: Post) {
    let relativeDate = formatDistanceToNow(new Date(pubDate), { locale: id, addSuffix: true });
    relativeDate = relativeDate.replace('sekitar', '');
    relativeDate = relativeDate.replace('yang', '');
    return (
        <>
            <div className="flex w-full h-60 relative overflow-hidden group cursor-pointer">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                    style={{
                        backgroundImage: `url(${thumbnail})`,
                    }}
                ></div>
                <div className="w-full flex flex-col justify-end bg-gradient-to-t from-black to-transparent p-5 gap-1 relative z-10">
                    <p className="text-accent font-bold text-sm hover:text-highlight">{title}</p>
                    <p className="text-accent opacity-80 text-xs">{relativeDate}</p>
                </div>
            </div>

        </>
    )
}