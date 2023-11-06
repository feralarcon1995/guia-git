import Head from "next/head";
import Footer from "./footer";


export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/git.png" type="image/x-icon" />
                <meta
                    name="description"
                    content="Guia de git, con comandos y explicaciones de cada uno, por Fernando Alarcon."
                />
                <title>Guia Git</title>
            </Head>
            <main className="fade">{children}</main>
            <Footer/>
        </>
    )
}