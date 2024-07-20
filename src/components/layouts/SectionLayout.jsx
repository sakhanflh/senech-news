import { IoIosArrowRoundForward } from "react-icons/io";

export function SectionLayout() {
    return (
        <>
            <section>
                <div>
                    <span className="flex items-center">
                        <p>Politik</p>
                        <IoIosArrowRoundForward/>
                    </span>

                    <button>Selengkapnya</button>
                </div>
            </section>
        </>
    )
}