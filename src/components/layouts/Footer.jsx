import { FaGithub } from "react-icons/fa";

export function Footer() {
    const handleLink = () => {
        window.location.href = 'https://github.com/sakhanflh'
    }
    const handleAntara = () => {
        window.location.href = 'https://www.antaranews.com/'
    }
    const handleCnn = () => {
        window.location.href = 'https://www.cnnindonesia.com/'
    }
    return (
        <footer className="w-full max-w-[90rem] mx-auto relative mt-10 text-white pt-[4%] xl:pt-[2%] py-[1%] px-[5%] bg-black gap-10 flex flex-col">
            <head className="flex items-center justify-between">
                <aside className="w-60 flex items-center gap-3">
                    <img src="/image/senech-white.png" alt="" className="w-10 xl:w-16" />
                    <span className="text-lg xl:text-2xl">Senech News</span>
                </aside>
                <div>
                    <FaGithub className="text-3xl xl:text-4xl cursor-pointer" onClick={handleLink} />
                </div>
            </head>

            <div className="flex flex-col xl:flex-row w-full gap-5 justify-between">
                <div className="font-light w-full xl:w-[35%]">
                    <p>"Senech News menyajikan berita terkini dengan menggunakan API dari <span className="font-bold text-primary cursor-pointer" onClick={handleAntara}>Antara</span> dan <span className="font-bold text-secondary cursor-pointer" onClick={handleCnn}>CNN</span>. Terima kasih kepada kedua sumber terpercaya ini yang telah membantu kami memberikan informasi akurat dan berkualitas tinggi kepada pembaca."</p>
                </div>
                <div className="flex gap-10 pt-5 xl:pt-0">
                    <div className="flex flex-col gap-3">
                        <p className="font-medium">Get News</p>
                        <ul className="font-light gap-1 flex flex-col">
                            <li className="cursor-pointer hover:text-primary">Terbaru</li>
                            <li className="cursor-pointer hover:text-primary">Nasional</li>
                            <li className="cursor-pointer hover:text-primary">Internasional</li>
                            <li className="cursor-pointer hover:text-primary">Politik</li>
                            <li className="cursor-pointer hover:text-primary">Ekonomi</li>
                            <li className="cursor-pointer hover:text-primary">Olahraga</li>
                            <li className="cursor-pointer hover:text-primary">Otomotif</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="font-medium">Company</p>
                        <ul className="font-light gap-1 flex flex-col">
                            <li className="cursor-pointer hover:text-secondary">About Us</li>
                            <li className="cursor-pointer hover:text-secondary">Contact Us</li>
                            <li className="cursor-pointer hover:text-secondary">Partner with Us</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-3 pt-5 xl:pt-0">
                    <div className="gap-1 flex items-center justify-between">
                        <label htmlFor="" className="w-[15%] xl:w-[30%]">Name :</label>
                        <input type="text" className="text-black p-1 w-[83%] xl:w-[83%]" />
                    </div>
                    <div className="gap-2 flex items-center justify-between">
                        <label htmlFor="" className="w-[15%] xl:w-[30%]">Email :</label>
                        <input type="email" name="" id="" className="text-black p-1 w-[85%] xl:w-[87%]" />
                    </div>
                    <div className="justify-center xl:justify-end flex">
                        <button className="px-12 py-1 border flex justify-end">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="border-t opacity-40"></div>
                <p className="pt-3 text-center opacity-100">@senech 2024</p>
            </div>
        </footer>
    )
}