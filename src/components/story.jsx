import { CodeBlock, railscast } from "react-code-blocks";

export default function Story() {
    const code =
        ` 
    bash ➔ ~/Desktop/guia-git

    git init

    Initialized empty Git repository in C:/Users/Desktop/guia-git/.git/
    ` ;
    return (
        <section className="flex flex-col gap-3 p-5 min-h-screen max-h-full justify-center">

            <article className="flex items-center flex-col md:flex-row">
                <div className="flex flex-col gap-5 flex-1 p-4">
                    <h2 className="text-4xl md:text-5xl py-5 text-center md:text-left">¿Alguna vez te preguntaste qué es <a href="https://git-scm.com/downloads" target="_blank" className=" underline text-amber-700 font-bold hover:text-amber-600 hover:underline hover:underline-offset-4">Git</a> , cómo funciona y cuál es su historia?</h2>
                    <p className=" text-center md:text-left text-2xl">
                        En 2005, Linus Torvalds, el creador del kernel de Linux, creó un nuevo sistema de control de versiones llamado <a href="https://git-scm.com/downloads" target="_blank" className=" underline text-amber-700 font-bold hover:text-amber-600 hover:underline hover:underline-offset-4">Git</a>.
                    </p>
                    <p className=" text-center md:text-left text-2xl">El control de versiones es una herramienta que permite gestionar los cambios en el código fuente de un proyecto. Esto es útil para poder volver a versiones anteriores del código, comparar cambios entre versiones, y colaborar con otros desarrolladores el cual es muy importante en el mundo laboral.</p>
                </div>
                <div className="w-11/12 md:flex-1 border-gradient">
                    <CodeBlock
                        language="bash"
                        text={code}
                        theme={railscast}
                        wrapLongLines={true}
                        showLineNumbers={false}
                    />
                    
                </div>

            </article>

        </section >
    )
}
