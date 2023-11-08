import Image from "next/image"

function Bullets() {
    return (
        <section className="bg-bullet p-2 md:p-16 flex flex-col md:flex-row justify-between items-center gap-4 my-10 min-h-screen max-h-full">
            <Image
                src="/guia.png"
                alt="ventana de terminal con comandos de git"
                width={500}
                height={500}
                className="border-gradient w-full  md:w-6/12 hidden md:block"
            />

            <article className="flex justify-between items-center gap-3 w-full  md:w-6/12 flex-wrap">
                <h2 className="w-full text-4xl text-left font-bold py-5">No tengas miedo a aprender</h2>
                <p className="p-6 md:p-3 bg-[#191919]    shadow text-xl flex flex-col items-center justify-centergap-3 w-full  md:w-[45%]  md:py-4">
                    <svg className="w-6 h-6 text-gray-800 dark:text-amber-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className=" text-center">  Te voy a ayudar con esta pequeña guía para aprender el control de versiones.</span>
                </p>
                <p className="p-6 md:p-3 bg-[#191919]   shadow text-xl flex flex-col items-center justify-centergap-3 w-full  md:w-[45%]  md:py-4">
                    <svg className="w-6 h-6 text-gray-800 dark:text-amber-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                    </svg>
                    <span className=" text-center">Practicar, practicar y practicar, es la mejor manera de aprender. </span>
                </p>
                <p className="p-6 md:p-3 bg-[#191919]  shadow text-xl flex flex-col items-center justify-centergap-3 w-full  md:w-[45%]  md:py-4">
                    <svg className="w-6 h-6 text-gray-800 dark:text-amber-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                        <path d="M18 5H0v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5Zm-7.258-2L9.092.8a2.009 2.009 0 0 0-1.6-.8H2.049a2 2 0 0 0-2 2v1h10.693Z" />
                    </svg>
                    <span className=" text-center">Crearemos un proyecto pequeño y utilizaremos git para gestionarlo. </span>
                </p>
                <p className="p-6 md:p-3 bg-[#191919]  shadow text-xl flex flex-col items-center justify-centergap-3 w-full  md:w-[45%]  md:py-4">
                    <svg className="w-6 h-6 text-gray-800 dark:text-amber-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M9 1.334C7.06.594 1.646-.84.293.653a1.158 1.158 0 0 0-.293.77v13.973c0 .193.046.383.134.55.088.167.214.306.366.403a.932.932 0 0 0 .5.147c.176 0 .348-.05.5-.147 1.059-.32 6.265.851 7.5 1.65V1.334ZM19.707.653C18.353-.84 12.94.593 11 1.333V18c1.234-.799 6.436-1.968 7.5-1.65a.931.931 0 0 0 .5.147.931.931 0 0 0 .5-.148c.152-.096.279-.235.366-.403.088-.167.134-.357.134-.55V1.423a1.158 1.158 0 0 0-.293-.77Z" />
                    </svg>
                    <span className=" text-center">Podras usar esta guía las veces que sea necesaria. </span>
                </p>

            </article>

        </section>
    )
}

export default Bullets