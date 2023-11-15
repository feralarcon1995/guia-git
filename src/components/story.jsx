import { CodeBlock, railscast } from "react-code-blocks";

export default function Story() {
    const code =
        ` 
    bash ➔ ~/Desktop/guia-git

    git init

    Initialized empty Git repository in C:/Users/Desktop/guia-git/.git/
    ` ;

    const githubCode =
        ` 
    bash ➔ ~/Desktop/guia-git

    git add remote https://github.com/miusuario/miproyecto.git

    git push -u origin main
    ` ;
    return (
        <section className="flex flex-col gap-16 p-2 md:p-16 min-h-screen max-h-full justify-center">

            <article className="flex items-start flex-col gap-2 w-full md:w-4/6 ">
                <svg className=" text-amber-700 p-2 bg-[#191919] rounded w-14	h-14 border border-amber-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM5 14a1 1 0 0 1-.707-1.707L7.586 9 4.293 5.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4A1 1 0 0 1 5 14Zm10 0h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2Z" />
                </svg>
                <h2 className="text-4xl md:text-5xl font-bold py-5 text-left">Hablemos de Git </h2>
                <p className=" text-left text-2xl">
                    En 2005, Linus Torvalds, el creador del kernel de Linux, creó un nuevo sistema de control de versiones llamado <a href="https://git-scm.com/downloads" target="_blank" className=" underline text-amber-700 font-bold hover:text-amber-600 hover:underline hover:underline-offset-4">Git</a>.
                </p>
                <p className=" text-left text-2xl">El control de versiones es una herramienta que permite gestionar los cambios en el código fuente de un proyecto. Esto es útil para poder volver a versiones anteriores del código, comparar cambios entre versiones, y colaborar con otros desarrolladores el cual es muy importante en el mundo laboral.</p>
                <a href="https://git-scm.com/downloads" target="_blank" className=" text-xl underline text-amber-700 font-bold hover:text-amber-600 hover:underline hover:underline-offset-4">Descargalo aquí → </a>
            </article>

            <article className="flex flex-col md:flex-row w-full gap-3 ">

                <div className="flex flex-col gap-3 w-full md:w-6/12">
                    <h3 className="text-3xl font-bold">Veremos lo basico</h3>
                    <p>Usando los comandos mas comunes</p>
                    <p className="text-base text-lime-300">#Iniciamos git en el repositorio local</p>
                    <CodeBlock
                        language="bash"
                        text={code}
                        theme={railscast}
                        wrapLongLines={true}
                        showLineNumbers={false}
                        
                    />
                </div>

                <div className="flex flex-col gap-3 w-full md:w-6/12 ">
                    <h3 className="text-3xl font-bold">Trabajaremos con github</h3>
                    <p>Vas a crear un repositorio en github y subir tu proyecto</p>
                    <p className="text-base text-lime-300">#Vas a conectar tu proyecto local al repositorio online de github</p>
                    <CodeBlock
                        language="bash"
                        text={githubCode}
                        theme={railscast}
                        wrapLongLines={true}
                        showLineNumbers={false}
                        
                    />
                </div>
            </article>
        </section >
    )
}
