import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '@/components/layout';
import Navbar from '@/components/navbar';
import { getAllCommands, getCommandById } from '@/data/data';
import { CodeBlock, CopyBlock, railscast } from "react-code-blocks";

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

export default function Command({ command,allCommandData  }) {
    const router = useRouter();
    const { category } = router.query;
    return (
        <Layout>
            <Head>
                <meta
                    name="description"
                    content={command.description}
                />
                <title>{command.title}</title>
            </Head>
            <Navbar allCommandData={allCommandData} />

            <section className="p-5 mt-10 flex flex-col gap-5 min-h-screen max-h-full justify-center w-full md:w-9/12">
                <button onClick={() => router.push(`/commands/${category}`)} className=" hover:text-amber-600 text-xl py-5 self-start">
                    &#10094;&#10094; Volver atras
                </button>
                <h1 className="text-4xl md:text-6xl uppercase font-bold py-5 "> {command.title}</h1>
                <p className="text-2xl">{command.description}</p>
                <div className='border-gradient w-full md:w-2/4'>
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
                    <><p className="text-2xl">{command.secondDescription}</p>
                        <div className='border-gradient w-full md:w-2/4'>
                            <CopyBlock
                                language="bash"
                                text={command.secondCommand}
                                theme={railscast}
                                showLineNumbers={false}
                                wrapLongLines={true}
                                copied={true}
                            />
                        </div>
                    </> : ''}
                <p className="text-2xl">{command.outputDescription}</p>
                <div className='border-gradient w-full md:w-2/4'>
                    <CodeBlock
                        language="bash"
                        text={command.output}
                        theme={railscast}
                        showLineNumbers={false}
                        wrapLongLines={true}
                        copied={false}
                    />
                </div>

            </section>

        </Layout>
    );
}
