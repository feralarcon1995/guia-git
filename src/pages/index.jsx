import Layout from '@/components/layout'
import { getAllCommands } from '@/data/data'
import Link from 'next/link'
import Story from '@/components/story';
import Hero from '@/components/hero';
import Bullets from '@/components/bullets';
import Navbar from '@/components/navbar';


export async function getStaticProps() {
  const allCommandData = getAllCommands();
  return {
    props: {
      allCommandData,
    }
  }
}

export default function Home({ allCommandData }) {


  return (
    <Layout>
      <Navbar allCommandData={allCommandData} />
      <Hero />
      <Story />
      <Bullets />
      <article id="start" className="p-5 flex flex-col gap-3 min-h-screen max-h-full justify-center">
        <div className="flex flex-col ggap-2">
          <h2 className='text-4xl md:text-6xl py-3 font-bold'>Empezamos</h2>
          <hr className="hr" />
          <p className="text-2xl">Antes de comenzar, si no tienes Git instalado, descargalo desde <a href="https://git-scm.com/downloads" target="_blank" className='text-amber-700  underline hover:text-amber-600 font-bold'>aquí</a>.</p>
          <p className="text-base md:text-2xl pt-3">Elige una categoria segun tu nivel: </p>
        </div>
        <ul className="flex flex-col gap-8 pt-5">
          {Object.keys(allCommandData).map(category => {
            const categoryInfo = allCommandData[category][0];
            const { title, description } = categoryInfo;

            return (
              <li className="flex flex-col bg-cat hover:bg-[#000] shadow border border-[#ffff] p-3  gap-2 w-full md:w-9/12" key={category}>
                <Link href={`/commands/${category}`} className='text-xl h-full md:h-32  font-bold text-white'>
                  <span className='text-xl flex flex-col gap-3 '>
                    <b className="uppercase">{title} </b><hr className="hr" /> <small className="text-[#ccc] text-base">{description}</small>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </article>


    </Layout>
  )
}
