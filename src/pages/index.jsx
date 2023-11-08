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
      <article id="start" className="p-2 md:p-16 flex flex-col gap-3 min-h-screen max-h-full justify-center">
        <div className="flex flex-col gap-2">
          <h2 className='text-4xl md:text-6xl py-3 font-bold'>Empezamos</h2>
          <p className="text-2xl">Antes de comenzar, si no tienes Git instalado, descargalo desde <a href="https://git-scm.com/downloads" target="_blank" className='text-amber-700  underline hover:text-amber-600 font-bold'>aquí</a>.</p>
          <p className="text-base md:text-2xl pt-3">Elige una categoria segun tu interes: </p>
        </div>
        <ul className="flex flex-col gap-8 pt-5">
          {Object.keys(allCommandData).map(category => {
            const categoryInfo = allCommandData[category][0];
            const { title, description } = categoryInfo;

            return (
              <li className="flex flex-col justify-between  shadow border p-3  gap-2 w-full md:w-9/12" key={category}>
                <Link href={`/commands/${category}`} className='bg-hero flex flex-col gap-3text-xl p-4  font-bold text-white'>
                  <span className='text-xl font-bold '>
                    {title} 
                  </span>
                  <span className="text-[#ccc]">{description}</span>
                  <span className='flex items-center gap-2 text-amber-600 hover:underline'>Comenzar &#10142;</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </article>


    </Layout>
  )
}
