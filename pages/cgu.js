import Head from 'next/head'
import Header from '@components/Header'
import Cgu from '@components/Cgu'
import Footer from '@components/Footer'

export default function HomeCgu() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Les 7 saveurs de Cucugnan est un producteur français d'épices aromatisées, d'olives et autres produits du terroir, et un gite d'accueil, dans la région de Perpignan et des Corbières" />
        <meta name="author" content="Les 7 saveurs de Cucugnan est un producteur français d'épices." />
        <title>Les 7 saveurs de Cucugnan - Conditions Générales d'Utilisation</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <main className="flex-shrink-0">
        <Header title="Les 7 saveurs de Cucugnan" />
        <Cgu />
      </main>
      <Footer />
    </div>
  )
}
