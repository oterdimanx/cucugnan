import Head from 'next/head'
import Header from '@components/Header'
import NotFound from '@components/NotFound'
import Footer from '@components/Footer'

export default function Custom404() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Les 7 saveurs de Cucugnan est un producteur français d'épices aromatisées, d'olives et autres produits du terroir, et une maison d'hôtes, dans la région de Perpignan" />
        <meta name="author" content="Les 7 saveurs de Cucugnan est un producteur français d'épices. Il est la propriété de Vincent Busquet." />
        <title>Les 7 saveurs de Cucugnan - 404 Error</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.7saveursdecucugnan.fr" />
      </Head>
      <main className="flex-shrink-0">
        <Header title="Les 7 saveurs de Cucugnan" />
        <NotFound />
      </main>
      <Footer />
    </div>
  )
}