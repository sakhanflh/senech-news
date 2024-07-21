import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { id } from "date-fns/locale/id";

export function CardCol({ link, thumbnail, title, pubDate, info, bgColor, textColor }) {
    let relativeDate = formatDistanceToNow(new Date(pubDate), { locale: id, addSuffix: true });
    relativeDate = relativeDate.replace('sekitar', '');
    relativeDate = relativeDate.replace('yang', '');

    const handleLink = () => {
        window.location.href = link;
    }

    return (
        <>
            <article className="flex w-full gap-1 hover:bg-slate-50 cursor-pointer" onClick={handleLink}>
                <div className="w-32 h-28 xl:h-24">
                    <img src={thumbnail} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="w-[70%] gap-1">
                    {info && (
                        <p className={`px-3 inline-block text-white transition-all duration-200 ease-in-out ${bgColor}`}>{info}</p>
                    )}
                    <p className={`font-medium xl:font-semibold text-sm xl:text-base hover:text-highlight cursor-pointer transition-all duration-200 ease-in pt-2 line-clamp-2 ${textColor}`}>{title}</p>
                    <p className="opacity-80 text-xs">{relativeDate}</p>
                </div>
            </article>
        </>
    );
}
