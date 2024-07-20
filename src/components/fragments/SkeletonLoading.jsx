export function SkeletonLoading({ width, height, margin }) {
    return (
        <div className={`${height ? height : 'h-2'} ${margin ? margin : 'm-0'} bg-neutral-500  ${width ? width : 'w-full'} skeleton`}></div>
    )
}