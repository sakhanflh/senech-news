import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";

interface TerkiniCardProps {
    description: string;
    link: string;
    thumbnail: string;
    title: string;
    pubDate: any;
}

export function DuniaCard({description,link ,thumbnail, title, pubDate}: TerkiniCardProps) {
    let relativeDate = formatDistanceToNow(new Date(pubDate), { locale: id, addSuffix: true });
    relativeDate = relativeDate.replace('sekitar', '');
    relativeDate = relativeDate.replace('yang', '');

    const linkTo = link

    const handleLink = () => {
        window.location.href = linkTo
    }
    return (
        <>
            <div className="flex w-full gap-1">
                <div className="w-32 h-24">
                    <img src={thumbnail} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="w-[70%]">
                    <p className="font-bold text-sm hover:text-highlight cursor-pointer" onClick={handleLink}>{title}</p>
                    <p className="opacity-80 text-xs">{relativeDate}</p>
                </div>
            </div>
        </>
    )
}