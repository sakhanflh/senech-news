import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { id } from "date-fns/locale/id";
export function CardInner({ link, thumbnail, title, pubDate, info, bgColor, textColor, size }) {
    let relativeDate = formatDistanceToNow(new Date(pubDate), { locale: id, addSuffix: true });
    relativeDate = relativeDate.replace('sekitar', '');
    relativeDate = relativeDate.replace('yang', '');
    return (
        <>
            <article className={`flex ${size} relative overflow-hidden group cursor-pointer text-white`}>
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                    style={{
                        backgroundImage: `url(${thumbnail})`,
                    }}
                ></div>
                <div className="w-full flex flex-col justify-end bg-gradient-to-t from-black to-transparent p-3 xl:p-5 gap-1 relative z-10">
                    <p className={`px-5 inline-block transition-all duration-200 ease-in ${bgColor}`} style={{ width: 'fit-content' }}>{info}</p>
                    <p className={`font-medium xl:font-semibold xl:text-lg ${textColor}`}>{title}</p>
                    <p className="opacity-80 text-xs xl:text-sm">{relativeDate}</p>
                </div>
            </article>
        </>
    )
}