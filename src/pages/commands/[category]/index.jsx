import { getAllCommands } from '@/data/data';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from "next/head";
import Image from "next/image";
import Layout from '@/components/layout';
import Navbar from '@/components/navbar';

export async function getStaticPaths() {
    const commands = getAllCommands();
    const paths = Object.keys(commands).map(category => ({
        params: { category },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const allCommandData = getAllCommands();
    const commands = getAllCommands()[params.category];
    const categoryInfo = commands[0];
    return { props: { commands, categoryInfo, allCommandData } };
}

export default function Category({ commands, categoryInfo, allCommandData }) {
    const router = useRouter();
    const { category } = router.query;

    return (
        <Layout>
            <Head>
                <meta
                    name="description"
                    content={categoryInfo.description}
                />
                <title>{categoryInfo.title}</title>
            </Head>
            <main className=" dash">
                <Navbar allCommandData={allCommandData} />

                <section className="content p-2 md:p-16 bg-hero mt-10 flex flex-col gap-5 min-h-screen max-h-full justify-between ">
                    <article className="flex justify-between items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl uppercase font-bold py-5 ">{categoryInfo.title}</h1>
                            <p className="text-2xl">{categoryInfo.description}</p>

                        </div>
                        <Image src="/git.png" width={200} height={200} alt="git logo" className='hidden md:block'/>
                    </article>

                    <Image
                        src="/pattern.png"
                        alt="patrones circulares de color naranja"
                        className="absolute opacity-50 bottom-[10px] left-0 pattern"
                        width={200}
                        height={200}
                        priority />
                    <ul className="flex flex-col gap-4">
                        {commands.slice(1).map(command => (
                            <li key={command.id} className="text-2xl font-bold uppercase  hover:text-amber-600">
                                <Link href={`/commands/${category}/${command.id}`}>
                                    {command.title}
                                </Link>

                            </li>

                        ))}
                    </ul>
                    <Link href="/" className=" hover:text-amber-600 text-xl">← Volver atras</Link>
                </section>
            </main>

        </Layout>
    );
}
