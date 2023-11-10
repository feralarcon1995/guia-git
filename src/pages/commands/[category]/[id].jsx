import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '@/components/layout';
import Navbar from '@/components/navbar';
import { getAllCommands, getCommandById } from '@/data/data';
import { CodeBlock, CopyBlock, railscast } from "react-code-blocks";
import Link from 'next/link';
export async function getStaticPaths() {
    const commands = getAllCommands();
    const paths = [];

    for (const category in commands) {
        for (const command of commands[category]) {
            paths.push({ params: { category, id: command.id } });
        }
    }
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const allCommandData = getAllCommands();
    const command = getCommandById(params.category, params.id);
    return { props: { command, allCommandData } };
}

export default function Command({ command, allCommandData }) {
    const router = useRouter();
    const { category } = router.query;

    const categoryCommands = allCommandData[category];
    const currentIndex = categoryCommands.findIndex(cmd => cmd.id === command.id);
    let nextIndex = (currentIndex + 1) % categoryCommands.length;
    if (nextIndex === 0) {
        nextIndex = 1;
    }

    let prevIndex = (currentIndex - 1 + categoryCommands.length) % categoryCommands.length;
    if (prevIndex === 0) {
        prevIndex = categoryCommands.length - 1;
    }



    return (
        <Layout >
            <Head>
                <meta
                    name="description"
                    content={command.description}
                />
                <title>{command.title}</title>
            </Head>
            <main className="dash">
                <Navbar allCommandData={allCommandData} />
                <section className="relative bg-hero  content w-full p-2 md:p-16 z-10  mt-10">
                    <section className=" flex flex-col gap-5 min-h-screen max-h-full justify-start w-full ">
                        <button onClick={() => router.push(`/commands/${category}`)} className="z-10 hover:text-amber-600 text-xl py-5 self-start">
                            ← Volver atras
                        </button>
                        <h1 className=" z-10 text-4xl md:text-6xl uppercase font-bold py-5 "> {command.title}</h1>
                        <p className=" z-10 text-2xl">{command.description}</p>
                        <div className=' z-10 border-gradient w-full md:w-3/4'>
                            <CopyBlock
                                language="bash"
                                text={command.command}
                                theme={railscast}
                                showLineNumbers={false}
                                wrapLongLines={true}
                                copied={true}
                            />
                        </div>
                        {command.secondDescription ?
                            <p className=" z-10 text-2xl">{command.secondDescription}</p>
                            : ''}
                        {command.secondCommand ?
                            <div className=' z-10 border-gradient w-full md:w-3/4'>
                                <CopyBlock
                                    language="bash"
                                    text={command.secondCommand}
                                    theme={railscast}
                                    showLineNumbers={false}
                                    wrapLongLines={true}
                                    copied={true}
                                />
                            </div>
                            : ''}
                        <p className=" z-10 text-2xl">{command.outputDescription}</p>
                        {command.output ? <>
                            <div className=' z-10 border-gradient w-full md:w-2/4'>
                                <CodeBlock
                                    language="bash"
                                    text={command.output}
                                    theme={railscast}
                                    showLineNumbers={false}
                                    wrapLongLines={true}
                                    copied={false}
                                />
                            </div></> : ''}

                        {command.tips ? <>
                            <div className=" z-10  mt-4">
                                <h2 className=" z-10 text-2xl font-bold text-amber-600">A tener en cuenta</h2>
                                <ul className=" z-10 list-disc pl-4">
                                    {command.tips.map((tip, index) => (
                                        <li key={index} className='text-xl py-2'>{tip}</li>
                                    ))}
                                </ul>
                            </div></> : ''}
                        <article className=' z-10 mt-32 flex w-full justify-between items-center'>
                            {prevIndex !== currentIndex && (
                                <Link href={`/commands/${category}/${categoryCommands[prevIndex].id}`} className='z-10 hover:text-amber-600 text-xl py-5'>
                                    {prevIndex === categoryCommands.length - 1 ? '' : `← ${categoryCommands[prevIndex].title}`}
                                </Link>
                            )}
                            {nextIndex !== currentIndex && (
                                <Link href={`/commands/${category}/${categoryCommands[nextIndex].id}`} className='z-10 hover:text-amber-600 text-xl py-5'>
                                    {nextIndex === 1 ? '' : `${categoryCommands[nextIndex].title} →`}
                                </Link>
                            )}
                        </article>
                    </section>
                </section>

            </main>
        </Layout>
    );
}
