import Head from "next/head"
// TYPES
import { iHeadPage } from "src/@types/components"

const HeadPage = ({titlePage}: iHeadPage): JSX.Element => {
    return(
    <Head> 
        <title>{titlePage + ` | Aiko Location`}</title>

        <meta name="description" content="Aiko Location"/>
        <meta name="keywords" content="Aiko Location, localize veiculo"/>
        <meta name="author" content="Samuel Claudino"/>
        <meta name="copyright" content="Aiko"/>
        <meta name="theme-color" content="#343a40"/>
        <meta httpEquiv="content-language" content="pt-BR"/>
        <meta property="og:title" content="Aiko Location"/>
        <meta property="og:description" content="Localize seus veiculos em tempo real."/>
    </Head>)
}

export default HeadPage