import Head from 'next/head'
import Header from '@components/Header'
import Intro from '@components/Intro'
import Flavors from '@components/Flavors'
import Location from '@components/Location'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Les 7 saveurs de Cucugnan est un producteur français d'épices aromatisées, d'olives et autres produits du terroir, et une maison d'hôtes, dans la région de Perpignan" />
        <meta name="author" content="Les 7 saveurs de Cucugnan est un producteur français d'épices. Le site est créé par O.Terdiman" />
        <title>Les 7 saveurs de Cucugnan</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <main className="flex-shrink-0">
        <Header title="Les 7 saveurs de Cucugnan" />
        <Intro />
        <Flavors />
        <Location />
      </main>
      <Footer />
    </div>
  )
}