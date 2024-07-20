import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { id } from "date-fns/locale/id";
export function CardInner({ link, thumbnail, title, pubDate, info }) {
    let relativeDate = formatDistanceToNow(new Date(pubDate), { locale: id, addSuffix: true });
    relativeDate = relativeDate.replace('sekitar', '');
    relativeDate = relativeDate.replace('yang', '');
    return (
        <>
            <article className="flex w-full h-72 xl:h-[30rem] relative overflow-hidden group cursor-pointer text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                    style={{
                        backgroundImage: `url(${thumbnail})`,
                    }}
                ></div>
                <div className="w-full flex flex-col justify-end bg-gradient-to-t from-black to-transparent p-5 gap-1 relative z-10">
                    <p className="bg-secondary px-5 inline-block hover:bg-primary transition-all duration-200 ease-in" style={{ width: 'fit-content' }}>{info}</p>
                    <p className="text-accent font-medium xl:font-bold xl:text-xl hover:text-highlight hover:text-secondary">{title}</p>
                    <p className="text-accent opacity-80 text-xs xl:text-sm">{relativeDate}</p>
                </div>
            </article>
        </>
    )
}