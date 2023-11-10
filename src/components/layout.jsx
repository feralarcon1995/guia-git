import Head from "next/head";
import Footer from "./footer";


export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/git.png" type="image/x-icon" />
                <meta name="title" content="Guia Git" />
                <meta name="description" content="Guía Git por Fernando Alarcon: comandos básicos, configuración, manejo de repositorios locales/online, explicaciones detalladas y enfoque en ramas, esencial para un control de versiones eficiente en proyectos de desarrollo colaborativo." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://guia-git.vercel.app/" />
                <meta property="og:title" content="Guia Git" />
                <meta property="og:description" content="Guía Git por Fernando Alarcon: comandos básicos, configuración, manejo de repositorios locales/online, explicaciones detalladas y enfoque en ramas, esencial para un control de versiones eficiente en proyectos de desarrollo colaborativo." />
                <meta property="og:image" content="/seo.jpg" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://guia-git.vercel.app/" />
                <meta property="twitter:title" content="Guia Git" />
                <meta property="twitter:description" content="Guía Git por Fernando Alarcon: comandos básicos, configuración, manejo de repositorios locales/online, explicaciones detalladas y enfoque en ramas, esencial para un control de versiones eficiente en proyectos de desarrollo colaborativo." />
                <meta property="twitter:image" content="/seo.jpg" />
                <meta
                    name="description"
                    content="Guía Git por Fernando Alarcon: comandos básicos, configuración, manejo de repositorios locales/online, explicaciones detalladas y enfoque en ramas, esencial para un control de versiones eficiente en proyectos de desarrollo colaborativo."/>
                <title>Guia Git</title>
            </Head>
            <main className="fade">{children}</main>
            <Footer />
        </>
    )
}